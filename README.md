# webapi  1
#2019 5/14 压缩图片 在线压缩https://tinypng.com/  PS压缩成WEB格式  
#图片懒加载https://github.com/mishe/lazyload  
步骤一
修改需要懒加载的图片的属性，增加一个名称为lazyload的class

步骤二
并把图片的src设置成通用的loading图片或者空白占位符图片

步骤三
把图片的真实地址，写入图片的data-img中

经过以上三部，图片的html代码变成如下格式：

//示例
<!-- <img src="loading.gif" data-img="a.jpg" class="lazyload"> -->
步骤四
引入lazyload.js

步骤五
增加如下代码

$.imgLazyLoad()  

#new  github 不绿原因:配置的邮箱出错  
#git config --global user.email "1959555480@qq.com"修改  
#git config user.email查询邮箱 
#5.20/2019 template is的用法 实现tab:class

