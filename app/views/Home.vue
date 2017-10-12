
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <div class="home">   
                <!-- <swipe class="my-swipe">
                    <swipe-item v-for="item in bannerList" :key="item.$index">
                        <router-link :to="{ name: 'detail', params: { id: item.id }}"><img v-bind:src="item.imgUrl" ></router-link>
                    </swipe-item>
                </swipe>      -->
                <div class="animate-box2" id="movebox">
                    <div v-for="item in itemArr" :key="item.$inex" v-move="item"></div>
                </div>
            </div>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<style>
    .home{
        padding-top: 3rem;
    }
    .animate-box2 {
        position: relative;
        width: 20rem;
        height: 20rem;
        margin: 0 auto;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-20deg) rotateY(0deg);
        transform: rotateX(-20deg) rotateY(0deg);
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-perspective: 10rem;
        perspective: 20rem;
    }
    .animate-box2 div {
        position: absolute;
        top: 0;
        left: 0;
        width: 8rem;
        height: 8rem;
        opacity: .9;
        background-size: 100% auto;
        transition: all 1s ease-in-out;
        will-change:transform;
        -webkit-transform-origin: 10rem 10rem 0;
        transform-origin: 10rem 10rem 0;
        border: 5px solid darksalmon;
    }
</style>

<script>

    require('../css/home.css')

    var homeData = {
            
            itemArr : []
            
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
                
                _this.itemArr = data.data.newBanner;
                
            },function(data){

                console.log(data);
            })
        }

    }

</script>