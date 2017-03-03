var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('default', function() {
  gulp.watch('./app/*.sass', ['compile-styles']);
});

gulp.task('compile-styles', function(){
  gulp.src('./app/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./app/'));
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});
