//Vue 图片懒加载
export default (Vue , options = {})=>{

        let elearr = [];

        const addListener = (ele,binding) =>{
            
            ele.setAttribute("style","-webkit-transform: rotateY("+binding.value.pot+"deg);transform: rotateY("+binding.value.pot+"deg) translateZ(0rem);background:url("+binding.value.img+") no-repeat;background-size: 100% auto;")
            elearr.push({"ele":ele,"pot":binding.value.pot,"img":binding.value.img});
            
            elearr.length == 6 ? move() : "";
    
        }
        function move(){

            var _this = this;
            var startX = 0;
            var box = document.getElementById("movebox");

            
            box.addEventListener("touchstart",toustart,false);
            box.addEventListener("touchmove",toumove,false);
            box.addEventListener("touchend",touend,false);

            function toustart(event){
                event.preventDefault();
                startX = event.touches[0].pageX;
            }
            function toumove (event){
                event.preventDefault();
                var x = event.touches[0].pageX - startX;
                if(x%10) return ;
                for(let i = 0;i < elearr.length; i++){
                    elearr[i].ele.setAttribute("style","-webkit-transform: rotateY("+(elearr[i].pot+10*(x/10))+"deg);transform: rotateY("+(elearr[i].pot+10*(x/10))+"deg) translateZ(0rem);background:url("+elearr[i].img+") no-repeat;background-size: 100% auto;");
                    elearr[i].pot = elearr[i].pot+10*(x/10);
                }
                startX = event.touches[0].pageX;
                     
            }
            function touend (event){
                event.preventDefault();
                var endx = event.changedTouches[0].pageX; 
                startX = endx;
            }
        }
        
        Vue.directive('move',{
          inserted:addListener,
          updated:addListener
        })
      }