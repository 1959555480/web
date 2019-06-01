<?php
namespace app\index\controller;
use think\Controller;
// use app\index\controller\Base;
//index模块/index控制器/index方法
use think\Db;
class Index extends Base
{
    public function index()
    {
        return $this->fetch();
    }
    
}
