<?php
namespace app\admin\validate;
use think\validate;
// 验证信息
class Links extends validate
{
    protected $rule = [
    	'title' => 'require|max:25',
    	'url' => 'require',
    ];
    // 错误提示
    protected $message = [
    	'title.require' => '爹，链接写点东西！',
    	'title.max' => '链接太长了，8行！',
    	'url.require' => '链接8写可8行哦！',
    ];

    // 验证场景
    protected $scene = [
    	'add' => ['titel','url'],
    	'edit' => ['title','url'],
    ];

}
