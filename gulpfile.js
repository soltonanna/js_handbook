const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Process all HTML files, including those in subfolders
gulp.task('html', () => gulp.src('src/**/*.html').pipe(gulp.dest('dist')));

// Process all CSS files, including those in subfolders
gulp.task('css', () => gulp.src('src/**/*.css').pipe(cleanCSS()).pipe(gulp.dest('dist')));

// Process all JS files, including those in subfolders
gulp.task('js', () => gulp.src('src/**/*.js').pipe(uglify()).pipe(gulp.dest('dist')));

gulp.task('build', gulp.series('html', 'css', 'js'));
