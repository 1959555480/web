<?php
namespace app\admin\model;//现在主要是引入这个模型类，使用这里面的方法
use think\Model;
// 模型文件
class Article extends Model
{
	public function cate()
    {
        return $this->belongsTo('cate','cateid');
    }
}
