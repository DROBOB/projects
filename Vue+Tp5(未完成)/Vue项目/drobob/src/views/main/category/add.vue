<template>

    <div>
        <el-form :model="category" :rules="categoryRules" ref="categoryform">
            <el-form-item label="分类名称" prop="cname">
                <el-input v-model="category.cname" placeholder="请输入分类名称(2-6汉字)"></el-input>
            </el-form-item>
            <el-form-item label="分类描述" prop="cdesc">
                <el-input v-model="category.cdesc" placeholder="请输入分类描述"></el-input>

            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handlerSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
    
</template>

<script>

    import axios from 'axios';

    import {URL,SUCCESS} from "../../../lib/base";

    export default {
        name: "add",
        data(){
            let validateCname = (rule,value,callback)=>{
                if (value===''){
                    callback(new Error('分类名称不能为空'));
                }else if (!(/[\u4e00-\u9fa5]{2,6}/.test(value))){
                    callback(new Error('分类的名称只能包含2-6位汉字'))

                }else{
                    callback();
                }

            }



            return{
                category:{
                    cname:'',
                    cdesc:''
                },
                categoryRules:{
                    cname:[
                        // {required:true,massage:'分类名必填',trigger:'blur'},
                        {validator:validateCname,trigger: "blur"}
                    ],
                    cdesc:[
                        {required:true,massage:'请输入分类描述',trigger:'blur'},
                        {min:3,max:20,massage: '长度为3-20位字符',trigger: 'blur'}


                    ]

                }
            }
        },
        methods:{
            handlerSubmit(){
                this.$refs.categoryform.validate(valid=>{
                    // console.log(valid);

                    if (valid){
                        let url=URL+'/admin/category/add';
                        let token=sessionStorage.getItem('token');
                         console.log(token)
                        // axios.post(url,this.category).then(res=>{
                        //     SUCCESS,FAIL
                        //     console.log(res);
                        // }).catch(error=>{
                        //     this.$message.error('分类添加失败');
                        // })
                        axios({
                            url,
                            method:'POST',
                            data:this.category,
                            headers:{
                                token
                            }
                        }).then(res=>{
                            // console.log(res.data.code);
                            if (res.status===200 && res.data.code===SUCCESS){
                                this.$message.success(res.data.msg)
                            }
                        }).catch(()=>{
                            this.message.error('分类添加失败')
                        })
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>