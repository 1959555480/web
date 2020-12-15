<template>
  <div id="app">
    <!-- 头部轮播图 -->
    <headerComponent></headerComponent>
    <router-view/>
  </div>
</template>

<script>
import Navheader from '@/components/navheader'//全局使用
export default {
  data(){
    return {}
  },
  components:{
    headerComponent: Navheader,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
}
</style>
