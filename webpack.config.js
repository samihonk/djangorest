const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: ["./manager/reactfront/src/index.js"],
	output: {
		path: path.resolve(__dirname, "manager/reactfront/static/"),
		filename: "reactfront/main.js",
		publicPath: "http://localhost:8080/",
	},
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		host: "0.0.0.0",
		port: "8080",
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		alias: { "react-dom": "@hot-loader/react-dom" },
		extensions: [".js", ".jsx"],
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
	},
};
