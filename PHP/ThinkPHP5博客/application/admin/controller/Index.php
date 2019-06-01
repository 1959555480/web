<?php
namespace app\admin\controller;
use think\Controller;
//admin模块/index控制器/index方法
// 默认打开的页面
use think\Db;
use app\admin\controller\Base;
class Index extends Base
{
    public function index()
    {
    	$cateres=Db::name('cate')->order('id desc')->select();//获取数据
    	$this->assign('cateres',$cateres);//分配到模板当中
        return $this->fetch();
    }
    
}
