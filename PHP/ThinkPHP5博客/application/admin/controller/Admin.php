<?php
namespace app\admin\controller;
use think\Controller;
use think\Db;
use app\admin\model\Admin as AdminModel;
use app\admin\controller\Base;

class Admin extends Base
{

	// 添加管理员
	public function add()
	{
    	// action不写则提交到这里  
		if(request()->isPost()){
    		// dump(input('post.'));打印提交的内容
			$data=[
				'username'=>input('username'),
				'password'=>md5(input('password')),
			];
			// $validate = new \think\Validate([
			// 	'username'  => 'require|min:25',
			// 	'password'=>'require|min:25',
			// // ]);
			// if(!$validate->check($data)){
			// 	$this->error($validate->getError());
			// 	die;
			// }
			$validate = \think\Loader::validate('Admin');
			if(!$validate->scene('add')->check($data)){
				$this->error($validate->getError());
				die;
			}
			if(Db::name('admin')->insert($data)){//连接数据库插入
				return $this->success('添加成功','lst');
			}
			else{
				return $this->error('添加失败');
			}
		}
		return $this->fetch();
	}



	// 列表渲染和分页
	public function lst()
	{
		// 获取数据
		$list = Db::name('admin')->paginate(5);//$list = AdminModel::paginate(5);
		$this ->assign('list',$list);
		return $this->fetch();
	}
	// 管理员删除操作
	public function del(){
		$id = input('id');
		if($id != 2){
			if(db('admin')->delete(input('id'))){
				$this->success('删除成功','lst');
			};
		}else{
			$this->error('不能删除初始管理员');	
		}
	}




	//管理员进行编辑
	public function edit(){
		// 接受数据
		$id = input('id'); 
		$admin = db('admin')->find($id);//查询
		if(request()->isPost()){
			
			$data = [
				'id'=> input('id'),
				'username' => input('username'),
			];

			$validate = \think\Loader::validate('Admin');
			if(!$validate->scene('edit')->check($data)){
				$this->error($validate->getError());
				die;
			}
			if(input('password')){//如果填入则修改密码，不填则保持原来的密码
					$data['password'] =md5(input('password'));
				}else{
					$data['password'] =$admin['password'];
				}
			// $data = [];
		 //    $data['id'] = input('id');
		 //    $data['username'] = input('username');
		 //    $data['password'] = input('password');
			// 修改
			$psd = db('admin')->update($data);
			if($psd!==false){//返回0条是正确
				$this->success('修改成功','lst');
			}else{
				$this->error('修改失败');
			}
			return;
		};
		
		$this -> assign('admin',$admin);//分配出去  前面的admin是分配出去的名字
		return $this->fetch();
	}

	// 退出登陆
	public function logout(){
		session(null);
		$this->success('退出成功','admin/login/index');
	}
}
