module.exports = function(grunt) {
  var path = require("path"),
      child_process = require("child_process"),
      JSONStream = require("JSONStream");

  grunt.registerTask('pieCharts', 'Produce pie chart data', function() {
    var process,
        pcBase = grunt.config.get("propertyCrossBase"),
        parser = JSONStream.parse(),
        done = this.async();

    parser.on("root", function(data) {
      grunt.config.set("pieCharts", data.stats);
      done(true);
    });

    process = child_process.fork(path.join(pcBase, "build/stats.js"), ["json"], { cwd: pcBase, silent: true });
    process.stdout.pipe(parser);
  });
};