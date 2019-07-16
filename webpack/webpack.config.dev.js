
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const themeVars = require('../src/theme.less');
const dev = require('../config/env');

process.env.NODE_ENV = 'development';

module.exports = {
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, '../src/index.js'),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        hot: false,
        host: '127.0.0.1',
        port: process.env.PORT || 8000,
        open: true,
        historyApiFallback: {
          disableDotRule: true,
        },
        overlay: true,
        inline: true,
        stats: 'errors-only',
        disableHostCheck: true,
        ...dev.devServer,
    },
    mode: 'development',
    output: {
        filename: 'public/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            // inject: false,
            // chunks: ['supplier'], // unit test
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public/'),
                to: path.resolve(__dirname, '../dist/'),
                ignore: 'index.html',
            },
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?cacheDirectory',
                include: [path.resolve(__dirname, '../src/')],
            },
            {
                test: /\.(css|less)$/,
                include: [path.resolve(__dirname, '../src/')],
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: '[local].[hash:8]',
                    },
                  },
                  {
                    loader: 'postcss-loader',
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      javascriptEnabled: true,
                      modifyVars: themeVars,
                    },
                  },
                ],
            },
            {
              test: /\.(css|less)$/,
              include: /node_modules/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {},
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [autoprefixer()],
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    javascriptEnabled: true,
                    modifyVars: themeVars,
                  },
                },
              ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, '../src'),
          src: path.resolve(__dirname, '../src'),
          assets: path.resolve(__dirname, '../src/assets'),
          utils: path.resolve(__dirname, '../src/utils'),
          pages: path.resolve(__dirname, '../src/pages'),
          components: path.resolve(__dirname, '../src/components'),
        },
        modules: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../node_modules/antd/node_modules'),
          path.resolve(__dirname, '../../xinyun-react-uikit'),
        ],
    },
}
