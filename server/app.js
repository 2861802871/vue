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
    setTimeout(function () {//加入延时
        res.send('get请求成功1！')
    }, 2000)
})
app.get('/data1', (req, res) => {
    res.send('get请求成功2！')
})
app.get('/data2', (req, res) => {
    res.send('get请求成功3！')
})


// fetchAPI 

app.get('/fdata', (req, res) => {
    res.send('fetch成功')
})

app.delete('/fdelete/:id', (req, res) => {
    res.send('delete请求参数' + req.params.id)
})
app.delete('/fdelete/', (req, res) => {
    res.send('delete请求参数' + req.query.id)
})

app.post('/fpost/', (req, res) => {
    res.send('delete请求参数' + req.body.id)
})
// 拦截器
app.get('/intercetors', (req, res) => {
    res.send('intercetirs拦截器')
})
// 返回数据类型练习
app.get('/callbackdata', (req, res) => {
    res.json({ uname: 'xiaobing', age: 18 })
})

//async接口调用 
app.get('/async1', (req, res) => {
    res.send('async1')
})
app.get('/async2', (req, res) => {
    setTimeout(function () {
        res.send('async2')
    }, 2000)
})
app.get('/async3', (req, res) => {
    res.send('async3')
})

// 监听当前3000端口号 开启服务
app.listen(port, () => console.log(`Example app listening on port 127.0.0.1:${port}`))