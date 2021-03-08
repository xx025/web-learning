
/*
算数运算符: +,-,*,/,%,++,--
    数字+其他类型时:
        其他类型(除字符串),其他类型先转化成数字,再运算
        字符串:做拼接操作,除+号以外,字符串会转数字,再运行
    
    
 */
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
console.log("数字+布尔");
console.log(num1 + true);//11 true->1
console.log("数字+null");
console.log(num1 + null)

console.log("数字+undefined");
var a;
console.log(num1 + a);


console.log("数字+字符串");
console.log(num1 + "123123");//字符串拼接,一种转字符串方式

console.log(num1 - "123");//字符串转成数字,然后运行


/*
比较运算符:>,<,!=,或者!==,==,===,<=,<

    !==:判断数值和类型
    ===:判断数值和类型
*/
console.log("数字1是否等于字符串1");
console.log(1 == "1");//比较的是数值

console.log("数字1是否等于字符串1");
console.log(1 === "1");//false,比较的是数值和类型