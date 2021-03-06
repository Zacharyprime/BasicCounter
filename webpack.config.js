const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {

		index: './src/index.js',
		print: './src/print.js',
	},
	devServer: {
		static: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		],
	},
	mode: 'development',
};
