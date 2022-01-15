import $ from 'jquery'
//自动打包不好用
$(function () {
    $('li:odd').css('backgroundColor', 'red')//奇数行
    $('li:even').css('backgroundColor', 'green')//偶数行
})