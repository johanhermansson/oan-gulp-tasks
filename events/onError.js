var notify = require('gulp-notify');

module.exports = function( error ) {
	notify.onError({
		title    : 'Gulp',
		subtitle : 'Failure!',
		message  : error.message,
		sound    : 'Beep'
	})( error );

	this.emit('end');
};
