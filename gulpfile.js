const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const fs = require('fs');

const projectName = 'project';
const projectPath = `${__dirname}/${projectName}/`;
const projectAll = fs.readdirSync(projectPath);
const projectDir = projectAll.filter(function (v) {
    return fs.statSync(`${projectPath}/${v}`).isDirectory() === true;
});
const project = projectDir.map(function (v) {
    return `${projectName}/${v}`;
});

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
                cascade: false,
            }))
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(`${v}/css`));
    });
});

gulp.task('default', ['scss', 'watch']);
