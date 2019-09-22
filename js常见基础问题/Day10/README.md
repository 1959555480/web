# [html] viewport常见设置都有哪些？
    width = device-width
    initial-scale
    maximun-scale
    user-scalable
# [css] 对比下px、em、rem有什么不同？
    px: 绝对固定的值，无论页面放大或者缩小都不会改变。
    em: 相对父元素字体大小的倍数。如果父元素的字体为 12px，那么子元素 1em 就是 24px。由于是相对父级的倍数，所以多层嵌套时，倍数关系的计算会很头痛。
    rem: 相对根元素字体大小的倍数。相对于 html 的字体大小，如果不做任何修改，浏览器默认字体大小为 16px。

    小技巧
        如果为了方便计算 rem，可以设置 font-size= 62.5% 这样一来默认的字体就变成 10px 了。之后的 rem 就是以 10 为基准了。
# [js] 简要描述下什么是回调函数并写一个例子出来
    回调是把一个函数作为参数传递给另一个函数，当该函数满足某个条件时触发该参数函数。
    主要用于异步操作 例如网络请求 防止页面同步代码阻塞导致渲染线程停止
    function longTask(callback,timeout) {
    setTimeout(callback,timeout)
    }
    longTask(()=>{console.log("回调任务被执行了");},2000);
    console.log("我是同步代码 不会阻塞我");


