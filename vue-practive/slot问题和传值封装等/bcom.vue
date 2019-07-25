<template>
    <div class="class">
        <!-- 插槽传值 -->
        <!-- 这里的msg是子组件作用域下的需要传出去给父组件的data，第二个msg是传出去的变量名通过这个变量名来调用子作用域的data,name是插槽的命名 -->
        <slot v-bind:msg="msg" name='bcom'>{{ msg[0].name }}</slot>
    </div>
</template>

<script>
import Ccom from './ccom'
export default{
    components:{
        Ccom
    },
    inject: ['of','for'],
    data(){
        return{
            demo: this.for,
            demo2: this.for,
            msg:[{
                id: 1,
                name: "陈嘉仪"
            },
            {
                id: 2,
                name: "董婷雯"
            }]
        }
    }
}
</script>
<style scoped>
</style>