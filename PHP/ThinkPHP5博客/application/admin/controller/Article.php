<?php
namespace app\admin\controller;
use think\Controller;
use think\Db;
use app\Admin\model\Article as ArticleModel;//引入模型
use app\admin\controller\Base;
class article extends Base
{
	// 添加文章
	public function add()
	{
    	// action不写则提交到这里  
		if(request()->isPost()){
    		// dump($_POST);die;//打印提交的内容
			$data=[
				'title'=>input('title'),
				'author'=>input('author'),
				'desc'=>input('desc'),
				'keywords'=>input('keywords'),
				'cateid'=>input('cateid'),
				'content'=>input('content'),
				'time'=>time(),
				'pic'=>'',
			];
			if ((input('state')==NULL)) {
				$data['state']=0;
			}else{
				$data['state']=1;
			}
			if ($_FILES['pic']['tmp_name']) {
				$file = request()->file('pic');
				$info = $file->move(ROOT_PATH . 'public' . DS . 'static/uploads');
				// dump($info);die;
				$data['pic']='/uploads/'.$info->getSaveName();
			}
			// $validate = new \think\Validate([
			// 	'username'  => 'require|min:25',
			// 	'password'=>'require|min:25',
			// // ]);
			// if(!$validate->check($data)){
			// 	$this->error($validate->getError());
			// 	die;
			// }
			$validate = \think\Loader::validate('article');
			if(!$validate->scene('add')->check($data)){
				$this->error($validate->getError());
				die;
			}
			if(Db::name('article')->insert($data)){//连接数据库插入
				return $this->success('添加文章成功','lst');
			}
			else{
				return $this->error('添加文章失败');
			}
		}
		$cateres=db('cate')->select();
		$this->assign('cateres',$cateres);
		return $this->fetch();
	}



	// 列表渲染和分页
	public function lst()
	{
		// 获取数据
		// $list=db('article')->alias('a')->join('cate c','c.id=a.cateid')->field('a.id,a.title,a.pic,a.author,a.state,c.catename')->paginate(3);
		$list = ArticleModel::paginate(5);
		// $list = Db::name('article')->paginate(3);//$list = cateModel::paginate(5);
		$this ->assign('list',$list);
		return $this->fetch();
	}
	// 文章删除操作

	public function del(){
		$id = input('id');
		if($id != 2){
			if(db('article')->delete(input('id'))){
				$this->success('删除成功','lst');
			};
		}else{
			$this->error('不能删除初始文章');	
		}
	}




	//文章进行编辑
	public function edit(){
		// 接受数据
		// dump($_POST);die;//打印提交的内容
		$id = input('id'); 
		// dump($id);die;
		$article = db('article')->find($id);//查询
		if(request()->isPost()){
			$data = [
				'id'=> input('id'),
				'title' => input('title'),
				'author' => input('author'),
				'desc' => input('desc'),
				'keywords' => input('keywords'),
				'content' => input('content'),
				'pic' => '',
				// 'time'=> input('time'),
			];

			if ((input('state')==NULL)) {
				$data['state']=0;
			}else{
				$data['state']=1;
			}
			// dump($data['state']);die;
			$validate = \think\Loader::validate('article');
			if(!$validate->scene('edit')->check($data)){
				$this->error($validate->getError());
				die;
			}
			if ($_FILES['pic']['tmp_name']) {
				@unlink(SITE_URL.'/public/static'.$article['pic']);
				$file = request()->file('pic');
				$info = $file->move(ROOT_PATH . 'public' . DS . 'static/uploads');
				// dump($info);die;
				$data['pic']='/uploads/'.$info->getSaveName();
			}
			// 修改
			if(db('article')->update($data)){
				$this->success('修改成功','lst');
			}else{
				$this->error('修改失败');
			}
			return;
		};
		$cateres=db('cate')->select();
		$this->assign('cateres',$cateres);
		$this -> assign('article',$article);//分配出去  前面的article是分配出去的名字
		return $this->fetch();
	}

}
