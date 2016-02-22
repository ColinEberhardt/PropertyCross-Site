const gulp = require('gulp');
const del = require('del');
const tinySSG = require('tiny-ssg');
const connect = require('gulp-connect');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');

var buildFolder = '_site';

// Deletes the build folder
gulp.task('clean', function() {
  return del.sync(buildFolder);
});

// Compiles and minifies main.less and copies it to the build folder
gulp.task('less', function() {
  return gulp.src(['less/**/main.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildFolder + '/styles'));
});

// Copies resources to the build folder
gulp.task('copy', function() {
  return gulp.src(['assets/**', 'frameworks/**/*.png'], {base: '.'})
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

gulp.task('tinyssg-production', function() {
  const config = {
      includesPattern: ['_includes/**/*.*'],
      filePattern: ['index.html', 'frameworks/**/*.md'],
      globalPattern: ['site.yml']
    };
  return tinySSG.build(config);
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
      'frameworks/**/*.*'], function() {
          runSequence('tinyssg', 'reload-site');
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

gulp.task('build', function(callback) {
  runSequence('clean', 'copy', 'less', 'tinyssg', callback);
});

gulp.task('build-production', function(callback) {
  runSequence('clean', 'copy', 'less', 'tinyssg-production', callback);
});

gulp.task('default', function(callback) {
  runSequence('build', 'watch', 'connect', callback);
});