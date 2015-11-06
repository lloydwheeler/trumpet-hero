var path = require("path");
var webpack = require("webpack");

module.exports = {

	entry: [
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		"./app/main"
	],

	output: {
			path: path.join(__dirname, "/public/dist/js"),
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
		new webpack.HotModuleReplacementPlugin()
	]
}
