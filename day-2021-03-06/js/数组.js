/*数组的定义:
*   - new Array();
*   - []
*   - 注意:数组中尽量存储同一类型的数据*/
let array1 = new Array(1, 2, 3);
console.log(array1)

let array2 = [1, 2, 4, "nanny"]

for (const array2Element of array2) {
    console.log(array2Element)
}

/*
* 数组的取用,设置,长度
* */
let array3 = [1, 5];
console.log(array3[1])


/*
* 数组的遍历
*   for,for-in,for-of
* */
let array4 = ['小明', '小红', '小四', '张三']
// for (const array4Key in array4) {
//     console.log(array4[array4Key]);//下标
// }
for (const string of array4) {
    console.log(string);//值
}
// array4.map(function (item, index) {
//     console.log(item);//内容
//     console.log(index);//下标
//
// })
//*************构建函数*******************
/*
*          (参数)=>{代码块}
* */
array4.map((item, index) => {
    console.log(item);
    console.log(index);
});


/*
*
*           数组的常用方法
        concat()	连接两个或更多的数组，并返回结果。
        join()	    把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
        pop()	    删除并返回数组的最后一个元素
        push()	    向数组的末尾添加一个或更多元素，并返回新的长度。
        reverse()	颠倒数组中元素的顺序。
        shift()	    删除并返回数组的第一个元素
        slice() 	从某个已有的数组返回选定的元素
        sort()	    对数组的元素进行排序
        splice()	删除元素，并向数组添加新元素。
        toSource()	返回该对象的源代码。
        toString()	把数组转换为字符串，并返回结果。
        toLocaleString()	把数组转换为本地数组，并返回结果。
        unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
        valueOf()	返回数组对象的原始值
* */
let array5 = [1, 2];
let array6 = [3, 4];

let nweArray = array5.concat(array6);
console.log(nweArray);
nweArray.push(9)
console.log(nweArray);
let lastElement = nweArray.pop()
console.log(lastElement);
console.log(nweArray);

console.log(nweArray.join('==='));

