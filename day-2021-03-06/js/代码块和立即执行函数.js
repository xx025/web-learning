{
    // 代码块
    console.log("代码块");
}
// 立即执行函数:只执行一次,通产用作初始化

(function () {
    // 匿名函数
    console.log("立即执行函数");
})()


//js在执行之前,会先加载js中所有的方法,然后再执行代码
fun1();

function fun1() {
    console.log("这是function1方法")
}