<template>
    <div class="thirdComponent">
      <button v-on:click="increment">{{ counter }}</button>
    </div>
</template>

<script>
export default{
    name: 'button-counter',
    data(){
        return{
            counter: 0
        }
    },
    methods: {
        increment: function(){
            this.counter +=1
            this.$emit('increment')
        }
    }
}
</script>
<style scoped>
</style>