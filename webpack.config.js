const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const pkg = require('./package.json');

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-redux',
  'react-dom',
  'axios',
  'babel-preset-stage-1',
  'redux-thunk',
  'react-router-dom',
];

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      assets: path.resolve(__dirname, 'Assets/'),
    },
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      {
        use: ['style-loader', 'css-loader', 'less-loader'],
        test: /\.less$/,
      },
      {
        use: ['url-loader'],
        test: /\.(png|jpg)$/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: pkg.name,
          message: `${ severity }: ${ error.name }`,
          subtitle: error.file || '',
        });
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: '/',
    quiet: true,
    disableHostCheck: true, // security risk need to turn this off before prod allows ngrok to work on wildcard
    port: 4000,
  },
};
