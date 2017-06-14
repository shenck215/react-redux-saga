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

const myWebpackConfig = (env) => {

    let publicPath;

    if(env === 'dev') {
        publicPath = 'http://172.16.14.36:2333/';
    }else if(env === 'alpha') {
        publicPath = 'https://testnewwyb.joyomm.com/';
    }else if(env === 'beta') {
        publicPath = 'http://127.0.0.1:2333/';
    }else if(env === 'build') {
        publicPath = 'http://127.0.0.1:2333/';
    }

    return {
        entry: entries,
        output: {
            path: path.resolve(__dirname),
            filename: 'static/js/[name].js',
            publicPath: publicPath,
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
                    exclude: /node_modules|src(\\|\/)page((\\|\/).*).jsx$/,
                    loader: 'babel-loader',
                },
                {
                    test: /src(\\|\/)page((\\|\/).*).jsx$/,
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
                        ],
                        // options:{
                        //     minimize: true //css压缩
                        // }

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
            host: '172.16.14.36',
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
                },
                '__DEV__': env === 'dev' ? true : false,
                '__ALPHA__': env === 'alpha' ? true : false,
                '__BETA__': env === 'beta' ? true : false,
                '__BUILD__': env === 'build' ? true : false,
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

            // new webpack.optimize.UglifyJsPlugin({
            //     minimize: true,
            //     compress: {
            //         screw_ie8: false,
            //         warnings: false /* 不显示js规范的警告、提示 */
            //     },
            //     mangle: { screw_ie8: false },
            //     output: { screw_ie8: false },
            //     //  Preserve copyright comments in the output. By
            //     // default this works like Google Closure, keeping
            //     // JSDoc-style comments that contain "@license" or
            //     // "@preserve". You can optionally pass one of the
            //     // following arguments to this flag:
            //     // - "all" to keep all comments
            //     // - a valid JS regexp (needs to start with a
            //     // slash) to keep only comments that match.
            //     // Note that currently not *all* comments can be
            //     // kept when compression is on, because of dead
            //     // code removal or cascading statements into
            //     // sequences.

            //     /**
            //      * 上面的介绍是指，这个comments的选项是保留一些类似 "@license" or "@preserve" 这种版权的注释，
            //      * 可选参数有2种， 一种是 字符串 'all'，保留所有注释。
            //      * 另一种是 可以是正则表达式
            //      * 这里我去掉了所有注释使用了 空字符串 '';
            //      */
            //     comments: ''
            // }),
        ]
    };
}

module.exports = myWebpackConfig;