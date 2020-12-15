<template>
    <div class="class">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress><br>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress><br>
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress><br>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
</template>

<script>
export default {
}
</script>
<style scoped>
</style>