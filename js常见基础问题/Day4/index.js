// [js] 写一个方法把下划线命名转成大驼峰命名

function changeLine(str){
    if(typeof(str)!=='string'){
        console.log('请确认要删除的对象为字符串！');
        return
    }else{
        var newStr =''
        var strs = str.split('_')
        // console.log(strs)[ 'abc', 'aaa','ccc' ]
        // 下划线后面的字符处理
        var a = strs[1].substring(0,1).toUpperCase() + strs[1].substring(1,strs[1].length)
        // console.log(a)
        var c = strs[0] + a
        console.log(c)
    }
}
//toUpperCase() 方法用于把字符串转换为大写。
changeLine("a_c")