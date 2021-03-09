/*
* 创建正则表达式
*       直接量的形式
*       通过对象创建
* */

let reg1 = /xxx/;
let reg2 = new RegExp("xxx");
/*
* 正则表达式的验证:test
* */

let isRight = reg1.test("xxx");
console.log(`正则验证是否正确:${isRight}`);
/*
*   验证方括号
*      验证的字符中有abc中的任意一个即为正确
*       ^取反,[^]只要包含非括号中的字符即为正确
*    ^: 开头^[]
*   $ :结尾
*
*/
//验证的字符有abc中的任意一个即为正确
/*
        [abc]	查找方括号之间的任何字符。
        [^abc]	查找任何不在方括号之间的字符。
        [0-9]	查找任何从 0 至 9 的数字。
        [a-z]	查找任何从小写 a 到小写 z 的字符。
        [A-Z]	查找任何从大写 A 到大写 Z 的字符。
        [A-z]	查找任何从大写 A 到小写 z 的字符。
* */
let reg3 = /[abc]/;
let result = reg3.test("abdcd")
console.log(`字符串是否是abc中的一个${result}`);

/* 
    元字符
        A-Z:大写字母A到Z
        a-z:小写字母a到z
        0-9:数字0到9  -->
            \d表示数字
            \D表示非数字
        \w:单词字符,指A-z,0-9
        \W:非单词字符
        .:任意字符,除换行和结束行
            如果要用 . 可以进行转义\. (\n \t)
 */
let reg4 = /./;

result = reg4.test("a");
console.log(result);


/*
*   量词
*       + :1到多个,至少有一个
*       * :0到多个
*       ? :0个或1个
*
*
*       */

let reg5 = /[\d]+/;
//匹配1到多个数字

let reg6 = /[\d]*/;
//匹配0到多个数字

result = reg6.test("abc");
console.log(result);

let reg7 = /^abc[\d]?$/;
//匹配0或1个数字

result = reg7.test("abc12")

console.log(`reg7:${result}`);

let reg8 = /[\d]{10}/;//匹配10个数字的字符串
let reg9 = /[\d]{2,10}/;//匹配2-10个数字的字符串

let reg10 = /[\d]{2,}/;//至少两个数字


result = reg7.test("13abc12")

console.log(result);


strqq = '1229442@qq.com'

let regQQ = /^[\d]{5,11}@qq\.com$/;

console.log(`QQ验证:${regQQ.test(strqq)}`);

/*
*               ^开头
*               $:结尾
*/