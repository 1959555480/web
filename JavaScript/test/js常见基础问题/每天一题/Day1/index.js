// var arr = new Array(7);//创建数组 并且限定长度
//     var num = randomNumber();//调用生成随机数函数
//     var i = 0;
//     randomArr(arr,num);
//     function randomArr(arr,num) {
//         if (arr.indexOf(num)< 0){
//             arr[i] = num;
//             i++;
//         } else {
//             num = randomNumber();
//         }
//         if (i>=arr.length){
//             console.log(arr);
//             return;
//         }else{
//             randomArr(arr,num)
//         }
//     }
//     function randomNumber() {//0-31   [2-33)(即2到32之间) （ Math.random() 是[0-1) ）
//         return Math.floor(Math.random()*31 + 2)
//     }
var arr = new Array();
function randomArr(){//随机数
    return Math.floor(Math.random()*31+2)
}

var n = 0;
function isSame(arr,n){
    var num = randomArr()//生成一个
    if(arr.indexOf(num) < 0){
        arr.push(num)
        n++
        isSame(arr,n)
    }else if(arr.length = 5){
        return console.log(arr)
    }
    else{
        num = randomArr()
        isSame(arr,n)
    }
    
}
isSame(arr,n)
