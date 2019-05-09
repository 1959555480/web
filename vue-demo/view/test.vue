<template>
    <div class="test">
        {{ msg }}<br>
        this is id: {{ $route.params.testId }}<br>
        this is name: {{ $route.params.testName }}<br>
        <!-- 嵌套路由 -->
        <router-view></router-view>
        <router-link to="/test/first">FIRST</router-link><br>
        <router-link to="/test/second">SECOND</router-link>
        <!-- 编程式路由 -->
        <div v-on:click = "gogood">
            跳转
        </div>
        <router-link v-bind:to = "{ name: 'good' }">用命名方式跳转</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: "my superY"
        }    
    },
    methods: {
        gogood(){
            //带返回值的路由的两种方式
            this.$router.push({
                path: '/good?goodId=666'
            });
            // this.$router.push({ 
            //     path: 'good',
            //     query: {
            //         goodId: '666'
            //     }
            // })
            
        }
    }

}
</script>
<style scoped>

</style>


