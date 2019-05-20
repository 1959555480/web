<template>
    <div class="class">
        <ul>
            <li>
                <div class="tou">
                    <img src="../assets/tou.jpg" alt="">
                </div>
                <div class="middle">
                    <span>懒人投票系统客服</span>
                    <p>181******1140</p>
                </div>
                <div class="rank">1</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.class{
    padding: 3% 0 0 0;
    font-size: 16px;
    height: 100%;
    background-color: #cc3333;
}
li{
    list-style: none;
    position: relative;
    width: 90%;
    height: 1rem;
    background-color: #ff6666;
    margin: 0 auto;
    border-radius: 50px;
    margin-bottom: 2%;
}
li .tou{
    position: absolute;
    left: 1%;
    top: 0;
    width: .95rem;
    height: .95rem;
    border-radius: .95rem;
    overflow: hidden;
}
li .tou img{
    display: block;
    width: 100%;
}
.middle{
    text-align: left;
    position: absolute;
    padding-top: .1rem;  
    left: 20%;
    top: 0;
    width: 60%;
    height: 96%;
}
p{
    color: #ffcc33;
}
.rank{
    text-align: center;
    line-height: .85rem;
    width: .85rem;
    height: .85rem;
    border-radius: .85rem;
    background-color: red;
    position: absolute;
    right: 5%;
    top: 5%;
}
</style>