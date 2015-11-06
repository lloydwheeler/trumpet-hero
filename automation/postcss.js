module.exports = {
	
	options: {
		map: false, // inline sourcemaps

		processors: [
			require('autoprefixer-core')({browsers: 'last 10 versions'})
		]
	},

	dist: {
		src: ['<%= paths.css %>/*.css', '!<%= paths.css %>/*.min.css']
	}

};