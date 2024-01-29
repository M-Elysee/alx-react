const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
		new HTMLWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
	],
  mode: 'development',
  entry: {
    header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
    body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'csss-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  optimization: {
		splitChunks: {
			chunks: 'all',
    }
  },
  performance: {
		maxAssetSize: 1000000,
	},
  devtool: 'inline-source-map',
};