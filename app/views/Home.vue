
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <div class="home">   
                <swipe class="my-swipe">
                    <swipe-item v-for="item in bannerList" :key="item.$index">
                        <router-link :to="{ name: 'detail', params: { id: item.id }}"><img v-bind:src="item.imgUrl" ></router-link>
                    </swipe-item>
                </swipe>     
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>

<script>

    require('../css/home.css')

    var homeData = {
            
            bannerList : []
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
            var _this = this;
            var $this = this.$parent;

            $this.com_Ajax({
                method: 'get',
				url: './app/data/list.json'
            },function(data){
                
                _this.bannerList = data.data.banner;
                
            },function(data){

                console.log(data);
            })
        }

    }

</script>