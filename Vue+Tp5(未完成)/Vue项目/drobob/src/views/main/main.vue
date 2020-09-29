<template>
    <el-container class="main-box">
        <el-header>
            <div style="">
                <img src="" alt="">
                这是一个图标
            </div>
            <div class="nav">
                <el-menu   mode="horizontal" style="background-color:transparent;border-bottom:none">
                    <el-menu-item index="0"><router-link :to="{path:'/echarts'}">实时数据</router-link></el-menu-item>

                    <el-menu-item index="1">指南</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">admin</template>
                        <el-menu-item index="2-1"><router-link :to="{path:'/changepass'}">修改密码</router-link></el-menu-item>
                        <el-menu-item index="2-3">退出</el-menu-item>
                    </el-submenu>


                </el-menu>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                    <el-col style="width: 200px;" :span="12">
                        <el-menu>
                            <el-submenu index="1-1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">分类管理</span>
                                </template>
                                <el-menu-item>
                                    <router-link to="/add">分类添加</router-link>
                                </el-menu-item>
                                <el-menu-item>
                                    <router-link :to="{path:'/index'}">分类查看</router-link>
                                </el-menu-item>
                            </el-submenu>

                            <el-submenu index="2-1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">名宿管理</span>
                                </template>
                                <el-menu-item>
                                    <router-link to="/stayhomeadd">名宿添加</router-link>
                                </el-menu-item>
                                <el-menu-item>
                                    <router-link to="/stayhomeIndex">名宿查看</router-link>
                                </el-menu-item>
                            </el-submenu>



                        </el-menu>
                    </el-col>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>
    .main-box{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .el-header{

        display: flex;
        justify-content: space-between;
        /*background-color: #B3C0D1;*/
        color: #333;
        /*text-align: center;*/
        /*line-height: 60px;*/
        border-bottom: 5px solid #B3C0D1;
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: center;
        line-height: 200px;
        border-right:10px solid #B3C0D1 ;
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;

    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
        color: inherit;
    }

</style>