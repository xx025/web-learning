/**
 *  获取教师的列表
 *  删除教师
 *
 *  页面加载完成后获取教师的列表
 *  删除教师后获取教师的列表
 *
 *
 *
 */

// 页面加载完成后执行
$(document).ready(function() {
    getTeachers();
});
$(function () {
    getTeachers();
});
// 获取教师列表
function getTeachers() {
    $.ajax({
        url: "http://localhost:8080/teacher/getTeachers",
        type: "get",
        data: {},
        dataType: "json",
        success: function (r) {
            if (r.code == 200) {
                $("tbody").empty();
                let teachers = r.result;
                for (let i = 0; i < teachers.length; i++) {
                    let teacher = teachers[i];
                    let tr = `
                        <tr>
                            <td>${teacher.id}</td>
                            <td>${teacher.name}</td>
                            <td>${teacher.mobile}</td>
                            <td>${teacher.sex == 1 ? '男' : '女'}</td>
                            <td>
                                <button onclick="deleteTeacher(${teacher.id})">删除</button>
                            </td>
                        </tr>
                    `;
                    $("tbody").append(tr);
                }
            }
        }
    });
}

// 删除教师
function deleteTeacher(id1) {
    let result = confirm("确定要删除该老师吗？");
    if (result) {
        // 发送请求删除老师
        $.ajax({
            url: "http://localhost:8080/teacher/deleteTeacher",
            type: "post",
            data: {id: id1},
            dataType: "json",
            success: function (r) {
                if (r.code == 200) {
                    alert(r.message);
                    getTeachers();
                }
            }
        });
    }
}

// // 添加教师
// function addTeacher(name1, mobile2, sex3) {
//     let result = confirm("确定要删除该老师吗？");
//     if (result) {
//         // 发送请求删除老师
//         $.ajax({
//             url: "http://localhost:8080/teacher/addTeacher",
//             type: "post",
//             data: {
//                 name: name1,
//                 mobile: mobile2,
//                 sex: sex3
//             },
//             dataType: "json",
//             success: function (r) {
//                 if (r.code == 200) {
//                     alert(r.message);
//                     getTeachers();
//                 }
//             }
//         });
//     }
// }


