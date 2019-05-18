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
            <li>
                <div class="tou">
                    <img src="../assets/tou.jpg" alt="">
                </div>
                <div class="middle">
                    <span>懒人投票系统客服</span>
                    <p>181******1140</p>
                </div>
                <div class="rank">2</div>
            </li>
            <li>
                <div class="tou">
                    <img src="../assets/tou.jpg" alt="">
                </div>
                <div class="middle">
                    <span>懒人投票系统客服</span>
                    <p>181******1140</p>
                </div>
                <div class="rank">3</div>
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
    background-color: #cc3333;
}
li{
    list-style: none;
    position: relative;
    width: 90%;
    height: 50px;
    background-color: #ff6666;
    margin: 0 auto;
    border-radius: 50px;
    margin-bottom: 2%;
}
li .tou{
    position: absolute;
    left: 1%;
    top: 0;
    width: 16%;
    height: 100%;
    border-radius: 53%;
    overflow: hidden;
}
li .tou img{
    display: block;
    width: 100%;
}
.middle{
    text-align: left;
    position: absolute;
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
    line-height: 211%;
    width: 11%;
    height: 73%;
    border-radius: 20px;
    background-color: red;
    position: absolute;
    right: 5%;
    top: 5%;
}
</style>