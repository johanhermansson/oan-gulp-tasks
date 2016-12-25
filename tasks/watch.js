var config  = require('../../gulpconfig.json').watch,
gulp        = require('gulp'),
gutil       = require('gulp-util'),
seq         = require('run-sequence');

gulp.task('watch', function() {
    seq('svg', 'sass', 'browserify:watch', 'rev');

    gulp.watch( config.sass, ['sass', 'rev'] );

    gutil.log( gutil.colors.bgGreen('Watching for changes...') );
});

module.exports = {};