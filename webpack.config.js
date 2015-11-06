var path = require("path");
var webpack = require("webpack");

module.exports = {

	entry: [
		"./app/main"
	],

	output: {
			path: path.join(__dirname, "/build/dist/js"),
			publicPath: "/dist/js/",
			filename: "app.js"
	},

	devServer: {
		noInfo: true
	},

	module: {
			loaders: [
					{ 
						test: /\.js?$/, 
						exclude: /(node_modules|vendor)/,
						loaders: ["babel?optional[]=runtime&stage=0"]
					},

					{
						test: /node_modules/,
						loader: "imports?define=>undefined"
					}
			]
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),

		new webpack.optimize.DedupePlugin(),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				drop_console: true
			}
		})
	]
}
