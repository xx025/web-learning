/*
* JS函数的提升
*   JS在执行之前,会加载JS方法中所有的方法
*   然后执行代码
* */

/*变量的提升:
*   变量在未声明之前使用,若后面没有声明则报错
*   若有声明,那么变量值是undefined
*   */

console.log(a)//a -> undefined
var a = 10;//全局变量


/*变量的作用域问题
*   定义在script标签中的变量成为全局变量,script标签中任意地方皆可访问
*   在方法中声明的变量,作用范围就是该方法*/
function fun2() {
    console.log(a)
}

fun2();//10

function fun3() {
    var b = 15;
}

// console.log(b);

/*
* let和const:代替var关键字来声明变量的
*   let:
*       let 标识符= 值
*       不同于var,不存在变量的提升
*   const
*       const 标识符 =值
*       const创建的是常量,不能够修改
* */
let c = 10;
console.log(c)


// 常量:不能更改值的量
//var let 声明的变量都是可以修改值的
//
c = 30
console.log(c)

var d = 20;
d = 30
console.log(d)

const e = 20;
// e=30;
console.log(e);

const o = new Object();
o.name = '张三';//能行
console.log(o)
// o=new Object();//不可行

sq = 123;
console.log(sq);
