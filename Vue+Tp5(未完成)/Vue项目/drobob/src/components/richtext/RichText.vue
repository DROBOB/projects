<template>
    <div>
        <div id="edit"></div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    // import {IMGURL};

    export default {
        name: "RichText",
        props:{

        },
        data(){

        },
        methods:{
            initRichText(){
                let that=this;
                let edit = new E(this.$refs.edit);
                edit.customConfig.menu=this.menu;
                edit.customConfig.showLinkImg=false;
                edit.customConfig.uploadImgServer=this.uploadurl;
                edit.customConfig.uploadFileName='file';
                edit.customConfig.onchange=(html)=>{
                    html;
                    this.$emit('rich-change')
                }
                edit.customConfig.uploadImgHooks={
                    customInsert:function (insertImg,result) {
                        insertImg(that.IMGURL + result.imgpath);



                    }
                }


            }
        }
    }
</script>

<style scoped>

</style>