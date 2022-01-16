const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin')
const htmlplugin = new HtmlWebpackPulgin({
    template: './src/index.html',
    filename: 'index.html'
})

module.exports = {
    //  配置编译模式 development（开发不压缩节省时间） production(上线压缩)
    // mode: 'development',
    mode: 'production',//编译模式
    entry: path.join(__dirname, './src/index.js'),//打包入口文件
    output: {
        path: path.join(__dirname, './dist'),//输出文件路径
        filename: 'bundle.js'//输出文件名字
    },
    plugins: [htmlplugin],
}