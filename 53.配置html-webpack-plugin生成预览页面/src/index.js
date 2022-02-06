import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'


//自动打包好用
$(function () {
    // $('li').css({ 'color': 'white', 'width': '1000px' })
    $('li:odd').css('backgroundColor', 'yellowGreen')//奇数行
    $('li:even').css('backgroundColor', 'green')//偶数行

})

//js高级语法
class person {
    static info = '输出：' + 'aaa'
}

console.log(person.info);

//使用vue单文件
import App from './compontents/app.vue'
import Vue from 'vue'
const vm = new Vue({
    el: '#app',
    render: h => h(App)
})