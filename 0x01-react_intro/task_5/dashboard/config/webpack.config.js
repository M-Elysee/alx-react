const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
	],
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
    open: true,
    hot: true,
  },
  optimization: {
		splitChunks: {
			chunks: 'all',
    }
  },
  performance: {
		maxAssetSize: 1000000,
    hints: false,
    maxEntrypointSize: 1000000,
	},
  devtool: 'inline-source-map',
};