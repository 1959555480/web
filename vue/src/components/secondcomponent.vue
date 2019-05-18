<template>
    <div class="class">
        <h4>子组件</h4>
        <p>这个来自父组件的数据：{{ myMessage }}</p>
    </div>
</template>

<script>
export default{
    name: 'child',
    data(){
        return{

        }
    },
    props: [
        'myMessage'
    ]
}
</script>
<style scoped>
</style>