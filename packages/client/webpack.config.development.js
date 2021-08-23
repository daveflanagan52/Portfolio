const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    chunkFilename: '[name]_chunk.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    publicPath: `${process.env.PUBLIC_PATH || '/'}`,
    historyApiFallback: {index: '/index.html'},
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/api/v1/': {
        target: 'http://localhost:8083',
        pathRewrite: { '^/api/v1/': '/' },
      },
    },
  },
  devtool: 'inline-source-map',
  watchOptions: {
    poll: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dave Flanagan',
      template: './src/index.ejs',
      filename: `${process.env.BASE_URL || ''}index.html`,
    }),
    new webpack.ProvidePlugin({
      canvg: 'canvg',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|woff|mp4|webm|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
};
