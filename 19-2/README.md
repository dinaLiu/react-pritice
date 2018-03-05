react-touch-loader 使用步骤:

1.npm i less@^2.7.2 less-loader@^2.2.3  react-touch-loader@^1.1.2 --save-dev

2.由于 react-touch-loader组件依赖 less 所以这边 webpack.json.js也要修改:
....
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
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
.....
3.开始在 mobile_list 具体使用 react-touch-loader

