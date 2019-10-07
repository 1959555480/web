# html] 谈谈你对input元素中readonly和disabled属性的理解
	相同点 
		文本框都会变成只读，不可编辑
	不同
		disabled 在将Input便签变成只读不可编辑的同时，还会使文本框变灰，但readonly不会
		disabled 在不可编辑的同时 js也是获取不到的 但readonly修饰后的文本框内容是可以用过js获取到的 就只是简单的不可编译
		disabled对Input文本框 单选radio 多选checkbox都适用 但readonly就不适用 用它修饰的单选以及多选按钮仍然是可以编辑状态的
# css] 说说你对line-height是如何理解的？
	line-height 在日常用的最多的是让单行文字垂直居中（其实不需要设置 height，一个 line-height 即可）。因为 line-height - font-size 为行距，一般会近似平分到文字的上下两边，使文字看上去垂直居中。如果需要多行文字的垂直居中，还需要加上 vertical-align: middle;。

	line-height 可以不设置单位，表示 font-size 的倍数。

	另外对于非替换元素的纯内联元素，其高度是由 line-height 所决定的。
# js] 写一个方法验证是否为中文
# 软技能] 来说说你对重绘和重排的理解，以及如何优化？
触发重绘的条件：改变元素外观属性。如：color，background-color，font-size等。
触发重排的条件：改变元素的大小 位置 等如：width、height、pading、margin、position等，　添加删除DOM操作等

优化
1、浏览器自己的优化：浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。
2、我们要注意的优化：我们要减少重绘和重排就是要减少对渲染树的操作，则我们可以合并多次的DOM和样式的修改。并减少对style样式的请求。
（1）直接改变元素的className
（2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；
（3）不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
（4）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
（5）将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；
（6）如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；

