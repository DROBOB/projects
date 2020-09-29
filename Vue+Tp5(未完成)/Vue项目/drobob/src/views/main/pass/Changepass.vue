<template>
    <div>
    <el-form :model="passform" :rules="passrules" ref="passform">
        <el-form-item label="旧密码" >
            <el-input v-model="passform.oldpass" placeholder="请输入原来的密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" >
            <el-input v-model="passform.oldpass" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" >
            <el-input v-model="passform.oldpass" placeholder="请再次输入"></el-input>
        </el-form-item>
        <el-form-item label="" >
            <el-button type="submit" @click="handlerSubmit">提交</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    // import {SUCCESS,URL} from "../../../lib/base";

    export default {
        name: "Changepass",
        data(){
            return{
                passform:{
                    oldpass:'',
                    newpass:'',
                }
            }
        },
        passrules:{

        },
        methods:{
            handlerSubmit(){

            }
        }

    }
</script>

<style scoped>

</style>