<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Admin;
class Login extends Controller
{
	public function index()
	{
		if(request()->isPost()){
			$admin = new Admin();
			$data =input('post.');
			// dump($data);die;
			// if($admin->login($data)==1) {
			// 	$this->error('用户不存在');
			// }elseif($admin->login($data)==2){
			// 	$this->error('密码错误');
			// }elseif ($admin->login($data)==3) {
			// 	$this->success('正确','index/index');
			// }
			if ($admin->login($data)==3){//默认127.0.0.1/tp5/public
				$this->success('正确','admin/index/index');
			}elseif($admin->login($data)==4){
				$this->error('验证码错误');
			}
			else{
				$this->error('用户名或者密码错误');
			}
		}
		return $this->fetch('login');
	}
}
