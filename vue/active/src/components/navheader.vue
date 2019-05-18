<!-- The ref attr used to find the swiper instance -->
<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/tou1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/tou1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/tou1.jpg" alt="">
        </div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper';
  export default {
    name: 'carrousel',
    data() {
      return {
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true,//环形
        autoplay:{
        delay: 500,//轮播时间间隔
        disableOnInteraction:false,//用户操作不停止轮播
      },
      })  
    }
  }
</script>
<style>
.swiper-container{
  height: 169px;
  line-height: 100px;
  background-color: skyblue;
}
.swiper-slide img{
  display: block;
  height: 100%;
  margin: 0 auto;
}

</style>
