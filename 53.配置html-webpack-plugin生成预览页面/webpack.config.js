const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin')
const htmlplugin = new HtmlWebpackPulgin({//生成预览页面
    template: './src/index.html',//指定用到的模板
    filename: 'index.html'//设置生成的文件的名字，该文件存在内存中，不会在目录中显示
})
const VueloaderPuligin = require('vue-loader/lib/plugin')

module.exports = {
    //  配置编译模式 development（开发不压缩节省时间） production(上线压缩)
    // mode: 'development',
    mode: 'production',//编译模式
    entry: path.join(__dirname, './src/index.js'),//打包入口文件
    output: {
        path: path.join(__dirname, './dist'),//输出文件路径
        // filename: 'bundle.js',//输出文件名
    },

    module: {
        rules: [//规则
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                type: 'asset',
                // use: 'url-loader?limit=16940',

            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//node_modules文件夹下的js文件不需要打包
            { test: /\.vue$/, use: 'vue-loader' }
        ],
    },

    //插件
    plugins: [htmlplugin, new VueloaderPuligin()],//暴露生成预览页面的配置
}