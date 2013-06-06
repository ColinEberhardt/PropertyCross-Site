var async = require('async');
var exec = require('child_process').exec;
var render = require('mustache').render;
var fs = require('fs');

var CONCURRENCY_LIMIT = 5;

async.series([
  generateFrameworkLogos.bind(null, "assets/templates/tech_badge_bg.png",
                                                  "assets/templates/tech_badge_mask.png",
                                                  "assets/templates/tech_badge_fg.png", [
    ["xamarin"],
    ["air"],
    ["titanium"],
    ["jqtouch"],
    ["jquerymobile"],
    ["mgwt"],
    ["senchatouch2"],
    ["native"],
    ["rhomobile"],
    ["kendoui"],
    ["intelappframework"],
    ["lungo"],
    ["phonejs"],
    ["enyo"]
  ])

], function(err) {
  if (err) {
    console.error(err);
  }
});

function generateFrameworkLogos(background, mask, foreground, icons, callback) {
  async.forEachLimit(icons, CONCURRENCY_LIMIT, function(config, callback) {
    var maskedImage = "framework-icons/" + config[0] + "-masked-temp.png",
          withBackground = "framework-icons/" + config[0] + "-with-background-temp.png",
          complete = "framework-icons/" + config[0] + "-complete.png";

    async.series([
      function(callback) {
        // mask the logo
        renderAndExec(
            "convert    \"{{{icon}}}\"  \"{{{mask}}}\" -alpha Off  -compose CopyOpacity -composite png32:\"{{{result}}}\"",
            {
              icon: "assets/" + config[0] + ".png",
              mask: mask,
              result:  maskedImage
            },
            callback);
      },
      function(callback) {
        // compose with background
        renderAndExec(
            "convert   \"{{{background}}}\" \"{{{overlay}}}\" -composite png32:\"{{{result}}}\"",
            {
              background: background,
              overlay: maskedImage,
              result: withBackground
            },
            callback);
      },
      function(callback) {
        // compose with foreground
        renderAndExec(
            "convert   \"{{{background}}}\" \"{{{overlay}}}\" -composite -define png:exclude-chunks=date png32:\"{{{result}}}\"",
            {
              background: withBackground,
              overlay: foreground,
              result: complete
            },
            callback);
      },
      function(callback) {
        // delete temp files
        fs.unlink(maskedImage, callback)
      },
      function(callback) {
        // delete temp files
        fs.unlink(withBackground, callback)
      }
    ], callback);

  }, callback);
}


function renderAndExec(template, data, callback) {
  var cmd = render(template, data);
  exec(cmd, function(err) {
    if (err) {
      console.error("Failed to execute " + cmd + "\n");
    }
    callback(err);
  });
}
