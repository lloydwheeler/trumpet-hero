module.exports = {

	dev: {
		options: {
			data: {
				debug: true
			},
			pretty: true
		},

		files: [{
			cwd: '<%= paths.jade %>',
			expand: true,
			src: ['*.jade'],
			dest: '.tmp/html',
			ext: '.html'
		}]
	},

	build: {
		options: {
			data: {
				debug: false
			},
			pretty: true
		},

		files: [{
			cwd: '<%= paths.jade %>',
			expand: true,
			src: ['*.jade'],
			dest: '<%= paths.build %>',
			ext: '.html'
		}]
	}
};