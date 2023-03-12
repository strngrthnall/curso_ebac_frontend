const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compSass() {
  return gulp.src('./src/styles/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function compScript() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compImg() {
  return gulp.src('./src/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imgs'))
}

exports.default = function() {
  gulp.watch('./src/styles/*.sass', { ignoreInitial: false },gulp.series(compSass))
  gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(compScript))
  gulp.watch('./src/imgs/*', { ignoreInitial: false }, gulp.series(compImg))
}