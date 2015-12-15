var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// compile sass files synchronously
gulp.task('sass', function () {
  gulp.src('./app/stylesheets/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/stylesheets/css'));
});

// watch and log changes in files
gulp.task('watch', function(){
  var watcher = gulp.watch(['app/*.html', './app/stylesheets/sass/**/*.scss']);
  watcher.on('change', function(event){
    console.log('File: ' + event.path + ' was changed.');
  });
});

gulp.task('connect'), connect.server({
  root: ['app']
});

gulp.task('default', ['sass', 'connect', 'watch']);
