module.exports = function(grunt) {
  var yaml = require("yamljs"),
      _ = require("lodash"),
      extensionName = {
        apk: "android",
        ipa: "ios",
        xap: "windowsphone"
      },
      visibleDownloads = [ "android", "windowsphone" ],
      pathExtension = function(path) { return path.substring(path.lastIndexOf(".") + 1); },
      pieChartImplFilter = _.curry(function(impl, elem) { return elem.statsRoot == impl; });

  grunt.registerTask("writePosts", "Write the Jekyll posts", function() {
    var metadataKeys = grunt.config.get("metadataKeys"),
        pieCharts = grunt.config.get("pieCharts");

    
    grunt.log.debug(yaml.stringify(metadataKeys));
    metadataKeys.forEach(function(impl) {
      var metadata = grunt.config.get("metadata."+impl),
          downloads = grunt.config.get("downloads."+impl) || [],
          pieChart = _.first(pieCharts.filter(pieChartImplFilter(impl))) || { pie: { common: { segment: 'M150,150l0.00,-145.00A145,145,0,1,1,149.95,5.00z' } }, statsRoot: impl },
          description = grunt.config.get("description."+impl),
          content = "---\nlayout: framework\n",
          postName = "_posts/2012-12-18-"+impl+".md";

      content += yaml.stringify({
        title: metadata.implName,
        framework: metadata.name,
        platforms: metadata.platforms,
        pie: pieChart.pie,
        contributors: metadata.contributors,
        downloads: _.zipObject(downloads.map(function(el) { return [ extensionName[pathExtension(el)], el ]; }).filter(function(el) { return _.contains(visibleDownloads, _.first(el)); }))
      }, 2, 2);

      if (metadata.appId) {
        content += "phonegap: true\n";
      }

      content += "\n---\n" + description;

      grunt.verbose.debug("\n===============\n"+impl+"\n===============\n"+content);

      grunt.file.write(postName, content);
      grunt.log.oklns("Written "+postName);
    });
  });
};
