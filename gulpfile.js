var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compile-styles', function(){
  gulp.src('./app/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./app/'));
});
