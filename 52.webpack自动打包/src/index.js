import $ from 'jquery'
//自动打包不好用
$(function () {
    $('li').css({ 'color': 'white', 'width': '1000px' })
    $('li:odd').css('backgroundColor', 'yellowGreen')//奇数行
    $('li:even').css('backgroundColor', 'green')//偶数行

})