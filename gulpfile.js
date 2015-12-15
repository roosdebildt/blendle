var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// compile sass files synchronously
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/stylesheets/sass/**/*.scss')
    .pipe(sass.sync({
      includePaths: require('node-reset-scss').includePath
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./app/stylesheets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/stylesheets/sass/**/*.scss', ['sass']);
});

// watch and log changes in files
gulp.task('watch', function(){
  var watcher = gulp.watch(['app/*.html', './app/stylesheets/sass/**/*.scss', './app/stylesheets/css/**/*.css']);
  watcher.on('change', function(event){
    console.log('File: ' + event.path + ' was changed.');
  });
});

// live reload
gulp.task('serve', function() {
  browserSync.init({
    server: "./app"
  });

  gulp.watch("./app/stylesheets/sass/*.scss");
  gulp.watch("./app/stylesheets/sass/*.scss").on('change', reload);
});

gulp.task('default', ['sass', 'sass:watch', 'watch', 'serve']);
