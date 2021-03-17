
window.onload = (function () {
    var vue = new Vue({
        el: "#app",
        data() {
            return {
                dialogTableVisible: true,
                dialogFormVisible: false,
                form: {
                    id: '',
                    name: '',
                    mobile: '',
                    sex: '',
                    teachers: [],
                },
                formLabelWidth: '120px',
                teachers: []
            };
        },
        //加载界面的时候=vue初始化的过程。此时可以调用getTeachers函数获取数据
        created: function () {
            //初始化操作==>获取教师列表
            this.getTeachers();
        },
        methods: {
            //获取老师
            getTeachers: function () {
                let v = this;
                // console.log(v)
                //获取教师的列表
                axios({
                    method: "get",
                    url: "http://localhost:8080/teacher/getTeachers",
                    data: {}     //参数
                }).then(function (response) {
                    console.log(response);
                    if (response.data.code == 200) {
                        v.teachers = response.data.result;
                        console.log(v.teachers);
                        for (const iterator of v.teachers) {
                            iterator.sex = iterator.sex == 1 ? "男" : "女";
                        }
                    }

                });
            },//getTeachers

            //新增老师
            addTeachers: function () {
                //获取教师的列表
                axios({
                    method: "post",
                    url: "http://localhost:8080/teacher/addTeacher",
                    data: {
                        'name': this.form.name,
                        'mobile': this.form.mobile,
                        'sex': this.form.sex == 1 ? 1 : 0,
                    }
                }).then(function (response) {
                    if (response.data.code == 200) {
                        window.console.log("添加成功");
                        vue.getTeachers();/* 更新 */
                    }
                });
            },
            //删除数据库中的老师
            deleteTeacher: function (index, tableData) {
                let t_id = tableData[index].id;
                this.$confirm('此操作将删除该教师, 是否继续?', '提示',
                    {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        let thiscon = this;
                        $.ajax({
                            url: "http://localhost:8080/teacher/deleteTeacher",
                            type: "post",
                            data: { id: t_id },
                            dataType: "json",
                            success: function (rt) {
                                if (rt.code == 200) {
                                    thiscon.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                } else {
                                    thiscon.$message({
                                        type: 'error',
                                        message: '删除失败!'
                                    });
                                }
                            }
                        }
                        );
                        vue.getTeachers();/* 更新 */

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });

            }
        }
    });
})

