module.exports = {

	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.css %>',
				src: ['**/*.css', '!**/*.min.css'],
				dest: '<%= paths.css %>',
				ext: '.min.css'
			}
		],
		options: {
			keepSpecialComments: 0
		}
	}
	
}