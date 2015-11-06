module.exports = {
	app: {
		tasks: ['scripts', 'styles', 'nodemon', 'watch'],
		options: {
			logConcurrentOutput: true,
			limit: 4
		}
	}
};