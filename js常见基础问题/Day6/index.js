// [js] 统计某一字符或字符串在另一个字符串中出现的次数   
// function coutStr(strs,target){
//     var cout = 0
//     var arr = strs.split('')
//     .map((i,item)=>{
//         if(i===target){
//             cout++
//         }
//     })
//     return console.log(cout)
// }
// coutStr("abcadaaaa",'abc')
// 2
// var parent = 'aaaaaabc'
// var child = 'ac'
// var childInNums = parent.split(child).length - 1
// console.log(childInNums)

var parent = 'aaaaaabc'
var child = 'aa'
var cout = 0
function coutStr(parent,child){
    if(parent.match(child)){
        parent = parent.replace(child,'')
        cout++
        coutStr(parent,child)
    }else{
        return 0
    }
}
coutStr(parent,child)
console.log(cout)