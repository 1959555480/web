//[js] 去除字符串中最后一个指定的字符

// 正则
// function delLast(str,target){
//     let reg = new RegExp(`${target}(?=([^${target}]*)$)`)
//     return str.replace(reg,'')
// }
// var a = delLast("abcdddddd","c")
// console.log(a)

// 
function delLast(str,target){
    if(typeof str !== 'string'){
        console.log('请输入正确字符串')
        return false
    }else{
        let index = str.lastIndexOf(target)
        console.log(index)
        return str.substring(0,index) + str.substring(index+1,str.length);
    }
}
//substring() 方法用于提取字符串中介于两个指定下标之间的字符
//lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
console.log("abcdddddd")
var a = delLast("abcdddddd","c")
console.log(a)
