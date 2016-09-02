var gulp = require('gulp');
var tsc = require('gulp-typescript');
var browserSync = require('browser-sync');

//browser-sync task
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./src"
    }
  });
});

//watch for typescript changes to be compiled and outputted to dist folder
gulp.task('typescript', function() {
  return gulp
    .src('./src/*.ts')
    .pipe(tsc({
      noImplicitAny: true,
      out: 'app.js'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

//watch for HTML changes, then output to dist folder
gulp.task('html', function() {
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
});

//default task
gulp.task('default', ['typescript', 'browser-sync','html'], function() {
  gulp.watch('src/*.ts', ['typescript']);
  gulp.watch(['src/*.html'], ['html']);
});