<?php
namespace app\admin\controller;
use think\Controller;
//用于权限  让其他控制器继承即可
class Base extends Controller
{
	public function _initialize(){
		if(!session('username')){
			$this->error('请先登陆','login/index');
		}
	}
}