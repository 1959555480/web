<template>
  <div class="">
      <div>
          <el-row>
              <!-- 订单 -->
              <el-col :span='7'>
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%">
                            <el-table-column prop="goodsName" label="商品"></el-table-column>
                            <el-table-column prop="count" label="量"></el-table-column>
                            <el-table-column prop="price" label="金额"></el-table-column>
                            <el-table-column width="100" fixed="right" label="操作">
                                <template slot-scope="scope"><!--这里取到当前单元格-->
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">添加</el-button>
                                    <el-button type="text" size="small" @click="delSingleGoods(goods)">删除</el-button>
                                    <!-- <span>{{scope.$index}}</span> 直接取到该单元格值-->
                                </template>                                  
                            </el-table-column>
                        </el-table>
                        <div class="totalDiv">
                            <small>数量：</small>
                            <strong>{{totalCount}}</strong>
                            <small>总计：</small>
                            <strong>{{totalMoney}}</strong>
                        </div>
                        <el-button type="warning">挂单</el-button>
                        <el-button type="danger" @click="">删除</el-button>
                        <el-button type="success">结账</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                    挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                    外卖
                    </el-tab-pane>
                </el-tabs>
              </el-col>
              <!-- 商品展示 -->
              <el-col :span='17'>
                  <div class="often-goods">
                      <div class="title">
                          常用商品
                      </div>
                      <div class="often-goods-list">
                          <ul>
                              <li v-for="item in oftenGoods" @click="addOrderList(item)">
                                  <span>{{item.goodsName}}</span>
                                  <span class="o-price">￥{{item.price}}元</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <ul class='cookList' v-for="item in type0Goods">
                                <li>
                                    <span class="foodImg"><img src="../../assets/logo.png" width="100%"></span>
                                    <span class="foodName">{{item.goodsname}}</span>
                                    <span class="foodPrice">￥{{item.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                        小食
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                        饮料
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                        套餐
                        </el-tab-pane>
                    </el-tabs>
                  </div>
                  
              </el-col>
          </el-row>
      </div>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data(){
        return{
            tableData: [],
            oftenGoods:[],
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
            totalMoney: 0, //订单总价格
            totalCount: 0  //订单商品总数量
      }
    },
    created(){
        axios.get('https://www.easy-mock.com/mock/5d15ba601bcf1f3cd6c4d7b9/example/a/u/user#!method=get')
        .then(res=>{
            // console.log(res);
            this.oftenGoods=res.data;
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误');
        })
        axios.get('https://www.easy-mock.com/mock/5d15ba601bcf1f3cd6c4d7b9/example/a/u/user#!method=get')
        .then(res=>{
            console.log(res);
            this.type0Goods = res.data;
            // this.type1Goods = res.data[1];
            // this.type2Goods = res.data[2];
            // this.type3Goods = res.data[3];
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误');
        })
    },
    methods:{
        // 添加订单列表
        addOrderList(goods){
            this.totalCount = 0;
            this.totalMoney = 0;
            let isHave = false;
            // 判断是否存在这个商品在订单中
            for(let i = 0; i<this.tableData.length;i++){
                // console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true;//存在
                }
            }
            // 根据isHave判断订单列表是否已有该商品
            if(isHave){
                // 存在就数量添加
                let arr = this.tableData.filter(o=>o.goodsId==goods.goodsId);
                arr[0].count++;
            }else{
                // 不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
                this.tableData.push(newGoods);
            }
            // 汇总数量价格
            this.tableData.forEach(element=>{
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);
            })
        },
        // 删除单个商品
        delSingleGoods(goods){
            this.tableData = this.tableData.filter(o=>o.goodsId!=goods.goodsId)
        }
    }
}
</script>
<style scoped>
.pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
}
/*底部按钮*/
.div-btn {
    margin-top: 10px;
    float: right;
    margin-right: 30px;
    /*border: 1px solid;*/
}
.title {
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    background-color: #f9fafc;
    padding: 10px;
    text-align: left;
}
.often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #e5e5e5;
    padding: 10px;
    margin: 10px;
    background-color: white;
}
.o-price {
    color: #58b7ff;
}
.goods-type {
    margin-left: 5px;
    clear: both;
}
.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
}
.cookList li span {
    display: block;
    float: left;
}
.foodImg {
    width: 40%;
}
.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
    height: 39px;
    width: 55%;
    line-height: 39px;
    text-align: center;
}
.foodPrice {
    font-size: 18px;
    padding-left: 10px;
    padding-top: 10px;
    /*float: right;*/
    /*display: inline;*/
}
.addFood {
    margin-left: 10px;
    height: 100%;
    width: 17%;
    /*background-color: chartreuse;*/
}
.totalDiv {
    height: auot;
    overflow: hidden;
    text-align: right;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px;
}
</style>