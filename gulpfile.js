var gulp = require('gulp'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('styles', function() {
  return gulp.src(['themes/lc/static/sass/*.scss'])
  .pipe(compass({
    css: 'themes/lc/static/css',
    sass: 'themes/lc/static/scss',
    image: 'static/images'
  }))
  .pipe(gulp.dest('themes/lc/static/css'))
});

gulp.task('sass', function() {
  return gulp.src('themes/lc/static/sass/styles.scss')
  .pipe(sass())  //using gulp-sass
  .pipe(gulp.dest('themes/lc/static/css'))
});

gulp.task('watch', function() {
  gulp.watch('themes/lc/static/sass/**/*.scss', ['sass']);
})
