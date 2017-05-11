'use strict'

import webpack from 'webpack';
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DllReferencePlugin = webpack.DllReferencePlugin;
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import manifest from './static/manifest';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

const extractCSS = new ExtractTextPlugin({
    filename: "static/css/[name].css"
});
const entries = path.resolve(__dirname, './src/index.jsx');
const entriesKey = Object.keys(entries);

const myWebpackConfig = {
    entry: entries,
    output: {
        path: path.resolve(__dirname),
        filename: 'static/js/[name].js',
        publicPath: 'http://127.0.0.1:2333/',
        //加这个！
        chunkFilename: 'static/js/[name].js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.css',
            '.less',
            '.json',
            '.gif',
            '.html',
            '.png',
            '.webp',
            '.jpg',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules|src(\\|\/)page((\\|\/).*).(jsx|js)/,
                loader: 'babel-loader',
            },
            {
                test: /src(\\|\/)page((\\|\/).*).(jsx|js)/,
                use: [
                    'bundle-loader?lazy',
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
                        'postcss-loader',
                    ]
                }),
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(jpg|png|gif|jpeg)?$/,
                loader: 'url-loader?limit=20480&name=static/images/[name].[hash:8].[ext]',
            },
            {
                test: /\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
                loader: 'url-loader?limit=20480&name=static/other/[name].[hash:8].[ext]',
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 2333,
        compress: true, /* gizp */
        publicPath: '/',
        quiet: false,
        stats: { colors: true },
        inline: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        extractCSS,
        // new HtmlWebpackPlugin({
        //     title: 'My App',
        //     inject: true,
        //     template: path.resolve(__dirname,'./index.html'),
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
            }
        }),
        /**
         * DllReferencePlugin
         */
        new DllReferencePlugin({
            context: __dirname,
            manifest,
        }),

        /**
         * CommonsChunkPlugin
         */
        new CommonsChunkPlugin({
            name: 'common',
            filename: `static/common.js`,
            minChunks: 2,
            chunks: entriesKey,
        }),
    ]

};

module.exports = myWebpackConfig;