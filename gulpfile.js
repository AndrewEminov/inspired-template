'use strict';

const gulp=require('gulp');
const less = require('gulp-less');
//const gulp-autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');



gulp.task('styles', () => {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(postcss([ autoprefixer({grid: true, browsers: ["> 0%"]})]))
        .pipe(gulp.dest('css'));
    /*gulp.src('src/less/fonts.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));*/

});



gulp.task('watch', () => {
    gulp.watch('less/*.less', ['styles']);
    //gulp.watch('src/**/*.html', ['html']);
    //gulp.watch('src/**/*.ejs', ['html']);
    //gulp.watch('src/img/**/*.*', ['img']);
    //gulp.watch('src/js/**/*.*', ['js']);
    //gulp.watch('src/fonts/**/*', ['fonts']);
});

gulp.task('default', ['styles', 'watch']);
gulp.task('prod', ['styles']);


/*

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

*/