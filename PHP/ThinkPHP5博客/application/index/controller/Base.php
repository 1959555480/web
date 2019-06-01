<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
class Base extends Controller
{
    public function _initialize()//会在执行其他控制器之前执行这个初始化
    {
    	$cateres=Db::name('cate')->order('id')->select();//获取数据
    	$this->assign('cateres',$cateres);//分配到模板当中
    }
    
}
