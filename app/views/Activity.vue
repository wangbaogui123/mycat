
<template>

    <div class="box">

        <!-- <div class="animate-box">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div> -->

        <div class="animate-box2">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div>

    </div> 
    


</template>
<style>
    .animate-box {
        position: relative;
        width: 100%;
        height:100%;
        margin-top: 10rem;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-33.5deg) rotateY(45deg);
        transform: rotateX(-33.5deg) rotateY(45deg);
    }
    .animate-box div {
        position: absolute;
        top: 0;
        left: 0;
        width: 5rem;
        height: 5rem;
        opacity: .5;
    }
    .animate-box .one {
        background: blue;
        -webkit-transform: rotateX(0deg) rotateY(-30deg) translate3d(-2.6rem,-13.3rem,18.4rem);
        transform: rotateX(0deg) rotateY(-30deg) translate3d(-2.6rem,-13.3rem,18.4rem);
    }
    .animate-box .two {
        background: red;
        -webkit-transform: rotateX(0deg) rotateY(-30deg) translate3d(2.4rem,-0.4rem,5rem);
        transform: rotateX(0deg) rotateY(-30deg) translate3d(2.4rem,-0.4rem,5rem);
    }
    .animate-box .three {
        background: orange;
        -webkit-transform: rotateX(0deg) rotateY(60deg) translate3d(-2rem,-0.2rem,5rem);
        transform: rotateX(0deg) rotateY(60deg) translate3d(-2rem,-0.2rem,5rem);
    }
    .animate-box .four {
        background: greenyellow;
        -webkit-transform: rotateX(90deg) rotateY(60deg) translate3d(-2rem,0,0);
        transform: rotateX(0deg) rotateY(60deg) translate3d(-2rem,0,0);
    }
    .animate-box .five {
        background: yellow;
        -webkit-transform: rotateX(90deg) rotateY(60deg) translate3d(-2rem,0,0);
        transform: rotateX(0deg) rotateY(60deg) translate3d(-2rem,0,0);
    }
    .animate-box .six {
        background: darkmagenta;
        -webkit-transform: rotateX(90deg) rotateY(60deg) translate3d(-2rem,0,0);
        transform: rotateX(0deg) rotateY(60deg) translate3d(-2rem,0,0);
    }


    .animate-box2{
        position: relative;
        width: 10rem;
        height:10rem;
        margin: 0 auto;
        margin-top: 10rem;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-33.5deg) rotateY(45deg);
        transform: rotateX(-33.5deg) rotateY(45deg);
        -webkit-perspective-origin: 50% 50%;
        perspective-origin: 50% 50%;
        -webkit-perspective: 10rem;
        perspective: 10rem;

    }
    .animate-box2 div {
        position: absolute;
        top: 0;
        left: 0;
        width: 5rem;
        height: 5rem;
        opacity: .5;
    }
    .animate-box2 .one {
        background: blue;
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg) translateZ(5rem);
    }
    .animate-box2 .two {
        background: red;
        -webkit-transform: rotateY(60deg);
        transform: rotateY(60deg) translateZ(5rem);
    }
    .animate-box2 .three {
        background: orange;
        -webkit-transform: rotateY(120deg);
        transform: rotateY(120deg) translateZ(5rem);
    }
    .animate-box2 .four {
        background: greenyellow;
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg) translateZ(5rem);
    }
    .animate-box2 .five {
        background: yellow;
        -webkit-transform: rotateY(240deg);
        transform: rotateY(240deg) translateZ(5rem);
    }
    .animate-box2 .six {
        background: darkmagenta;
        -webkit-transform: rotateY(300deg);
        transform: rotateY(300deg) translateZ(5rem);
    }
    
</style>

<script>


    require('../css/home.css');

    var homeData = {
            
            data:{
                user:{},
                images:[]
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