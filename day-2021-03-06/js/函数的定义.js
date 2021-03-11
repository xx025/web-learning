/* 关键字:function

    function 方法名(参数列表)
    {
        // 代码
        return 返回值;
    }
*/
function fun1() {
    console.log("这是一个无参无返回值的方法");
}

fun1();

/* 
    有参方法
    调用:
        JS中没有重写和重载,方法的标识就是其方法名
        若参数匹配不上也是可以调用的
            1. 参数多于定义数量:只取用匹配的参数的数目
            2. 参数少于定义数量:缺少的部分是undefined
*/
function fun2(name, age) {
    console.log("姓名:" + name + "年龄:" + age);
}

// fun2("小明", 19);// 正确调用
// fun2("小明");//正确调用,age的值是undefined
// fun2("小明",13,"喵喵喵")//正确调用,只匹配指定的参数


function fun3() {
    return "这是一个返回值";
}

var result = fun3()
console.log(result);

