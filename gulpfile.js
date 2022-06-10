var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('styles', () =>
    gulp.src('source/style/*.scss')
    	.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
);

gulp.task('watch', () =>
	gulp.watch('source/style/index.scss', gulp.series('styles'))
);