<template>
    <div>
        <el-form :model="stayhomeform" ref="stayhomeform">
            <el-form-item label="所属分类">
                <el-input v-model="stayhomeform.cid"></el-input>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="stayhomeform.sname"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <el-input v-model="stayhomeform.sdesc"></el-input>
            </el-form-item>
            <el-form-item label="缩略图">
            <el-form-item>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadurl"
                            list-type="picture-card"
                            multiple
                            limit="5"
                            :on-success="handleThumbSuccess"
                            :before-upload="handleThumbBeforupload">
                        <img v-if="stayhomeform.sthumb" :src="URL+stayhomeform.sthumb" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png/jpeg/webp文件，且不超过200kb</div>
                    </el-upload>
            </el-form-item>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="stayhomeform.sprice"></el-input>
            </el-form-item>
            <el-form-item label="城市">
                <el-input v-model="stayhomeform.scity"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="stayhomeform.stag"></el-input>
            </el-form-item>
            <el-form-item label="民宿省份">
                <el-select v-model="stayhomeform.sprovince">
                    <el-option v-for="(item,index) in province" :key="index" :value="item" :label="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="民宿城市">
                <el-select v-model="stayhomeform.scity">
                    <el-option v-for="(item,index) in cityList" :key="index" :value="item" :label="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="banner">
                <el-form-item>
                    <el-upload
                            class="avatar-uploader"
                            :action="uploadurl"
                            :show-file-list="false"
                            :on-success="handleBannerSuccess"
                            :before-upload="handleThumbBeforupload">
<!--                        <i class="el-icon-plus"></i>-->
                        <img v-if="stayhomeform.sthumb" :src="URL+stayhomeform.sthumb" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png/jpeg/webp文件，且不超过200kb,最佳比例1：1，最多五张</div>
                    </el-upload>

                </el-form-item>
            </el-form-item>
            <el-form-item label="评分">
                <el-input v-model="stayhomeform.score"></el-input>
            </el-form-item>
            <el-form-item label="详情">

            </el-form-item>
            <div id="sdetail" ref="sdetail"></div>


        </el-form>

        <el-dialog>

        </el-dialog>
    </div>
</template>


<script>
    import E from 'wangeditor';
    import {URL} from "../../../lib/base";
    import city from "../../../lib/city.json"
    // import RichText from "../../../components/richtext/RichText";
    // import loading from "../../../components/loading";
    import instance from "../../../http/http";
    console.log(city)

    export default {
        name: "stayhomeadd",
        data(){
            return {
                categories:[],
                uploadurl:URL + '/admin/upload/index',
                showLoading:false,
                stayhomeform:{
                    sname:'',
                    sdesc:'',
                    sthumb:'',
                    sprice:'',
                    scity:'',
                    sarea:'',
                    saddress:'',
                    stag:'',
                    sbanner:'',
                    score:'',
                    sdetail:'',
                    snotice:'',
                    ctime:'',
                    status:'',
                    sprovince:'',
                    cid:'',

                },
                bannerArr:[],
                dialogVisible:false,
                dialogPreviewImg:'',
                city,
                province:[],
                citylist:[],


            }
        },
        computed:{
            // cityList(){
            //    let current=this.city.find(ele=>ele.name === this.stayhomeform.sprovince);
            //    let cityList=current.city.map(ele=>ele.name);
            //     console.log(cityList)
            // },
            // areaList(){
            //
            // }

        },

        methods:{
            initCategory(){
                instance('/admin/category/indexall').then(res=>{
                    // this.show
                    if(res.code===200){
                        this.categories=res.data;

                    }
                }).catch(()=>{

                })

            },

            //缩略图上传成功
            handleThumbSuccess(){


            },
            handleThumbBeforupload(file){
                let {size,type}=file;
                let uploadMaxsize=200*1024;
                let uploadType=['image/jpg','image/jpeg','image/png','image/webp'];
                let sizeFlag=true,typeFlag=true;
                sizeFlag = size < uploadMaxsize;
                typeFlag = uploadType.some(ele=>ele==type);
                if (!typeFlag){
                    this.$message.error('上传图片只能为jpg，jpeg，png，webp格式')
                }
                if (!sizeFlag){
                    this.$message.error('上传图片大小不能超过200kb')
                }


                return sizeFlag && typeFlag



            },
            //轮播上传
            handleBannerSuccess(){
              // this.stayhomeform.sbanner += res.imgpath + ',';
                this.bannerArr.sbanner=this.bannerArr.join(',');

            },
            handleBannerPreview(file){
                let url=this.IMGURL+file.response.imgpath;
                url;
                this.dialogVisible=true;
            },
            initRichText(){
                // let that=this;


                let edit=new E(this.$refs.sdetail);
                edit.create();

            },
            setProvince(){
                this.province=this.city.map(ele=>ele.name);
            },
            setCityList(){

            }


        },
        mounted() {
            this.setProvince();
            this.initCategory();
            this.initRichText();
        }
    }
</script>

<style>
    .el-icon-plus.avatar-uploader-icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

</style>