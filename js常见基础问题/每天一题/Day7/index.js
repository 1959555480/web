// [js] 写一个去除制表符和换行符的方法
function clear(str){
    return str.replace(/\n|\s/g,'')
}
console.log(clear('\nab\nacaa'))