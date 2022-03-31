// 深拷贝
function deepClone(obj){

  return JSON.parse(JSON.stringify(obj))
}
let c = {num:456,arr:[123,123]}
let cloneC = deepClone(c)

c.d = 4

console.log(cloneC)