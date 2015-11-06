module.exports = {

	templates: {
		cwd: "<%= paths.jade %>",
		files: ['**/*.jade'],
		tasks: ['templates'],
		options: {
			spawn: false,
			interrupt: true,
			livereload: true
		}
	},

	styles: {
		cwd: "<%= paths.sass %>",
		files: ['**/*.scss'],
		tasks: ['styles'],
		options: {
			spawn: false,
			interrupt: true,
			livereload: true
		}
	}

};