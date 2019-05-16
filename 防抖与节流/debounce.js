var count = 1;
var container = document.getElementById('container');//获取目标节点

function getUserAction(e) {//需要防抖或者节流的函数
    container.innerHTML = count++;
    return '111';
};

function debounce(func,wait,immediate){//具体实现方法
	var timeout,result;//用于清除定时器
	 // console.log(this);//window
	return function(){
		// console.log(this);//<div id="container"></div>
		var that = this;//将this指向正确的对象
		var args = arguments;

		if (timeout) {clearTimeout(timeout)};//清除定时器
		
		if (immediate) {
			//已经执行过，不再执行
			var callNow = !timeout;
			timeout = setTimeout(function(){
				timeout = null;
			},wait)
			if (callNow) result = func.apply(that,args);
		}
		else{
			timeout = setTimeout(function(){
				func.apply(that,args);
			},wait);
		}
		return result;
	};
}
var result = debounce(getUserAction,1000,true);
container.onmousemove = function(){
	var res = result();
	console.log(res);
}