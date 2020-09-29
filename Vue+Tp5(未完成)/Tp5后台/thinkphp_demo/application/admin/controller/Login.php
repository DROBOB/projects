<?php

namespace app\admin\controller;


//use think\Config;
use think\Controller;
use think\Db;
use think\JWT;

class Login extends Controller
{
    public function check(){
        $method=$this->request->method();
//        echo $method;
        if($method!='POST'){
            return json([
                'code'=>'404',
                'msg'=>'请求方式错误',

            ]);
        }
        $data=$this->request->post();
        $validate=validate('Login');
        $flag=$validate->scene('login')->check($data);
        if (!$flag){
            return json([
                'code'=>'404',
                'msg'=>$validate->getError(),
            ]);
        }

        $whereArr=['username'=>$data['username']];

        $user=Db::table('admin')->where($whereArr)->find();
        if ($user){
            $password=md5(crypt($data['password'],config('salt')));
            if ($password === $user['password']){
                $payload=[
                    'id'=>$user['id'],
                    'username'=>$user['username'],
                    'avatar'=>$user['avatar']
//                    'password'=>$user['password']
                ];
               $token= JWT::getToken($payload,config('jwtkey'));
                return json([
                    'code'=> 200,
                    'msg'=>'登陆成功',
                    'token'=>$token,
                    'user'=>$payload
                ]);

            }
            else{
                return json([
                    'code'=>404,
                    'msg'=>'用户名和密码不匹配',

                ]);
            }

        }else{
            return json([
                'code'=>404,
                'msg'=>'该用户名不存在',

            ]);
        }

    }

}