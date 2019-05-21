<template>
    <div class="class">首页
        <button v-on:click = "loadMore">点击</button>
        <div>
            <ul>
                <li v-for = "(item,index) in listArr">
                    <a href="https://github.com/allan2coder/VUE2-SPA-Tutorial">{{index}} 《{{item.name}}》</a>
                </li>
                    
            </ul>
        </div>
        <div class="loading" v-if="loading">
          Loading...
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            loading: false,
            listArr: [],
        }
    },
    created(){
        this.loadList();
    },
    methods:{
        loadList: function(){
            console.log("初始化数据开始");
            var _this = this;
            _this.loading = true;
            axios.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery',{
                params:{

                }
            })
            .then(function(response){//请求成功返回的response
                _this.loading = false;
                _this.listArr = response.data.items;
                console.log(_this.listArr,'加载完成')
            })
            .catch(function(error){//请求失败
                console.log(error);
            });
        },
        loadMore: function(){
            console.log('load more');
            var _this = this;
            _this.loading = true;
            axios.get('https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery',{
                params: {

                }
            })
            .then(function(response){
                _this.loading = false;
                _this.listArr = _this.listArr.concat(response.data.items);
                console.log(_this.listArr);
            })
        }
    }
}
</script>
<style scoped>
  button{
    display: block;
    margin: 0 auto;
    line-height: 30px;
    border: 1px solid #ddd;
    color: #41b883;
  }
  a{
    color: #35495e;
    font-size: 16px;
  }
  ul{
    margin-bottom: 60px;
  }
  li{
    line-height: 32px;
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
  }
  b{
    font-size: 12px;
    color: #35495e;
  }
  .loading{
    text-align: center;
  }
</style>