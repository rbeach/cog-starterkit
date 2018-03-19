/**
 * @file
 * Task: Watch.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';
  var path = require('path');

  gulp.task('watch', ['watch:sass', 'watch:styleguide', 'watch:js']);

  gulp.task('watch:js', function () {
    return gulp.watch([
      options.js.files
    ], function () {
      plugins.runSequence(
        'lint:js',
        'lint:css',
        'compile:js',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:sass', function () {
    return gulp.watch([
      options.sass.files
    ], function () {
      plugins.runSequence(
        'compile:sass',
        'minify:css',
        'browser-sync:reload'
      );
    });
  });

  gulp.task('watch:styleguide', function () {
    return gulp.watch([
      options.sass.files,
      path.join(options.styleGuide.builder, "/pages/**/*.*")
    ], function () {
      plugins.runSequence(
        'compile:styleguide'
      );
    });
  });
};
