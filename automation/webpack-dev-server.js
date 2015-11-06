var webpackDebugConfig = require('../webpack.debug.config.js');

module.exports = {
	
	options: {
		webpack: webpackDebugConfig,
		publicPath: webpackDebugConfig.output.publicPath
	},
	start: {
		keepAlive: true,
		webpack: {
			devtool: "eval",
			debug: true
		}
	}

}