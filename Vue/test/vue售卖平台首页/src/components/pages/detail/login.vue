<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
        <p>{{errorText}}</p>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
            usernameModel: '',
            passwordModel: '',
            abc: 123,
            errorText: ''
        }
    },
    computed:{
        userErrors(){
            let errorText,status
            if (!/@/g.test(this.usernameModel)) {
                status = false,
                errorText = "缺少@"
            }else{
                status = true,
                errorText = "OK"
            }
            if(!this.flag){//第一次进来flag是空的 所以一定进来 这时设置errorText 然后设置flag 为true 再也进不来
                errorText= ''
                this.flag = true
            }
            return {
                status,
                errorText
            }
        },
        passwordErrors(){
            let errorText,status
            if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                status = false
                errorText = '密码不是1-6位'
            }
            else {
                status = true
                errorText = 'OK'
            }
            if(!this.passwordflag){//第一次进来flag是空的 所以一定进来 这时设置errorText 然后设置flag 为true 再也进不来
                errorText= ''
                this.passwordflag = true
            }
            return {
                status,
                errorText
            }
        },

    },
    methods:{
        onLogin(){
            if(!this.userErrors.status||!this.passwordErrors.status)//账号密码都不成立
            {
                this.errorText = "账号或者密码不正确"
            }else{
                // 登陆通过
                this.$axios.get('https://www.easy-mock.com/mock/5d15ba601bcf1f3cd6c4d7b9/example/A#!method=get')
                .then((res)=>{
                    // console.log(res.data.Login.username)//接收到数据传给父组件
                    this.$emit('hasLog',res.data.Login)
                })
                .catch(error=>{
                    console.log("error")
                })
            }
        }
    }
}
</script>
<style scoped>
</style>