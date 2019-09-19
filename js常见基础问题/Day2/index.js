//# [js] 写一个方法去掉字符串中的空格

var a = "   a b c dddd"
function strim(str){
    if(typeof(str) === "string"){
        strs = str.replace(/\s/g,'');
        return strs
    }
    else{
        console.log("请输入字符串")
    }
}
var newstr = strim(123)
console.log(newstr)