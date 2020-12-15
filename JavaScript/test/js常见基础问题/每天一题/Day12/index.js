// # [js] 写一个获取当前url查询字符串中的参数的方法 
// 返回URL的查询部分。假设当前的URL就是http://www.runoob.com/submit.htm?email=someone@ example.com：
// location.search=>  ?email=someone@ example.com
function params() {
    let search = window.location.search;
    search = search.substr(1, search.length);
    const res = {};
    if (!search) return res;
    search.split('&').map(item => {
      const [key, value] = item.split('=');
      res[key] = decodeURIComponent(value);
    });
    console.log('search.split',search.split('&'))
    console.log('map',search.split('&').map(item => {
        const [key, value] = item.split('=');
        res[key] = decodeURIComponent(value);
      }))
    return res;
    
}
params()