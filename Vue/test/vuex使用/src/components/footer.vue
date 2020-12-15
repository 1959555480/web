<template>
    <footer class="fixed-bottom cleaFix iconfont">
        <div class="col4">
            <router-link to = "/index">
                <div>&#xe606;</div>
                <div>首页</div>
            </router-link>
        </div>
        <div class="col4">
            <router-link to = "/news">
                <div>&#xe698;</div>
                <div>新闻</div>
            </router-link>
        </div>
        <div class="col4">
            <router-link to = "/pages1">
                <div>&#xe615;</div>
                <div>页面1</div>
            </router-link>
        </div>
        <div class="col4">
            <router-link to = "/pages2">
                <div>&#xe611;</div>
                <div>个人</div>
            </router-link>
        </div>
    </footer>
</template>

<script>
export default{
    data(){
        return{
        }
    },
}
</script>
<style scoped>
.fixed-bottom {
        position: fixed;
        background: #fff;
        width: 100%;
        bottom: 0;
        z-index: 99;
        border-top: 1px solid #ccc;
        text-align: center;
        font-size: 16px;
        
    }
    .fixed-bottom div {
        display: inline-block;
        float: left;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .fixed-bottom div div{
        flex: 1;
    }
    .fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: skyblue;
        line-height: 50px;
    }
</style>