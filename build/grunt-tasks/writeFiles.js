module.exports = function(grunt) {
  var yaml = require("yamljs"),
      _ = require("lodash"),
      fileExtensions = {
        apk: "android",
        ipa: "ios",
        xap: "windowsphone"
      };

  grunt.registerTask("writePosts", "Write the Jekyll posts", function() {
    var metadataKeys = grunt.config.get("metadataKeys");
    grunt.log.debug(yaml.stringify(metadataKeys));
    metadataKeys.forEach(function(impl) {
      var metadata = grunt.config.get("metadata."+impl),
          downloads = grunt.config.get("downloads."+impl) || [],
          pieChart = grunt.config.get("pieCharts."+impl) || { common: { segment: 'M150,150l0.00,-145.00A145,145,0,1,1,149.95,5.00z' } },
          description = grunt.config.get("description."+impl),
          content = "---\nlayout: framework\n",
          postName = "_posts/2012-12-18-"+impl+".md";

      content += yaml.stringify({
        title: metadata.implName,
        framework: metadata.name,
        platforms: metadata.platforms,
        pie: pieChart,
        contributors: metadata.contributors,
        downloads: _.zipObject(downloads.map(function(el) { return [fileExtensions[el.substring(el.lastIndexOf(".") + 1)], el] }))
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
