// [js] 写一个方法把下划线命名转成大驼峰命名

// function changeLine(str){
//     if(typeof(str)!=='string'){
//         console.log('请确认要删除的对象为字符串！');
//         return
//     }else{
//         var newStr =''
//         var strs = str.split('_')
//         // console.log(strs)[ 'abc', 'aaa','ccc' ]
//         // 下划线后面的字符处理
//         // var a = strs[1].substring(0,1).toUpperCase() + strs[1].substring(1,strs[1].length)
//         // // console.log(a)
//         // var c = strs[0] + a
//         // console.log(c)
//     }
// }
//toUpperCase() 方法用于把字符串转换为大写。
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// changeLine("a_c")
var newStr = "abc_def_gh"
function underlines(str){
    if(typeof(str)==='string'){
        var strs = str.split('_')
        var news = ''
        console.log('参数是数组',strs)
        for(let i = 0; i < strs.length; i++){
            news += strs[i].substring(0,1).toUpperCase() + strs[i].substring(1,strs[i].length)
        }
    }else{
        console.log('参数不是数组')
    }
    return news
    // for(let i = 0; i<)
}

var a = underlines(newStr)
console.log(a)
