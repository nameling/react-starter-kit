const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Terser = require("terser");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const themeVars = require("../src/theme.less");

process.env.NODE_ENV = "production";

const webpackConfig = {
    entry: [
    // '@babel/polyfill',
        path.resolve(__dirname, "../src/index.js"),
    ],
    devtool: "source-map",
    mode: "production",
    output: {
        filename: "public/js/[name].[hash:8].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
    },
    // externals: { ...externals },
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                parallel: true,
                cache: true,
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {
                        drop_debugger: true, // 删除 debugger
                        drop_console: true, // 删除 console
                    },
                    mangle: true,
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: true,
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        // 分离公共依赖块打包文件
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // html-webpack-plugin@3有 bug,没有把所有chunks文件加入，html-webpack-plugin@4修复
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html",
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            chunks: ["console"],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html",
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            // chunks: ['supplier'],
        }),
        new PreloadWebpackPlugin({
          rel: 'preload',
          include: 'initial',
          fileBlacklist: [/\.map$/, /\.css$/], // css会先加载
          as(entry) {
            if (/\.css$/.test(entry)) return 'style';
            if (/\.(woff|woff2|eot)$/.test(entry)) return 'font';
            if (/\.(png|jpg|jpeg|gif|svg)$/.test(entry)) return 'image';
            return 'script';
          },
        }),
        // 打包后提取出css文件
        new MiniCssExtractPlugin({
            filename: "public/styles/[name].[contenthash:8].css",
            chunkFilename: "public/styles/[name].[contenthash:8].chunk.css",
        }),
        new FriendlyErrorsWebpackPlugin(),
        // A webpack plugin to remove/clean your build folder(s).
        // 清理旧文件，plugin放置顺序最后
        new CleanWebpackPlugin({
          verbose: true,
          cleanOnceBeforeBuildPatterns: ['**/*'],
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../public/"),
                to: path.resolve(__dirname, "../dist/"),
                transform(content, filePath) {
                    if (/\.js$/.test(filePath)) {
                        // 将 Buffer(content) 转为 String(source)
                        const source = content.toString("utf8");
                        const { code } = Terser.minify(source);
                        return code;
                    }
                    return content;
                },
                ignore: "index.html",
            },
        ]),
        // 构建进度条
        new ProgressBarPlugin(),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(false),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: require.resolve("babel-loader"),
                include: [path.resolve(__dirname, "../src/")],
                exclude: /node_modules/,
            },
            {
                test: /\.module\.(css|less)$/,
                include: [path.resolve(__dirname, "../src/")],
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local].[hash:8]",
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            modifyVars: themeVars,
                        },
                    },
                ],
            },
            {
                test(filepath) {
                    return (
                        /\.(less|css)$/.test(filepath)
            && !/\.module\.(less|css)$/.test(filepath)
                    );
                },
                include: [path.resolve(__dirname, "../src/")],
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "less-loader",
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
                exclude: [path.resolve(__dirname, "../src/")],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            modifyVars: themeVars,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 500,
                            outputPath: "public/images/",
                            name: "[name].[hash:8].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "../src"),
            src: path.resolve(__dirname, "../src"),
            assets: path.resolve(__dirname, "../src/assets"),
            utils: path.resolve(__dirname, "../src/utils"),
            pages: path.resolve(__dirname, "../src/pages"),
            components: path.resolve(__dirname, "../src/components"),
        },
    // modules: [
    //   path.resolve(__dirname, "../src"),
    //   path.resolve(__dirname, "../node_modules"),
    //   path.resolve(__dirname, "../node_modules/antd/node_modules"),
    //   path.resolve(__dirname, "../../xinyun-react-uikit"),
    // ],
    },

    // 统计信息
    stats: {
    // 关闭 children 信息
        children: false,

        // 关闭构建模块信息
        modules: false,

        // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
        performance: false,

        // 关闭 less 文件顺序警告
        warningsFilter: /mini-css-extract-plugin/,
    },

    performance: false,
};

// 模块占用报告
// if (process.env.npm_config_report) {
//     webpackConfig.plugins.push(new BundleAnalyzerPlugin());
// }

module.exports = webpackConfig;
