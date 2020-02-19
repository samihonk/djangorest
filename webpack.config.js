const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: ["./contactmemng/reactfront/src/index.js"],
	output: {
		path: path.resolve(__dirname, "contactmemng/reactfront/static/"),
		filename: "reactfront/main.js",
		publicPath: "http://localhost:8080/"
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		host: "0.0.0.0",
		port: "8080"
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
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
};
