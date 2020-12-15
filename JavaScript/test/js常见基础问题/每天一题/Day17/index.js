// # [js] 写一个数组去重的方法（支持多维数组）

var a = [1,2,3,1,1,4,5,6,[1,2],[3.4]]
//flat() 函數以遞迴方式將特定深度的子陣列重新串接成為一新的陣列
function uniQueArr(a){
  return [new Set(a.flat(Infinity))]
}
// console.log(uniQueArr(a))
var a = [1,2,3,1,1,4,5,6,[1,2],[3,4]]
var ar = []
function mapArr(arr){
  arr.map((item,index)=>{
    if(Array.isArray(item)){
      mapArr(arr[index])
    }else{
      ar.push(item)
    }
  })
  return ar
}
// map（item,index） 前面item 后面Index
console.log(mapArr(a))