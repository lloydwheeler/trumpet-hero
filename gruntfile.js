module.exports = function(grunt) {

	// Automatically load our grunt tasks
	require('load-grunt-tasks')(grunt);

	// Grunt task loader options
	var options = {
		config: {
			src: './automation/*.js'
		},
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			serve: {
					script: 'app.js',
					options: {
						ignore: ['node_modules/**']
					}
			}
		},
		paths: {
			jade: "./templates",
			sass: "./styles",
			css: "./dist/css",
			js: "./dist/js",
			es6: "./scripts",
			build: "./build",
			iconfont: "./webfont"
		}
	};

	var configs = require('load-grunt-configs')(grunt, options);
	grunt.initConfig(configs);

	// Styles
	grunt.registerTask('styles', [
		'clean:styles',
		'sass:dist',
		'postcss:dist',
		'cssmin:dist'
	]);

	// Scripts
	grunt.registerTask('scripts', [
		'webpack-dev-server:start'
	]);

	// Templates
	grunt.registerTask('templates', [
		'clean:templates',
		'jade:dev'
	]);

	// Icon font generation
	grunt.registerTask('iconfont', [
		'webfont'
	]);

	grunt.registerTask('default', ['concurrent:app']);

	grunt.registerTask('build', ['clean:build', 'jade:build', 'copy:styles', 'copy:images', 'copy:fonts', 'webpack']);

};