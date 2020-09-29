<template>
    <div class="login" ref="login">

        <div class="login-content">
            <el-form ref="loginform" :model="loginForm" :rules="rules">

                <el-form-item label="用户名:" prop="username">
                    <el-input v-model="loginForm.username" >

                    </el-input>
                </el-form-item>

                <el-form-item label="密码:" prop="password">
                    <el-input v-model="loginForm.password" type="password">

                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click.prevent="handleLogin">登录</el-button>
                </el-form-item>

            </el-form>


        </div>
<!--        login-->

    </div>
</template>

<script>
/*
*
* 1.权限 前台
* 2.
*
* */




    import axios from 'axios';
    import {URL} from "../lib/base";

export default {
        name: "Login",
        data(){
            return{
                loginForm:{
                    username:'',
                    password:''
                },
                rules:{
                    username: [
                        {required:true,message:'请输入用户名',trigger:'blur'},
                        {min:5,max:10,message: '长度在5-10个字符',trigger: 'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {min:5,max:10,message: '长度在5-10个字符',trigger: 'blur'}
                    ]
                }

            }
        },
        methods:{
            handleLogin(){
                this.$refs.loginform.validate(validate=>{
                    if (validate){
                        axios.post(URL+'/admin/login/check',this.loginForm).then(res=>{
                            console.log(res.data.code)
                            if (res.status===200 && res.data.code===200){
                                sessionStorage.setItem('token',res.data.token);
                                let redirect=this.$route.query.redirect || 'main';
                                this.$router.push({name:redirect});
                            }else {
                                this.$message.error(res.data.msg)
                            }
                        }).catch(function (error) {
                            console.log(error);

                        })
                    }
                })
            }

        }

    }


</script>
<style>
    /*全局*/
</style>
<style scoped lang="css">
    /*当前组件*/
    .login{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background:#b9def0;
    }
    .login > .login-content{
        width: 300px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform:translate(-50%,-50%);
        border-radius:10px ;
        background:#fff;
        border: #fff solid 10px;
    }

</style>