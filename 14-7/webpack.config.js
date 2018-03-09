/**
 * Created by Administrator on 2018/1/27 0027.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: "./js/root.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins:['react-html-attrs']  //添加组件的插件配置
                }
            },
            //下面是使用ant-design的配置文件
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
               // test:/\.css/,

                //loader:'style!css-loader?modules&importLoader=1&localIdentName=[name]_[local]__[hash:base64:5]'
            }
        ]
    },
    output: {
        path: __dirname + '/src/',
        filename: "bundle.js"
    },
    devServer:  {
        port:8081,
        historyApiFallback: true
    },


};
