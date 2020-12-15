<!-- 二维码页面  默认false-->
<template>
  <div class="code" :class="{showcode: showCode}">
    <div class="header">
      <img @click="backto" src="../../images/cha.png" alt="">
    </div>
    <div class="abdomen">
      <img src="../../images/ewm.png" alt="">
    </div>
    <div class="footer">
      <div class="payment">
        <div class="payment_img">
          <img src="../../images/zfb.png" alt="">
        </div>
        <p>支付宝</p>
      </div>
      <div class="payment">
        <div class="payment_img">
          <img src="../../images/wx.png" alt="">
        </div>
        <p>微信支付</p>
      </div>
      <div class="payment">
        <div class="payment_img">
          <img src="../../images/sqb.png" alt="">
        </div>
        <p>神钱包</p>
      </div>
      <div class="payment">
        <div class="payment_img">
          <img src="../../images/kb.png" alt="">
        </div>
        <p>我的卡包</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';//这个是vuex自带的辅助函数  可以简化commit
export default {
  name: 'Code',
  data() {
    return {
      
    }
  },
  computed: {//这里写法相当于 this.$store.commit('showCode')
    ...mapGetters([
      'showCode'
    ])
  },
  methods: {
    backto() {
      this.$store.dispatch('setShowCode', false)//这里commit 提交mutations, dispatch 提交 actions 后面是参数|  意思是默认false
    }
  },
}
</script>

<style scoped>
/* 二维码先是在-800px  运用translateY 2d动画 向下移动800px 回到0 0 位置 */
.code {
  width: 100%;
  height: 100vh;
  background-color: #949494;
  position: absolute;
  top: -800px;
  left: 0;
  transform: translateZ(0);
  opacity: 0;
  z-index: 1002;
  overflow: auto;
  transition: all 0.3s ease;
}
.showcode {
  transform: translateY(800px);
  opacity: 1;
}
.header img {
  width: 20px;
  height: 20px;
  margin: 10px 0 0 10px;
}
.abdomen {
  padding-top: 10vh;
  transform: translateX(6%)
}
.abdomen img {
  width: 88vw;
  height: 40vh;
}
.footer {
  display: flex;
  text-align: center;
  border-top: 1px solid #ffffff;
  margin-top: 30vh;
}
.payment {
  flex: 1;
}
.payment p {
  font-size: 14px;
  line-height: 0;
  color: #fff;
}
.payment_img img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
</style>
