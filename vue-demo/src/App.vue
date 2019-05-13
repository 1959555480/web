<template>
  <div id="app">
    <HeaderCompontent></HeaderCompontent>
    <router-view/>
    <FootComponent></FootComponent>
  </div>
</template>

<script>
import HeaderCompontent from './components/header.vue'
import FootComponent from './components/footer.vue'
export default{
    data(){
        return{
            msg:'Hello vue',
        }
    },
    components:{
        HeaderCompontent,
        FootComponent
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.col4{
  width: 25%;
}
</style>
