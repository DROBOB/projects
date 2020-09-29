

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from "../views/Login";
import main from "../views/main/main";
import list from "../views/main/list";
import add from "../views/main/category/add";
import changepass from "../views/main/pass/Changepass";
import index from "../views/main/category/index";
import stayhomeadd from "../views/main/stayhome/stayhomeadd";
import categoryEdit from "../views/main/category/categoryEdit";
import stayhomeIndex from "../views/main/stayhome/stayhomeIndex";
import Echartscom from "../views/echarts/Echarts";
// import el from "element-ui/src/locale/lang/el";

let router=new VueRouter({
    routes:[
        {
            path:'/',component:main,name: 'main',
            redirect:'/echarts',
            meta:{
                auth:true,title:'首页'
            },
            children:[
                {
                path:'add',component:add,name:'add',
                    meta:{
                    title:'分类查看',auth: true
                }
                },
                {
                    path:'index',component:index,name:'index',
                    meta:{
                        title:'分类添加',auth: true
                    }
                },
                {
                    path:'categoryEdit',component:categoryEdit,name:'categoryEdit',
                    meta:{
                        title:'分类编辑',auth: true
                    }
                },
                {
                    path:'changepass',component:changepass,name:'changepass',
                    meta:{
                        title:'修改密码',auth: true
                    }

                },
                {
                    path:'stayhomeadd',component:stayhomeadd,name:'stayhomeadd',
                    meta:{
                        title:'名宿添加',auth: true
                    }

                },
                {
                    path:'stayhomeIndex',component:stayhomeIndex,name:'stayhomeIndex',
                    meta:{
                        title:'名宿查看',auth: true
                    }

                },
                {
                    path: 'echarts',component: Echartscom,name: 'echarts',
                    meta: {
                        title: 'echarts',auth: true
                    }
                }

            ]
        },
        {
            path: '/login',component: Login,name:'login',
            meta: {
                auth:false
            }



        },
        {
            path: '/list',component: list,name: 'list',
            meta: {
                auth: true
            }

        },

    ]
})

router.beforeEach((to,from,next)=>{
    if(to.meta.auth){
        let token= sessionStorage.getItem('token');
        token=token && token.trim();
        if (token){
            next();
        }else {
            next({name:'login',query:{redirect:to.name}});
        }
    }else {
        next();
    }

})


export default router;