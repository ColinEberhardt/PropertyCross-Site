module.exports = function(grunt) {
  var _ = require("lodash"),
      path = require("path");

  grunt.registerTask('metadata', 'Load Implementation Metadata', function() {
    var i, pkg, pkgLocation,
        metadata = [],
        pcBase = grunt.config.get("propertyCrossBase");

    grunt.log.debug(pcBase);
    var packages = grunt.file.expand({ cwd: pcBase }, "*/package.json");

    for (i = 0; i < packages.length; i++) {
      grunt.log.debug("Reading package "+packages[i]+" in "+pcBase);
      pkgLocation = path.join(pcBase, packages[i]);
      pkg = grunt.file.readJSON(pkgLocation);
      if (pkg.implName) {
        grunt.log.oklns("Loaded implementation: "+pkg.implName);
        _.extend(pkg, { path: path.dirname(pkgLocation) });
        grunt.config.set("metadata."+pkg.name, pkg);
        metadata.push(pkg.name);
      }
    }
    grunt.config.set("metadataKeys", metadata);
  });
};