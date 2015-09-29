var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		minifyCss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect'),
    sass = require('gulp-sass');

// server
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

//css
gulp.task('css', function () {
  	gulp.src('src/style/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(minifyCss())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('src/css/'))
    .pipe(connect.reload());
});

// html 
gulp.task('html', function() {
	gulp.src('src/index.html')
	.pipe(connect.reload());
});
 
// watch
gulp.task('watch', function () {
	gulp.watch('src/style/*.css', ['css'])
	gulp.watch('src/*.html', ['html'])
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);