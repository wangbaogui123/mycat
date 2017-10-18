
<template>

    <div>
        <my-top :top-show="topshow"></my-top>
    
        <div class="box">
            <ul class="showimgbox" v-maximg="itemArr">
                <li v-for="item in itemArr" :key="item.$inex">
                    <img :src="item.imgurl" alt="">
                </li>
            </ul>
        </div>

        <my-footer></my-footer>
    </div> 
    


</template>
<style>
    .showimgbox{
        width: 100%;
        height: 5rem;
    }
    .showimgbox li{
        float: left;
        width: 20%;
        height: 100%;
        margin: 0 1rem;
    }
    .showimgbox li img{
        display: block;
        width: 100%;
        height: auto;
    }
    .lary{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: rgba(0, 0, 0, 0.6);
        overflow: hidden;
    }
    .lary ul{
        transform: translate3d(0,0,0);
        height: 100%;
    }
    .lary ul li{
        float: left;
    }
    .lary ul li img{
        margin-top: 30%;
        display: block;
        width: 100%;
    }
</style>

<script>

    var homeData = {
            
            itemArr : [{"imgurl":"http://i1.cctcdn.cn/up/i/1607/27/8c8eeffb9a02.jpg_448x299q80.jpg"},{"imgurl":"http://i1.cctcdn.cn/up/i/1607/27/8c8eeffb9a02.jpg_448x299q80.jpg"},{"imgurl":"http://i1.cctcdn.cn/up/i/1607/27/8c8eeffb9a02.jpg_448x299q80.jpg"}]
            
        }

    export default {
        name:"app",
        data:function(){
            return homeData
        },
        created:function(){
            var _this = this;
            var $this = this.$parent;

            
        }

    }

</script>