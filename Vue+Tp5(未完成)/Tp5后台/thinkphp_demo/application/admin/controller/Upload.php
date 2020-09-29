<?php


namespace app\admin\controller;


use think\Controller;

class Upload extends Controller
{

    public function index(){
        // 获取表单上传文件 例如上传了001.jpg
        $file = $this->request->file('image');

        // 移动到框架应用根目录/public/uploads/ 目录下
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $info = $file->validate(['size'=>200*1024,'ext'=>'webp,jpeg,jpg,png'])->move(ROOT_PATH . 'public' . DS . 'uploads');

            if($info){
                // 成功上传后 获取上传信息
                // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                echo $info->getSaveName();
                // 输出 42a79759f284b767dfcb2a0197904287.jpg
                echo $info->getFilename();
            }else{
                // 上传失败获取错误信息
                echo $file->getError();
            }
        }

    }

}