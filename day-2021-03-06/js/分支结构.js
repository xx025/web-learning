/*
代码执行顺序:
    顺序结构
    分支结构
        if elseif else
        switch-case
    循环结构
*/

// if (condition) {

// } else {

// }

/* switch-case:击穿性问题 */
let key = 1
switch (key) {
    case 1:
        console.log("这个数是1");
        break;
    case 2:
        console.log("这个数是2");
    default:
        console.log("这个数我也不知道");
}