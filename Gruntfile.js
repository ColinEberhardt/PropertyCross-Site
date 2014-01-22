module.exports = function(grunt) {

  var path = require("path"),
      config = {
        pkg: grunt.file.readJSON("package.json"),
        propertyCrossBase: path.resolve(grunt.option("pc") || "../PropertyCross"),
        siteBase: process.cwd(),
        execute: {
          assets: {
            src: ["build/generate-assets.js"]
          },
          thumbnails: {
            src: ["build/thumbnail.js"]
          }
        },
        less: {
          main: {
            options: {
              cleancss: true
            },
            files: {
              "less/main.css": "less/main.less"
            }
          }
        }
      };

  grunt.initConfig(config);

  grunt.loadTasks("build/grunt-tasks");
  grunt.loadNpmTasks("grunt-execute");
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask("default", ["metadata", "descriptions", "pieCharts", "downloads", "writePosts", "execute", "less"]);
};