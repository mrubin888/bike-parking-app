var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

var browserify = require('browserify');
var source	= require('vinyl-source-stream');

gulp.task('clean', function() {
	return gulp
		.src('./dist')
		.pipe(clean());
});

gulp.task('scripts', ['clean'], function() {
    return browserify('./app/app.js')
        .bundle().on('error', function(err) {console.log(err.toString())})
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy', ['clean'], function () {
	return gulp
		.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('connect', ['build'], function () {
    return connect.server({
        root: 'dist',
        port: 4000
    })
});

gulp.task('watch', function() {
	return gulp.watch(['src/**/*', 'app/**/*'], ['clean', 'build']);
});

gulp.task('build', ['scripts', 'copy']);

gulp.task('default', ['clean', 'build', 'connect', 'watch']);