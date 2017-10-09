
<template>

    <div>
        <my-top :top-show="topshow"></my-top>

        <div class="box">
            <div class="datail-top">来自-我的萌宠推荐 铲屎官:<a target="_blank" :href="data.user.weiboUrl">{{data.user.nickname}}</a></div>
            <div class="detail-home">  
                <p>{{data.title}}</p>
                <ul class="img-list">
                    <li v-for="item in data.images" :key="item.$index"><img v-lazyload="item" alt=""></li>
                </ul>
            </div>
            
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<style>
    .datail-top{
        margin: .3rem 0;
        box-shadow: 0px 0px 1px #ccc;
        height: 2rem;
        line-height: 2rem;
        font-size: .7rem;
        text-align: left;
        text-indent: 1rem;
        background: rgba(245, 144, 168, 0.5);
        color: #333;
    }
    .datail-top a{
        color: #fa7ca3;
    }
    .detail-home{
        color: #333;
    }
    .detail-home p{
        margin-top: 1rem;
    }
    .img-list{
        padding: 1rem 0;
    }
    .img-list li{
        margin: 0.5rem 0;
    }
    .img-list li img{
        display: block;
        width: 80%;
        margin-left: 10%;
        height: auto;
        box-shadow: 1px 3px 5px #ccc;
    }
</style>

<script>


    require('../css/home.css');

    var homeData = {
            
            data:{
                user:{}
            }
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
            var _this = this;
            var $this = this.$parent;
            var id = _this.$route.params.id;
            $this.com_Ajax({

                method: 'get',
                url: './app/data/hotList.json'
                
            },function(data){

                var data = data.data;                
                for(var i = 0; i < data.length; i++){

                    if(data[i].id == id){
                        _this.data = data[i];
                        return ;
                    }
                }
                
            },function(data){

                console.log(data);
            })
        }

    }

</script>