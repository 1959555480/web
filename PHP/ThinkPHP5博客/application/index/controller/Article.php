<?php
namespace app\index\controller;
use think\Db;
class Article extends Base
{
    public function index()
    {
    	// 继承了Base中的方法初始化，简洁了
        return $this->fetch('article');
    }
    
}
