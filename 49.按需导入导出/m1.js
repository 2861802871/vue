let a = 3
let b = 4
let c = a + b
function age() { console.log('计算年龄'); }
// 默认导出
export default {
    a,
    b,
    c,
    age,
}
// 按需到出
export let s1 = a
export let s2 = b
