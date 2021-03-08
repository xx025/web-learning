/* 
     数据类型:
         - 整数和小数
         - Infinity(无穷大), -Infinity(无穷小)
         - NaN: not a number

  */

var a = 123;
var b = 123.123;
console.log(Number.MAX_VALUE + 1);
console.log(Number.MIN_VALUE - 1);
console.log(Number.MIN_VALUE + Number.MIN_VALUE);


var c = "abc";
var d = a * c;
console.log(d)
/*
字符串类型: JS中单双引号都可以声明字符串
 */

var str1 = "xxxx";
var str2 = "xxssss";

/* 
布尔类型:true,false
 */
var f1 = true;
var f2 = false;

/* 
typeof:判断变量是什么类型的
 */

console.log(typeof f1);


var n = null;
console.log(typeof n);
var n1;
console.log(typeof n1);//undefined

/*
    undefined:未定义,
        - 声明未初始化的是未定义
        - 没有声明的变量使用时也是未定义
    */

// console.log(node);

/* 
对象类型:
 */

var o = new Object();
// 添加属性
o.name = "xxxx";
o.age = 18;

// 取用
console.log(o.name);
// 删除属性
delete o.name;
console.log(o);


var o2 = {
    name: "李四",
    age: 18
}

console.log(o2)
