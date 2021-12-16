/* eslint-disable camelcase */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('./type-defs')

const isDev = true

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/rogers/index.tsx',
  cache: isDev,
  performance: { hints: false },
  stats: 'minimal',
  bail: !isDev,
  /**
   * devtool: is the one that takes care of letting you know where the source code is mapped against your bundle
   * There are a few options around which one to pick each of one with different trade offs
   * More info: https://webpack.js.org/configuration/devtool/
   */
  devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
  target: 'web',
  output: {
    path: '/dist',
    pathinfo: false,
    publicPath: '/',
    filename: isDev ? '[name].[hash].bundle.js' : '[name].[chunkhash].bundle.js',
    sourceMapFilename: isDev ? '[name].[hash].bundle.map' : '[name].[chunkhash].bundle.map',
    chunkFilename: isDev ? '[name].[hash].chunk.js' : '[name].[chunkhash].chunk.js',
  },
  devServer: {
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    port: 8090,
    hot: true,
    devMiddleware: {
      publicPath: '/',
    },
    static: {
      directory: '/dist',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['src', 'node_modules'],
    fallback: {
      path: false,
    },
  },
  module: {
    noParse: /node_modules\/mapbox-gl\/dist\/mapbox-gl.js/,
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|src\/mobile)/g,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          name: 'commons',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    /**
     * The plugin will generate an HTML5 file for you that includes
     * all your webpack bundles in the body using script tags.
     */
    new HtmlWebpackPlugin({
      title: 'Transfix',
      template: './src/rogers/index.html',
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev,
        collapseInlineTagWhitespace: !isDev,
        collapseBooleanAttributes: !isDev,
        minifyCSS: !isDev,
        minifyJS: !isDev,
        removeScriptTypeAttributes: !isDev,
        removeStyleLinkTypeAttributes: !isDev,
        ignoreCustomFragments: [/\${.*?}/g],
      },
      xhtml: true,
    }),
  ],
}
