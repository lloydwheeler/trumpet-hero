module.exports = {

	styles: {
		files: [{
			expand: true,
			cwd: '<%= paths.css %>',
			src: '**/*.css',
			dest: '<%= paths.build %>/dist/css'
		}]
	},

	templates: {
		files: [{
			expand: true,
			cwd: './.tmp/html',
			src: '**/*.html',
			dest: '<%= paths.build %>'
		}]
	},

	images: {
		files: [{
			expand: true,
			cwd: './dist/img',
			src: '**/*',
			dest: '<%= paths.build %>/dist/img'
		}]
	},

	fonts: {
		files: [{
			expand: true,
			cwd: './dist/font',
			src: '**/*',
			dest: '<%= paths.build %>/dist/font'
		}]
	}
}