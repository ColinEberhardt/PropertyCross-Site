module.exports = function(grunt) {
  var path = require("path");

  grunt.registerTask('descriptions', 'Load Implementation Descriptions', function() {
    var i, impl, readme, j,
        overview = null,
        metadata = grunt.config.get("metadataKeys"),
        headingRegex = /^#+/,
        overviewRegex = /^#+ *(Overview|Introduction)/;

    for (i = 0; i < metadata.length; i++) {
      grunt.log.debug("Getting metadata for "+metadata[i]);
      impl = grunt.config.get("metadata." + metadata[i]);
      readme = grunt.file.read(path.join(impl.path, "README.md")).split("\n");
      for (j = 0; j < readme.length; j++) {
        if (overviewRegex.test(readme[j])) {
          grunt.log.debug("Found start of overview");
          overview = "";
        } else if (overview !== null && headingRegex.test(readme[j])) {
          grunt.log.debug("Found end of overview");
          overview += "\n" +
            "To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/"+
            path.basename(impl.path) +
            "'>see the github source</a>.";
          grunt.config.set("description." + metadata[i], overview);
          grunt.log.debug("Content is: "+overview);
          overview = null;
          break;
        } else if (overview !== null) {
          overview += readme[j] + "\n";
        }
      }
    }
  });
};
