<template>
    <div>
        <el-form :inline="true">
            <el-form-item lable="分类名称">
                <el-input v-model="search.cname" placeholder="搜索"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="handlerSearch"></el-button>
            </el-form-item>

        </el-form>
        <el-table :data="categories">
            <el-table-column prop="cid" label="ID"></el-table-column>
            <el-table-column prop="cname" label="分类名称"></el-table-column>
            <el-table-column prop="cdesc" label="分类描述"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row.cid)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>


        </el-table>
        <div class="paginate">
            <el-pagination
                    :total="total"
                    :page-size.sync="paginate.limit"
                    :current-page="paginate.page"
                    @current-change="handlerCurrentPageChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    /*
    * 查看符合指定条件下某一页若干条数据
    *
    * */

    import axios from 'axios';

    import {URL,SUCCESS} from "../../../lib/base";


    export default {
        name: "index",
        data(){
            return{
                search:{cname:""},
                paginate:{
                    page:1,
                    limit:3
                },
                categories:[],
                total:0
            }
        },
        methods:{
            initCategory(){

                let url=URL + '/admin/category/index';
                let token=sessionStorage.getItem('token');
                let params=Object.assign({},this.paginate,this.search);
                axios({
                    method:'GET',
                    url,
                    params,
                    headers:{
                        token
                    }
                }).then(res=>{
                    if (res.status && res.data.code === SUCCESS){
                        if (res.data.data){
                            this.categories=res.data.data;
                            this.total=res.data.total;
                        }else {
                            this.$message.info(res.data.msg);
                        }

                    }

                }).catch(()=>{

                })

            },
            handlerCurrentPageChange(val){
                this.paginate.page=val;
                this.initCategory();

            },
            handlerSearch(){
                this.paginate.page=1;
                this.initCategory();
            },
            handleEdit(cid){
                this.$router.push({path:'/categoryEdit',query:{cid}})

            }
        },
        mounted() {
            this.initCategory()
        }
    }
</script>

<style scoped>

</style>