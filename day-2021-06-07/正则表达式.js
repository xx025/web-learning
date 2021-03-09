/*
* 创建正则表达式
*       直接量的形式
*       通过对象创建
* */

let reg1 = /xxx/;
let reg2 = new RegExp("xxx");
/*
* 正则表达式的验证
* */

let isRight = reg1.test("xxx");
console.log(`正则验证是否正确:${isRight}`);