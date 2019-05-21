<template>
    <div class="class">
        <img src="../assets/logo.png">
        <br>
        {{ this.$store.state.count }}
        
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg: "superY"
        }
    }
}
</script>
<style scoped>
</style>