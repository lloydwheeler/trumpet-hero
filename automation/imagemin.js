module.exports = {

	options: {
		optimizationLevel: 7,
		svgoPlugins: [{ removeViewBox: false }],
		progressive: true
	},

	dynamic: {
		files: [{
			expand: true,
			cwd: 'export/dist/img',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'export/dist/img'
		}]
	}

}