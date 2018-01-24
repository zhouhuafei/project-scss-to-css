const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const project = ['project1', 'project2']; // 当前项目名称 project1是一个项目 project2是一个项目 名字跟着外面的目录一样

gulp.task('watch', function () {
    project.forEach(function (v) {
        gulp.watch([`${v}/scss/**/*.scss`], ['scss']);
    });
});

gulp.task('scss', function () {
    project.forEach(function (v) {
        gulp.src(`${v}/scss/**/*.scss`)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(`${v}/css`));
    });
});

gulp.task('default', ['scss', 'watch']);
