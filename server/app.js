// 服务端项目的入口文件
// 引入express包
const express = require('express')
// 初始化一个app实例对象
const app = express()
// 准备一个服务端端口号
const port = 3000

// 跨域请求处理
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

// 创建一个路由 '/' 
app.get('/', (req, res) => res.send('<h1>我是服务端渲染</h1>'))

app.get('/data', (req, res) => {
    res.send('get请求成功1！')
})
app.get('/data1', (req, res) => {
    res.send('get请求成功2！')
})
app.get('/data2', (req, res) => {
    res.send('get请求成功3！')
})

// 监听当前3000端口号 开启服务
app.listen(port, () => console.log(`Example app listening on port ${port}!`))