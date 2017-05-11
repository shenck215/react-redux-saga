/**
 * Created by caozheng on 2017/1/3.
 */
import webpack from 'webpack';
import theme from './theme';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const extractCSS = new ExtractTextPlugin({
    filename: "[name].dll.css",
    disable: false,
    allChunks: true,
});


// 公共库列表
const vendors = [
    'react',
    'react-dom',
    'react-router',
    'antd',
    'antd/dist/antd.less',
    'whatwg-fetch',
    'react-redux',
    'babel-polyfill',
    'redux-saga',
];

export default {
    entry: {
        vendors: vendors
    },
    output: {
        path: path.resolve(__dirname,'static'),
        filename: '[name].js',
        library: '[name]_library',
    },
    module: {
        rules: [{
            test: /\.less/,
            loader: extractCSS.extract(
                ['css-loader?sourceMap', `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`]
            ),
        }]
    },
    plugins: [
        extractCSS,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.DllPlugin({
            path: `static/manifest.json`,
            name: '[name]_library',
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
