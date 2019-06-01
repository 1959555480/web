<?php
namespace app\admin\validate;
use think\validate;
// 验证信息
class Article extends validate
{
    protected $rule = [
    	'title' => 'require|max:25',
    	'cateid' => 'require',
    ];
    // // 错误提示
    protected $message = [
    	'title.require' => '爹爹，文章题目写点东西！',
    	'title.max' => '链接太长了，8行！',
    	'url.require' => '链接8写可8行哦！',
        'cateid.require '=>'栏目选一下',
    ];

    // // 验证场景
    protected $scene = [
    	'add' => ['title','cateid'],
    	'edit' => ['title','cateres'],
    ];

}
