#图片懒加载https://github.com/mishe/lazyload

<br>
步骤一<br>
修改需要懒加载的图片的属性，增加一个名称为lazyload的class<br>

步骤二<br>
并把图片的src设置成通用的loading图片或者空白占位符图片<br>

步骤三<br>
把图片的真实地址，写入图片的data-img中<br>

经过以上三部，图片的html代码变成如下格式：<br>

//示例<br>
 //img src="loading.gif" data-img="a.jpg" class="lazyload"<br>
 
步骤四<br>
引入lazyload.js<br>

步骤五<br>
增加如下代码<br>

$.imgLazyLoad()<br>  
# watch vue active项目用纯html css js 写 tab参考https://www.cnblogs.com/yingzi1028/p/6098343.html


