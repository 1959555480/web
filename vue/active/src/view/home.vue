<template>
    <div class="wrap">
        <!-- 倒计时 -->
        <div class="time">
            <p>时间还剩</p>
            <count-down 
            v-on:start_callback="countDownS_cb(1)" 
            v-on:end_callback="countDownE_cb(1)" 
            :currentTime="1481450106" 
            :startTime="1540455037" 
            :endTime="1540282237" 
            :tipText="'距离开始文字1'" 
            :tipTextEnd="'距离结束文字1'" 
            :endText="'结束自定义文字2'" 
            :dayTxt="'天'" 
            :hourTxt="'小时'" 
            :minutesTxt="'分钟'" 
            :secondsTxt="'秒'">
            </count-down>
        </div>
        <!-- 人物信息框 -->
        <div class="person">
            <div>
                <div class="tou">
                    <img src="../assets/tou.jpg" >
                </div>
                <div class="middle">
                    <span>无心之过</span>
                    <p>排名：第<span>573位</span></p>
                    <!-- <div class="aa">
                        <img src="../assets/qi.png" alt="">
                    </div> -->
                </div>
                <div></div>
            </div>
        </div>
        <!-- 查看接力 -->
        <div class="connect">
            <p><a href="#">查看谁给我接力</a></p>
        </div>
        <ul v-model = "tabView">
            <li label = "simple1" @click = "toSim(1)">
                <button class="immediately-btn abc" :class="{touchColor:whether}" type="button" value="立即领取" @touchstart="touchstart1()" @touchend="touchend1()">活动规则</button>
            </li>
            <li label = "simple2" @click = "toSim(2)">
                <button >活动奖品</button>
            </li>
            <li label = "simple3" @click = "toSim(3)">
                <button >接力排行</button>
            </li>
            <li label = "simple4" @click = "toSim(4)">
                <button >转发排行</button>
            </li>
        </ul>
        <keep-alive>
            <component :is="tabView"></component>
        </keep-alive>
        <div class="blank">
            <div class="footer"> 
                <a href="#">找朋友助力</a>
            </div>
        </div>
    </div>
</template>

<script>
import CountDown from 'vue2-countdown'
import simple1 from "./rule.vue";
import simple2 from "./prize.vue";
import simple3 from "./connect.vue";
import simple4 from "./forward.vue";
export default{
    data(){
        return{
            tabView: "simple1",
            whether:false
        }
    },
    components:{
        CountDown,
        simple1,
        simple2,
        simple3,
        simple4
    },
    methods:{
        countDownS_cb: function (x){
            console.log(x)
        },
        countDownE_cb: function (x){
            console.log(x)
        },
        toSim(index){
            this.tabView = `simple${index}`;
            console.log("1")
        },
        touchstart1(){
            this.whether = true;
        },
        touchend1(){
            this.whether = false;
        }
    }
}
</script>
<style scoped>
.wrap{
    padding-top: 10px;
    background-color: #f6514b;
    color: #FFF;
    height: 700px;
}
.wrap .time{
    margin: 0 auto;
    background-color: #7c2926;
    width: 80%;
    height: 12%;
    border-radius: 8px;
}
.person{
    margin: 10px auto 0;
    width: 85%;
    background-color: #ffffcc;
    height: 60px;
    border-radius: 60px;
    position: relative;
}
.person .tou{
    position: absolute;
    left: 1%;
    top: 0;
    width: 19%;
    height: 96%;
    border-radius: 53%;
    overflow: hidden;
}
.person .tou img{
    width: 100%;
    display: block;
}
.person .middle{
    text-align: left;
    position: absolute;
    padding-top: 2%;
    left: 24%;
    top: 0;
    width: 60%;
    height: 96%;
    color: black;
}
.aa{
    display: block;
    width: 40px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
}
.aa img{
    display: block;
    width: 100%;
}
.connect{
    margin: 10px auto 0;
    width: 50%;
    color: black;
    background-color: #ffcc00;
    box-shadow: 2px 3px 1px #ffcc00;
}
.connect a{
    display: block;
    padding: 3% 0;
}
ul{
    margin:4%;
    display: flex;
}
li{
    flex: 1;
    list-style-type:none
}
li img{
    width: 100%;
}
li button{
    display: block;
    outline: none;
    background-color: #999999;
    border:0px;
    color: white;
    width: 95%;
    height: 150%;
}
li button .abc{
    background: url(../assets/gift.png);
}
/* 按钮点击颜色 */
.touchColor{
    background-color: #cc3333;
}
.blank{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background-color: #000066;
}
.footer{
    margin: 1% auto;
    width: 28%;
    height: 70%;
    background-color: #cc0066;
}
.blank a{
    width: 100%;
    height: 100%;
    display: block;
    color: #fff;
}

</style>  