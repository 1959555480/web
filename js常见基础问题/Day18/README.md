# [html] 怎样在页面上实现一个圆形的可点击区域？
    圆角属性
        div 给div设置圆角属性 加点击事件
        button上添加圆角属性
        a标签添加圆角属性
    判断圆心点和点击点的距离是不是在半径中
    svg圆
        <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">

        <circle cx="100" cy="50" r="40" stroke="black"
        stroke-width="2" fill="red" onclick="alert(3)"/>

        </svg>
# [css] 什么是FOUC？你是如何避免FOUC的？
    FOUC 即 Flash of Unstyled Content，是指页面一开始以样式 A（或无样式）的渲染，突然变成样式B。
    原因是样式表的晚于 HTML 加载导致页面重新进行绘制。

    通过 @import 方式导入样式表
    style 标签在 body 中
    解决方法：把 link 标签将样式放在 head 中
# [js] 你理解的"use strict";是什么?使用它有什么优缺点？
    严格模式，其实就是更严格了

    设立"严格模式"的目的，主要有以下几个：
    　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
    　　- 提高编译器效率，增加运行速度；
    　　- 为未来新版本的Javascript做好铺垫。

    我放几个常见的吧，详情可以去下面的文章中看

    禁止this关键字指向全局对象
    禁止在函数内部遍历调用栈
    全局变量必须显式声明
    arguments不再追踪参数的变化
    (function(){
        "use strict"
        b=1//Uncaught ReferenceError: b is not defined
    })()
# [软技能] 你如何看待团建的？你们团建一般都怎么实施？