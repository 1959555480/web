function longTask(callback,timeout) {
setTimeout(callback,timeout)
}
longTask(()=>{console.log("回调任务被执行了");},0);
console.log("我是同步代码 不会阻塞我");