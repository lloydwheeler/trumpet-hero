module.exports = {
	icons: {
		src: '<%= paths.iconfont %>/*.svg',
		dest: './dist/font/'
	},
	options: {
		engine: 'node',
		autohint: true,
		descent: 0,
		fontHeight: 0,
		template: '<%= paths.iconfont %>/templates/template.scss'
	}
}