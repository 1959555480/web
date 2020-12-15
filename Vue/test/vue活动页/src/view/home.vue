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
        <div class="share">
            <ul>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li>
                    <img src="../assets/shoubiao.jpg" alt="">
                </li>
            </ul>
        </div>
        <!-- 人物信息框 -->
        <div class="person">
            <div class="tou">
                <img src="../assets/tou.jpg" >
            </div>
            <div class="middle">
                <span class="name">无心之过</span>
                <p>排名：第<span>573</span>位</p>
                
                
            </div>
            <div class="aa">
                <img src="../assets/pic_y.jpg">
                <div>转发数</div>
                <p>1</p>
            </div>
            <div class="bb">
                <img src="../assets/pic_g.jpg">
                <div>接力值</div>
                <p>1</p>
            </div>
        </div>
        <!-- 查看接力 -->
        <!-- <div class="connect">
            <p><a href="#">查看谁给我接力</a></p>
        </div> -->
        <!-- <ul v-model = "tabView">
            <li label = "simple1" @click = "toSim(1)">
                <button class="" :class="{touchColor:whether}" type="button" value="立即领取" @touchstart="touchstart1()" @touchend="touchend1()">活动规则</button>
            </li>
            <li label = "simple2" @click = "toSim(2)">          
                <button class="" :class="{touchColor:whether}" type="button" value="立即领取" @touchstart="touchstart1()" @touchend="touchend1()">活动规则</button>
            </li>
            <li label = "simple3" @click = "toSim(3)">
                <button class="" :class="{touchColor:whether}" type="button" value="立即领取" @touchstart="touchstart1()" @touchend="touchend1()">活动规则</button>
            </li>
            <li label = "simple4" @click = "toSim(4)">
                <button class="" :class="{touchColor:whether}" type="button" value="立即领取" @touchstart="touchstart1()" @touchend="touchend1()">活动规则</button>
            </li>
        </ul> -->

        <ul class="leve" v-model = "tabView">
            <li class="leve_li"  
            v-for="(item,index) in lists" 
            :class="[idx == index?'active':'']" 
             @click = "toSim(index+1);isActive(index)">{{item}}</li>
        </ul>

        <keep-alive>
            <div :is="tabView"></div>
        </keep-alive>
        <div class="blank">
            <div class="footer"> 
                <a href="#">找朋友助力</a>
            </div>
        </div>
    </div>
</template>

<script>
import CountDown from 'vue2-countdown'//倒计时
import simple1 from "./rule.vue";
import simple2 from "./prize.vue";
import simple3 from "./connect.vue";
import simple4 from "./forward.vue";
export default{
    data(){
        return{
            tabView: "simple1",
            whether: false,
            lists: ['活动规则','活动奖品','接力排行','转发排行'],
            idx:0,//默认选择第一个
            // back:{
            //     backgroundImage: "url(" + require("../assets/laba.png") + ")",
            //     backgroundRepeat:  "no-repeat",
            //     backgroundSize: "25%",
            //     backgroundPosition: "5%,58%"
            // },
            bg: require('../assets/laba.png')
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
        //倒计时
        // countDownS_cb: function (x){
        //     console.log(x)
        // },
        // countDownE_cb: function (x){
        //     console.log(x)
        // },
        toSim(index){
            this.tabView = `simple${index}`;
        },
        // touchstart1(){
        //     this.whether = true;
        // },
        touchend1(){
            this.whether = false;
        },
        isActive(index){
                console.log(index);
                this.idx = index
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
    font-size: .16rem;
}

.wrap .time{
    margin: 0.1rem  auto;
    background-color: #7c2926;
    width: 80%;
    height: 1.4rem;
    border-radius: 8px;
}
/* li:first-child{
    background: url(../assets/laba.png) 0 0 no-repeat;
    background-size: 25%;
    background-color: #cc3333;
    background-position: 5% 58%;
}
li:nth-child(2){
    background: url(../assets/gift.png) 0 0 no-repeat;
    background-size: 25%;
    background-position: 5% 58%;  
} */
.share{
    width: 90%;
    height: 9%;
    margin: 0 auto;
    border-radius: 9px;
    background-color: #663333;
}
.share ul{
    height: 100%;
    padding: 0;
    margin: 0;
}
.share ul li{
    margin-left: 4%;
    margin-top: 3%;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.8rem;
    background-color: #333333;
}
.watch{
    position: absolute;
    right: 0.7rem;
    top: 3.1rem;
    width: 1rem;
}
.watch img{
    width: 100%;
}
.person{
    margin: 10px auto 0;
    width: 85%;
    background-color: #ffffcc;
    height: 1rem;
    border-radius: 60px;
    position: relative;
}
.person .tou{
    position: absolute;
    left: 1%;
    top: 0;
    width: .95rem;
    height: .95rem;
    border-radius: .95rem;
    overflow: hidden;
}
.person .tou img{
    width: 100%;
    display: block;
}
.person .middle{
    font-size: 12px;
    text-align: left;
    position: absolute;
    padding-top: 2%;
    left: 18%;
    top: 0;
    width: 60%;
    color: black;
}
.person .middle .name{
    color: #cc3333;
}
.aa{
    font-size: .09rem;
    display: block;
    width: 0.7rem;
    height: .2rem;
    position: absolute;
    right: 1.7rem;
    top: -0.1rem;
    color: #505050;
}
.aa div{
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    top: .2rem;
}
.aa p{
    text-align: center;
    position: absolute;
    left: 0.2rem;
    top: .6rem;
}
.bb{
    font-size: .09rem;
    display: block;
    color: #FFF;
    width: 0.7rem;
    height: .2rem;
    position: absolute;
    right: 0.9rem;
    top: -0.1rem;
}
.bb div{
    width: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    top: .2rem;
}
.bb p{
    text-align: center;
    position: absolute;
    left: 0.2rem;
    top: .6rem;
}
.bb img{
    display: block;
    width: 100%;
}
.aa img{
    display: block;
    width: 100%;
}
.connect{
    font-size: 14px;
    margin: 10px auto 0;
    width: 50%;
    color: black;
    background-color: #ffcc00;
    box-shadow: .04rem .06rem .02rem #ffcc00;
}
.connect a{
    display: block;
    padding: 3% 0;
}
ul{
    height: 0.7rem;
    line-height: 0.7rem;
    display: flex;
}
li{  
    width: 20%;
    list-style-type: none;
}
li:first-child{
    margin-left: 10%;
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
.active{
    background-color: #cc3333;
}
/* 按钮点击颜色 */
.touchColor{
    background-color: #cc3333;
}
.blank{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1% 0;
    background-color: #000066;
}
.footer{
    font-size: 16px;
    margin: 0 auto;
    width: 28%;
    height: .7rem;
    line-height: .7rem;
    border-radius: 0.1rem;
    
    color: black;
    background-color: #ffff00;
}
.blank a{
    width: 100%;
    display: block;
}

</style>  