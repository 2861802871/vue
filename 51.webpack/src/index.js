import $ from 'jquery'
$(function () {
    $('li:odd').css('backgroundColor', 'pink')//奇数行
    $('li:even').css('backgroundColor', 'green')//偶数行
})