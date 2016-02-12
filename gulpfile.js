const gulp = require('gulp');
const del = require('del');
const tinySSG = require('tiny-ssg');
const connect = require('gulp-connect');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');

var buildFolder = '_site';

// Deletes the build folder
gulp.task('clean', function() {
  del.sync(buildFolder);
});

// Compiles and minifies main.less and copies it to the build folder
gulp.task('less', function() {
  gulp.src(['less/**/main.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildFolder + '/styles'));
});

// Copies resources to the build folder
gulp.task('copy', function() {
  gulp.src(['assets/**', 'screenshots/**'], {base: '.'})
    .pipe(gulp.dest(buildFolder));
  gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest(buildFolder + '/styles'));
});

// Runs tinyssg
gulp.task('tinyssg', function() {
  const config = {
      filePattern: ['index.html', '_posts/**/*.md'],
      globalPattern: ['site.yml'],
      globalData: {site: {baseurl: 'http://localhost:8080'}}
    };
  return tinySSG.build(config);
});

// Reloads the website
gulp.task('reload-site', function() {
  gulp.src(buildFolder + '/**/*.*').pipe(connect.reload());
});

// Watches for changes and triggers tinyssg or less, followed by site reload
gulp.task('watch', function() {  
  gulp.watch([
      '_includes/**/*.*',
      '_layouts/**/*.*',
      '_posts/**/*.*'], 
    ['tinyssg', 'reload-site']);
  gulp.watch(['less/**/*.less'], ['less', 'reload-site']);
});

// Runs a server with livereload
gulp.task('connect', ['watch'], function() {
   connect.server({
      root: buildFolder,
      livereload: true
   });
});

gulp.task('build', ['copy', 'less', 'tinyssg']);

gulp.task('default', ['clean', 'build', 'connect']);