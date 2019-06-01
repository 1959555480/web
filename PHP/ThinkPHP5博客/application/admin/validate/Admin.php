<?php
namespace app\admin\validate;
use think\validate;
// 验证信息
class Admin extends validate
{
    protected $rule = [
    	'username' => 'require|max:25|unique',
    	'password' => 'require|min:6',
    ];
    // 错误提示
    protected $message = [
    	'username.min' => '账号写长点哦！',
    	'password.min' => '密码至少6位哦！',
    	'password.require' => '密码不能为空哦！',
    ];

    // 验证场景
    protected $scene = [
    	'add' => ['username'=>'require|max:25|unique:admin',],
    	'edit' => ['username'=>'require'],
    ];

}
