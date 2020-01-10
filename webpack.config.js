const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: ["./contactmemng/reactfront/src/index.js"],
	output: {
		path: path.resolve(
			__dirname,
			"contactmemng/reactfront/static/reactfront"
		),
		filename: "main.js",
		publicPath: "http://localhost:8080/"
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	resolve: {
		alias: { "react-dom": "@hot-loader/react-dom" }
	}
};
