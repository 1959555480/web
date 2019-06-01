<?php
namespace app\admin\validate;
use think\validate;
// 验证信息
class Cate extends validate
{
    protected $rule = [
    	'catename' => 'require|max:25|unique:cate',
    ];
    // 错误提示
    protected $message = [
    	'catename.require' => '栏目要写哦！',
        'catename.max' => '栏目字数不能大于于6！',
        'catename.unique' => '栏目不能重复',
    ];

    // 验证场景
    protected $scene = [
    	'add' => ['catename'=>'require|unique:cate'],
    	'edit' => ['catename'=>'require|unique:cate'],
    ];

}
