import path from 'path';
import webpack from 'webpack';

import paths, { PUBLIC_PATH } from './paths.js';
import getTheme from './theme.js';

import getStyleLoaders from './getStyleLoaders.js';
import switchConfig from './swtich.config.js';

const theme = getTheme(paths.appTheme);

const isProd = process.env.NODE_ENV === 'production';
const isVerbose = process.argv.includes('--verbose');

const REGEXP_SCRIPT = /\.(ts|tsx|js|jsx|mjs)$/;
const REGEXP_IMAGE = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const REGEXP_MODULE_CSS = /\.module\.css$/;
const REGEXP_MODULE_LESS = /\.module\.less$/;
const REGEXP_CSS = /\.css$/;
const REGEXP_LESS = /\.less$/;

export default {
  mode: isProd ? 'production' : 'development',
  // 入口与
  entry: [paths.appEntry],

  // 输出
  output: {
    // 所有输出文件的目标路径，*必须是绝对路径*
    path: paths.appDist,
    publicPath: PUBLIC_PATH,
    pathinfo: isVerbose,
    filename: isProd ? 'js/[name].[hash:8].js' : 'js/[name].js'
  },

  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',

  resolve: {
    alias: {
      '@': paths.appSrc,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [paths.appNodeModules, paths.appSrc],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        include: paths.appSrc,
        exclude: paths.appNodeModules,
        use: {
          loader: 'eslint-loader',
          options: {
            cache: true, // 缓存lint结果，可以减少lint时间
          },
        }
      },
      {
        // 只匹配第一个
        oneOf: [
          {
            test: REGEXP_IMAGE, // 图片
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          {
            test: REGEXP_SCRIPT,
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: !isProd, // 缓存
              },
            }
          },
          {
            test: REGEXP_MODULE_CSS,
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            use: getStyleLoaders({
              isProd,
              sourceMap: OPEN_SOURCE_MAP,
              modules: true,
            }),
          },
          {
            test: REGEXP_CSS,
            include: [paths.appSrc, paths.appNodeModules],
            use: getStyleLoaders({
              isProd,
              sourceMap: OPEN_SOURCE_MAP,
              modules: false,
            }),
          },
          {
            test: REGEXP_MODULE_LESS,
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            use: getStyleLoaders({
              isProd,
              sourceMap: OPEN_SOURCE_MAP,
              modules: true,
              useLess: true,
              modifyVars: theme,
            }),
          },
          {
            test: REGEXP_LESS,
            include: [paths.appSrc, paths.appNodeModules],
            use: getStyleLoaders({
              isProd,
              sourceMap: OPEN_SOURCE_MAP,
              modules: false,
              useLess: true,
              modifyVars: theme,
            }),
          },
          {
            test: /.mdx?$/,
            use: [
              'babel-loader',
              {
                loader: '@mdx-js/loader',
                options: {
                  rehypePlugins: [mdHighlightPlugin],
                },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            include: paths.appSrc,
            loader: 'file-loader', // 其它文件
            options: {
              name: 'other/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ]
  }
}
