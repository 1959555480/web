//[js] 写一个把字符串大小写切换的方法

// var str = "abcd"
// function changStr(str){
//     var big = false
//     if(typeof(str)!=='string'){
//         console.log('输入字符串')
//     }else if( big == false ){
//         var newStr = str.toUpperCase()
//         console.log(newStr)
//         big = true
//     }else{
//         var newStr = str.toLowerCase()
//         console.log(newStr)
//         big = false
//     }
// }
// changStr(str)

function caseConvertEasy(str) {
    var newStr = str.split('').map(s =>{
        console.log(s,s.charCodeAt())
        if(s.charCodeAt() > 90){//小写
            return s.toUpperCase()
        }else{
            return s.toLowerCase()
        } 
    }).join('')
    console.log(newStr)
}
console.log(caseConvertEasy('aBc')) // aBcXyZ 