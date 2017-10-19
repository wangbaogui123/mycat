
<template>

    <div>
        <div class="box">
            <ul class="showimgbox" v-maximg="itemArr">
                <li v-for="item in itemArr" :key="item.$inex">
                    <img :src="item.imgurl" alt="">
                </li>
            </ul>
        </div>
    </div> 
    


</template>

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