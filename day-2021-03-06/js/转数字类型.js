

/* 
    parseInt():
        -12px -> 12
        - 12px12 -> 1212? ->12
        12.123px -12.123? ->12
    paresFloat():识别小数点(仅一次)和数字
        -12.123px -> 12.123
        -12.12.123.px -> 12.12


*/


var s = '123.123';

var sNumber = Number(s);
console.log(sNumber);


console.log(typeof sNumber);

var height = '12.123px';
var hNumber = parseInt(height);
console.log(hNumber);

var hFNumber = parseFloat(height)
console.log(hFNumber);


var height2 = '12.123.123px';
console.log(parseFloat(height2));
/* 小数点只识别一次 */


/*  转boolean类型
    Boolean()
        空串->false
        0和NaN ->false
        null -> false
        undefind -> false
 */


var string = ' ';
console.log("空串:");
console.log(Boolean(string));

var number = Infinity;

console.log('数字0转化boolean');
console.log(Boolean(number));


console.log('null转化boolean');
console.log(Boolean(null));


var u;
console.log("undefind转化为boolean");
console.log(Boolean(u));


var o = {}

console.log('对象转化为boolean');
console.log(Boolean(o));


if(number){
    console.log("heoolo")
}