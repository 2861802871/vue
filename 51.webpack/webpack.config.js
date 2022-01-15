const path = require('path');

module.exports = {
    //  配置编译模式 development（开发不压缩节省时间） production(上线压缩)
    // mode: 'development',
    mode: 'production',//编译模式
    entry: path.join(__dirname, './src/index.js'),//打包入口文件
    output: {
        path: path.join(__dirname, './dist'),//输出文件路径
        filename: 'main.js'//输出文件名字
    }
}