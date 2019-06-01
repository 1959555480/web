<?php
namespace app\admin\controller;
use think\Controller;
use think\Db;
use app\Admin\model\Links as LinksModel;//引入模型
use app\admin\controller\Base;
class Links extends Base
{
	// 添加链接
	public function add()
	{
    	// action不写则提交到这里  
		if(request()->isPost()){
    		// dump(input('post.'));打印提交的内容
			$data=[
				'title'=>input('title'),
				'url'=>input('url'),
				'desc'=>input('desc')
			];
			// $validate = new \think\Validate([
			// 	'username'  => 'require|min:25',
			// 	'password'=>'require|min:25',
			// // ]);
			// if(!$validate->check($data)){
			// 	$this->error($validate->getError());
			// 	die;
			// }
			$validate = \think\Loader::validate('Links');
			if(!$validate->scene('add')->check($data)){
				$this->error($validate->getError());
				die;
			}
			if(Db::name('Links')->insert($data)){//连接数据库插入
				return $this->success('添加链接成功','lst');
			}
			else{
				return $this->error('添加链接失败');
			}
		}
		return $this->fetch();
	}



	// 列表渲染和分页
	public function lst()
	{
		// 获取数据
		$list = Db::name('Links')->paginate(5);//$list = LinksModel::paginate(5);
		$this ->assign('list',$list);
		return $this->fetch();
	}
	// 链接删除操作

	public function del(){
		$id = input('id');
		if($id != 2){
			if(db('Links')->delete(input('id'))){
				$this->success('删除成功','lst');
			};
		}else{
			$this->error('不能删除初始链接');	
		}
	}




	//链接进行编辑
	public function edit(){
		// 接受数据
		$id = input('id'); 
		$Links = db('Links')->find($id);//查询
		if(request()->isPost()){
			
			$data = [
				'id'=> input('id'),
				'title' => input('title'),
				'url' => input('url'),
				'desc' => input('desc'),
			];

			$validate = \think\Loader::validate('Links');
			if(!$validate->scene('edit')->check($data)){
				$this->error($validate->getError());
				die;
			}
			// if(input('password')){//如果填入则修改密码，不填则保持原来的密码
			// 		$data['password'] =md5(input('password'));
			// 	}else{
			// 		$data['password'] =$Links['password'];
			// 	}
			// $data = [];
		 //    $data['id'] = input('id');
		 //    $data['username'] = input('username');
		 //    $data['password'] = input('password');
			// 修改
			if(db('Links')->update($data)){
				$this->success('修改成功','lst');
			}else{
				$this->error('修改失败');
			}
			return;
		};
		
		$this -> assign('Links',$Links);//分配出去  前面的Links是分配出去的名字
		return $this->fetch();
	}

}
