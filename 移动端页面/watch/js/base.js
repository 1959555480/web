var boxArr = document.getElementsByClassName("box");

//让每一个box都调用函数
for (var i = 0; i < boxArr.length; i++) {
    fn(boxArr[i]);
}

function fn(element) {
    var liArr = element.getElementsByClassName("nav");   //注意，是element获取事件源，不是document获取事件源
    var spanArr = element.getElementsByTagName("span");
    //2.绑定事件（循环绑定）
    for (var i = 0; i < liArr.length; i++) {
        //绑定索引值（新增一个自定义属性：index属性）
        liArr[i].index = i;
        liArr[i].onmouseover = function () {
            //3.书写事件驱动程序（排他思想）
            //1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
            for (var j = 0; j < liArr.length; j++) {
                liArr[j].className = "";
                spanArr[j].className = "";
            }
            this.className = "current";
            spanArr[this.index].className = "show"; //【重要】核心代码
        }
    }
}