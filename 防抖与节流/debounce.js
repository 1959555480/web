var count = 1;
var container = document.getElementById('container');//获取目标节点

function getUserAction() {//需要防抖或者节流的函数
    container.innerHTML = count++;
    // console.log(this);
};
function debounce(func,wait){//具体实现方法
	var timeout;//用于清除定时器
	 console.log(this);//window
	return function(){
		console.log(this);//<div id="container"></div>
		var that = this;//将this指向正确的对象
		clearTimeout(timeout);//清除定时器
		timeout = setTimeout(function(){
			func.apply(that);
		},wait);
	}
}
container.onmousemove = debounce(getUserAction,1000);