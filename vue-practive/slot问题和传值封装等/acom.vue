<template>
    <div class="class">
        父组件
        <Bcom v-slot:bcom="outMsg">
            <!-- 这里的bcom是从子组件插槽的name名，outMsg是接收到值的集合，下面就是直接调用子组件作用域的data属性，从而不用去子组件中修改，达成封装目的 -->
            {{ outMsg.msg[0].name }}--{{ outMsg.msg[1].name}}
        </Bcom>
    </div>
</template>

<script>
import Bcom from './bcom'
export default{
    components:{
        Bcom
    },
    provide:{
        for: "goodjob",
        of: {
            name: 'yyx',
            age: 18
        }
    },
    data(){
        return{
            demo: 'acom'
        }
    }
}
</script>
<style scoped>
</style>