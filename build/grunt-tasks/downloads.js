module.exports = function(grunt) {
  var knox = require("knox"),
      child_process = require("child_process"),
      Q = require("q"),
      _ = require("lodash"),
      YAML = require("yamljs"),
      pathExtension = function(el) { return el.path.substring(el.path.lastIndexOf(".") + 1); },
      commitComparer = _.curry(function(timestampResolver, a) { return 0 - timestampResolver[a.commit]; });

  grunt.registerTask('downloads', 'Finding latest downloads', function() {
    var client, loadData, uniqueArray, credentials,
        pcBase = grunt.config.get("propertyCrossBase"),
        awsKey = grunt.option("aws.key"),
        awsSecret = grunt.option("aws.secret"),
        done = this.async();

    uniqueArray = function(elem, pos, self) {
      return self.indexOf(elem) === pos;
    };

    loadData = function(err, data) {
      var i, key, commits, implKey, version, commitPromises, commitPromisesReduction,
          downloads = {},
          keyRegex = /-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)\./,
          keys = data.Contents.map(function(contents) { return contents.Key; });

      commits = keys.filter(_.bind(keyRegex.test, keyRegex)).map(function(key) {
        return keyRegex.exec(key)[2];
      }).filter(uniqueArray).filter(function(el) {
        return el !== "initial";
      })

      commitPromisesReduction = function(promises, commitId) {
        var load,
            deferred = Q.defer();

        load = function() {
          var content = "",
            git = child_process.exec("git show -s --format=%ct "+commitId, { cwd: pcBase });

          git.stdout.on("data", function(buf) { content += buf.toString(); });
          git.stdout.on("end", function() {
            var ts = _.parseInt(content.trim());
            grunt.log.debug("Timestamp for commit "+commitId+" is "+ts)
            deferred.resolve([commitId, ts]);
          });
          git.stdout.resume();
        };

        if (promises.length === 0) {
          load();
        } else {
          promises[promises.length - 1].then(load);
        }

        return promises.concat([deferred.promise]);
      };

      commitPromises = commits.reduce(commitPromisesReduction, []);

      for (i = 0; i < keys.length; i++) {
        key = keyRegex.exec(keys[i]);
        if (key !== null) {
          implKey = key[1].toLowerCase();
          version = key[2];
          if (!downloads[implKey]) {
            downloads[implKey] = { commits: [], files:[] };
          }
          if (downloads[implKey].commits.indexOf(version) === -1) {
            downloads[implKey].commits.push(version);
          }
          downloads[implKey].files.push({
            commit: version,
            path: "https://s3-eu-west-1.amazonaws.com/propertycross/" + keys[i]
          });
        }
      }

      Q.all(commitPromises).done(function(data) {
        var commitTimestamps = _.zipObject(data);
        commitTimestamps.initial = -1;
        Object.keys(downloads).forEach(function(key) {
          var impl = downloads[key];
          var files = _(impl.files).groupBy(pathExtension).flatten(function(ext) { return _(ext).sortBy(commitComparer(commitTimestamps)).first().path; });
          grunt.config.set("downloads."+key, files.value());
        });
        grunt.log.debug(YAML.stringify(grunt.config.get("downloads")));
        done(true);
      });
    }

    if (!awsKey || !awsSecret) {
      grunt.log.error("You need to supply aws.key and aws.secret");
      done(false);
    } else {
      credentials = {
        key: awsKey,
        secret: awsSecret,
        bucket: "propertycross",
        region: "eu-west-1"
      };
      grunt.log.debug("Using credentials:\n"+YAML.stringify(credentials));
      client = knox.createClient(credentials);
      client.list({}, loadData);
    }
  });
};