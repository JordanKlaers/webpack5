const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 9002,
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
		alias: {
		}
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]ss$|css$)/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							// Prefer `dart-sass`
							implementation: require("sass"),
							sourceMap: true
						},
					},
				],
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader"
			}
		]
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	}
};