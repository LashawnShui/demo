const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 使用node.js 中的导出语法，向外到处一个webpack的配置对象
module.exports = {
    // 代表webpack的运行模式，可选值为： development 和 production
    mode: "development",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置 .css 文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(jpg|png|bmp|jpeg|gif)$/,
                include: path.resolve('src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 7000,
                            name: '[hash:16]-[name].[ext]'
                        }
                    }
                ]
            }, // 处理图片路径的loader 
            { test: /\.(eot|woff|woff2|svg|ttf)/, use: 'url-loader' }, // 处理字体
            {
                test: /\.js$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }, exclude: /node_modules/
            },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        hot: true,
        hotOnly: true,
        port: 8080,
        open: false
    }
}