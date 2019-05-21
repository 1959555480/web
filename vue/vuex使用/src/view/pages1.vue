<template>
    <div class="class">
        <h4>父组件</h4>
        <p>父组件渲染的数据{{ parentMsg }}</p>
        <input type="" v-model = "parentMsg">

        <!-- 子组件内容 -->
        <tochild v-bind:my-message="parentMsg"></tochild>
    </div>
</template>

<script>
import Tochild from '../components/secondcomponent.vue'
export default {
    data(){
        return {
            parentMsg: ""
        }
    },
    components:{//挂载
        tochild: Tochild
    }
}
</script>
<style scoped>
</style>