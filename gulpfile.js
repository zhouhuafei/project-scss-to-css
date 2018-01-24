const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function () {
    gulp.watch(['scss/**/*.scss'], ['scss']);
});

gulp.task('scss', function () {
    gulp.src('scss/**/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['scss', 'watch']);
