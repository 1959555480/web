
<template>
  <div class="container">

		<!-- 这是父组件内容 -->
    <h4>子组件数据传递给父组件</h4>
	  <p>方式：用自定义事件</p>
	  <p class="text-center parent-tit">这是父组件</p>
		<!-- 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。 -->
		<h2 class="text-center">{{ total }}</h2>


		<!-- 这是子组件内容 -->
		<div class="text-center">
			<p>这是子组件</p>
			<buttonCounter v-on:increment="incrementTotal"></buttonCounter>
		  <buttonCounter v-on:increment="incrementTotal"></buttonCounter>
		</div>

  </div>
</template>

<script>
import buttonCounter from '../components/thirdcomponent.vue'

export default{
    components:{},
    props:{},
    data(){
        return{
            parentMsg: '子组件传递信息给父元素',
            total: 0
        }
    },
    components: {
        buttonCounter
    },
    methods: {
        incrementTotal: function(){
            this.total +=1
        }
    }

}
</script>
<style scoped>
</style>