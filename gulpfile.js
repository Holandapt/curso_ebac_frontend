const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require ('gulp-imagemin')

function compilaSass () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJavascript() {
    return gulp.src ('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/styles/scripts'))
}

function comprimeImagens () {
    return gulp.src ('./source/images/*')
    .pipe (imagemin())
    .pipe (gulp.dest("./build/images"))
}

exports.sass = compilaSass
exports.watch = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series (compilaSass));
}
exports.javascript = comprimeJavascript;
exports.images = comprimeImagens;