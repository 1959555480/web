<?php
namespace app\admin\controller;
use think\Controller;
use think\Db;
use app\admin\model\Cate as CateModel;
use app\admin\controller\Base;
class Cate extends Base
{
	// 添加管理员
	public function add()
	{
    	// action不写则提交到这里  
		if(request()->isPost()){
    		// dump(input('post.'));打印提交的内容
			$data=[
				'catename'=>input('catename'),
			];
			// $validate = new \think\Validate([
			// 	'username'  => 'require|min:25',
			// 	'password'=>'require|min:25',
			// // ]);
			// if(!$validate->check($data)){
			// 	$this->error($validate->getError());
			// 	die;
			// }
			$validate = \think\Loader::validate('cate');
			if(!$validate->check($data)){
				$this->error($validate->getError());
				die;
			}
			if(Db::name('cate')->insert($data)){//连接数据库插入
				return $this->success('添加栏目成功','lst');
			}
			else{
				return $this->error('添加栏目失败');
			}
		}
		return $this->fetch();
	}



	// 列表渲染和分页
	public function lst()
	{
		// 获取数据
		$list = Db::name('cate')->paginate(3);//$list = cateModel::paginate(5);
		$this ->assign('list',$list);
		return $this->fetch();
	}

	// 管理员删除操作
	public function del(){
		$id = input('id');
			if(db('cate')->delete(input('id'))){
				$this->success('删除成功','lst');
			};
		
	}




	//管理员进行编辑
	public function edit(){
		// 接受数据
		$id = input('id'); 
		$cate = db('cate')->find($id);//查询
		if(request()->isPost()){
			
			$data = [
				'id'=> input('id'),
				'catename' => input('catename'),
			];

			$validate = \think\Loader::validate('cate');
			if(!$validate->scene('edit')->check($data)){
				$this->error($validate->getError());
				die;
			}
			
			// 修改
			$num = db('cate')->update($data);
			if($num = db('cate')->update($data)){
				$this->success('修改成功','lst');
			}else{
				$this->error('修改失败');
			}
			return;
		};
		
		$this -> assign('cate',$cate);//分配出去  前面的cate是分配出去的名字
		return $this->fetch();
	}

}
