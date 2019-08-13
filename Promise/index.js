class Promise{
    constructor(executor){
        // 参数校验
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }

        this.value = null//终值
        this.reason = null//拒因
        this.state = 'pending'//状态

        const resolve = value => {
            // 成功后的回调 状态的改变
            if(this.state === 'pedding'){
                this.state = 'fulfilled',
                this.value = value
            }
        }

        const reject = function(reason){
            // 失败后的回调 状态的改变
            if(this.state === 'pedding'){
                this.state = 'reject'
                this.reason = reason
            }
        }

        executor(resolve,reject)
    }
}

module.exports = Promise