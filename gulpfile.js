const gulp = require('gulp');
const del = require('del');
const tinySSG = require('tiny-ssg');
const connect = require('gulp-connect');
const less = require('gulp-less');
const minifyCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const ghPages = require('gulp-gh-pages');
const args = require('yargs').argv;
const htmlmin = require('gulp-htmlmin');

var buildFolder = '_site';
var username = 'username';
var accessToken = 'accessToken';
var repositoryName = "repositoryName";

// Deletes the build folder
gulp.task('clean', function() {
  return del.sync(buildFolder);
});

// Compiles and minifies main.less and copies it to the build folder
gulp.task('less', function() {
  return gulp.src(['**/main.less'], {base: './less/shared'})
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildFolder + '/styles'));
});

gulp.task('copy-js', function() {
  return gulp.src(['**/carousel.js', '**/transition.js', '**/collapse.js'], {base: './node_modules/bootstrap/js'})
    .pipe(gulp.dest(buildFolder + '/scripts'));
});

// Copies resources to the build folder
gulp.task('copy', ['copy-js'], function() {
  return gulp.src(['assets/**', 'frameworks/**/*.png', 'scripts/**/*.js', 'CNAME', 'favicon.ico'], {base: '.'})
    .pipe(gulp.dest(buildFolder));
});

// Runs tinyssg
gulp.task('tinyssg', function() {
  const config = {
      includesPattern: ['_includes/**/*.*'],
      filePattern: ['index.html', 'frameworks/**/*.md'],
      globalPattern: ['site.yml'],
      globalData: {site: {baseurl: 'http://localhost:8080'}}
    };
  return tinySSG.build(config);
});

// Runs tinyssg with baseurl from site.yml
gulp.task('tinyssg-production', function() {
  const config = {
      includesPattern: ['_includes/**/*.*'],
      filePattern: ['index.html', 'frameworks/**/*.md'],
      globalPattern: ['site.yml']
    };
  return tinySSG.build(config);
});

// Minify HTML
gulp.task('htmlmin', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('_site'));
});

// Reloads the website
gulp.task('reload-site', function() {
  return gulp.src(buildFolder + '/**/*.*').pipe(connect.reload());
});

// Watches for changes and triggers tinyssg or less, followed by site reload
gulp.task('watch', function(cb) {
  gulp.watch([
    '_includes/**/*.*',
    '_layouts/**/*.*',
    'frameworks/**/*.*', 
    'index.html'], function() {
      runSequence('tinyssg', 'htmlmin', 'reload-site');
    });
  gulp.watch(['scripts/**/*.*'], function() {
    runSequence('copy-js', 'reload-site');
  });
  gulp.watch(['less/**/*.less'], function() {
    runSequence('less', 'reload-site');
  });
  cb();
});

// Runs a server with livereload
gulp.task('connect', function(cb) {
   connect.server({
      root: buildFolder,
      livereload: true
   });
   cb();
});

// Pushes _site content to gh-pages branch
gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages({
      remoteUrl: 'https://' + username + ':' + accessToken + '@github.com/' + username + '/' + repositoryName + '.git',
      message: args.message
    }));
});

gulp.task('build', function(callback) {
  // We need htmlmin on dev-build as well to remove whiteSpace between tags which breaks the layout for 50% width elements
  runSequence('clean', 'copy', 'less', 'tinyssg', 'htmlmin', callback);
});

gulp.task('build-production', function(callback) {
  runSequence('clean', 'copy', 'less', 'tinyssg-production', 'htmlmin', callback);
});

gulp.task('default', function(callback) {
  runSequence('build', 'watch', 'connect', callback);
});