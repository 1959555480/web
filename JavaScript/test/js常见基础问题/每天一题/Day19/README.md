# [html] 说说你对html中的置换元素和非置换元素的理解
	置换元素是指：浏览器根据元素的标签和属性，来决定元素的具体显示内容。例如：浏览器根据标签的src属性显示图片。根据标签的type属性决定显示输入框还是按钮。

	非置换元素：浏览器中的大多数元素都是不可置换元素，即其内容直接展示给浏览器。例如标签，
	标签里的内容会被浏览器直接显示给用户。
# [css] css的属性content有什么作用呢？有哪些场景可以用到？
	content属性与：before和:after配合使用 在元素头或尾部插入生成内容
	用于引用媒体文件 图片 图标 SVG等
		.demo:after{
	content: url(https://img-vip-ssl.a.88cdn.com/img/xunleiadmin/5b9889e14dcdc.png);
}
	content: attr() value 属性值的引用
# [js] "attribute"和"property"有什么不同？
	property是DOM中的属性，是JavaScript里的对象
	attribute是HTML标签上的特性，它的值只能够是字符串
# [软技能] 最近都流行些什么？你经常会浏览哪些网站？