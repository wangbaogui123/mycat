
<template>

    <div class="box">

        <div class="animate-box2" id="movebox">
            <div v-for="item in itemArr" :key="item.$inex" v-move="item"></div>
        </div>

    </div> 
    


</template>
<style>
    


    .animate-box2{
        position: relative;
        width: 20rem;
        height:10rem;
        margin: 0 auto;
        margin-top: 10rem;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-33.5deg) rotateY(45deg);
        transform: rotateX(-33.5deg) rotateY(45deg);
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-perspective: 10rem;
        perspective: 23rem;

    }
    .animate-box2 div {
        position: absolute;
        top: 0;
        left: 0;
        width: 6rem;
        height: 6rem;
        opacity: .9;
        background-size: 100% auto;
        transition: all .5s ease-in-out;
    }
    
</style>

<script>


    require('../css/home.css');

    var homeData = {
            
            data:{
                user:{},
                images:[],
                x:0,
                itemArr:[]
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

            _this.itemArr = [
                    {"pot":0,"img":"app/img/cat/1/img1.jpg"},
                    {"pot":60,"img":"app/img/cat/1/img2.jpg"},
                    {"pot":120,"img":"app/img/cat/1/img3.jpg"},
                    {"pot":180,"img":"app/img/cat/1/img4.jpg"},
                    {"pot":240,"img":"app/img/cat/1/img5.jpg"},
                    {"pot":300,"img":"app/img/cat/1/img6.jpg"}
                ]
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

           
        },
        mounted:function(){
            // 滑动事件
            // this.eleBind();
        },
        methods:{
            eleBind:function(){

                var _this = this;
                var box = document.getElementById("movebox");

                box.addEventListener("touchmove",move,false);
                box.addEventListener("touchend",moveend,false);

                function move (event){
                    event.preventDefault();
                    var x = event.touches[0].pageX;
                         
                }
                function moveend (event){
                    event.preventDefault();
                    var endx = event.changedTouches[0].pageX;
                    
                }
            }
        }

    }

</script>