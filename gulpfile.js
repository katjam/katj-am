var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var precss = require('precss');


gulp.task('css', function () {
  var processors = [
    cssnext,
    precss
  ];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/*')
    .pipe(gulp.dest('./build/js'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./build/fonts'));
});


gulp.task('build', ['html', 'css']);
