const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'world1-1': './src/scripts/world1-1.js'
	},
	output: {
		path: __dirname + '/dist/',
		filename: './scripts/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/sprites',
							publicPath: '/assets/sprites'
						}
					}
				],
				include: __dirname + '/src/assets/sprites'
			}
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['dist'] },
			files: ['./dist/*'],
			notify: false
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			chunks: ['world1-1']
		})
	],
	watch: true,
	devtool: 'source-map'
};
