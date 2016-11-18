var
  gulp  = require('gulp'),
  watch = require('./semantic/tasks/watch'),
  build = require('./semantic/tasks/build')
;

// import task with a custom task name
gulp.task('watch ui', watch);
gulp.task('build ui', build);

gulp.task('build', ['build ui'], function () {
 
  var stream = gulp.src(['semantic/dist/**/*'])
        // do some concatenation, minification, etc.
        .pipe(gulp.dest('public/semantic/'));
    return stream; // return the stream as the completion hint


});


