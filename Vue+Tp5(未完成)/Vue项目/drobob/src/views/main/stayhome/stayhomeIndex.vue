<template>
    <div></div>
<!--    <div>look</div>-->
<!--    <loading :isshow="isShow"></loading>-->
<!--    <el-form inline :model="search">-->
<!--        <el-form-item label="所属分类"></el-form-item>-->
<!--    </el-form>-->
</template>

<script>
    // import instance from "../../../http/http";
    // import loading from "../../../components/loading/loading";
    export default {
        name: "stayhomeIndex",
        // data(){
        //     return{
        //         categories:[],
        //         msg:'helloworld',
        //         isShow:false,
        //         search:{sname:'',scity:'',cid:''},
        //         paginate:{limit:10,page:1},
        //         stayhome:[]
        //     }
        // },
        // components:{
        //     loading
        // },
        // methods:{
        //     initStayhome(){
        //         let params =Object.assign({},this.search,this.paginate)
        //
        //         instance.get('/api/styhome',{
        //             params
        //         }).then((res)=>{
        //             this.isShow=false;
        //             if (res.data){
        //                 let data=this.data;
        //                 data[0].sthumb=IMGURL+'';
        //
        //             }
        //
        //
        //         }).catch((error)=>{
        //             console.log(error)
        //
        //         })
        //
        //     }
        // },
        // mounted() {
        //     this.initStayhome()
        // }
    }
</script>

<style scoped>

</style>