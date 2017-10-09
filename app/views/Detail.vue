
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <div class="detail-home">  
                <p>来自-我的萌宠推荐 铲屎官<a href=""></a></p>  
                <p>{{title}}</p>
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<style>
    .detail-home{
        padding: 1rem 0;
        color: #333;
    }
</style>

<script>

    require('../css/home.css');

    var homeData = {
            
            title:"",
            
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
                        _this.title = data[i].title;
                        return ;
                    }
                }
                
            },function(data){

                console.log(data);
            })
        }

    }

</script>