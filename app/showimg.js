//Vue 自定义指令
export default (Vue , options = {})=>{
    
            let elearr = [];
    
            const addListener = (ele,binding) =>{
                
                bindEvt(ele,binding);

            }

            function bindEvt (ele,binding){

                var data = binding.value;
                var lis = ele.getElementsByTagName("li");

                for(let i = 0;i < lis.length; i++){
                    lis[i].addEventListener("click",function(){ showMaximg(i) },false);
                }

                // 绑定事件
                // ele.getElementsByTagName("li").addEventListener("click",showMaximg,false);

                // console.log(ele.getElementsByTagName("li"))

                // 点击事件
                function showMaximg(index){
                    
                    // 是否存在
                    
                    var lary = document.createElement("div"),
                        laryul = document.createElement("ul"),
                        laryli = "",
                        ww = window.innerWidth;

                        for(var i = 0;i < data.length; i++){
                            laryli+="<li style='width:"+ww+"px'><img src="+data[i].imgurl+"></li>";
                        }

                        laryul.innerHTML = laryli;

                        laryul.setAttribute("style","width:"+100*data.length+"%");
                        lary.appendChild(laryul);
                        lary.setAttribute("class","lary");
                        document.body.appendChild(lary);
                        
                        // 滑动事件
                        move(lary,laryul,data.length,index);

                    
                }
            }

            function move(par,ul,len,index){
    
                var startX = 0;
                var box = par;
                var ulbox = ul;
                var index = index ? index:0;
                var w = -window.innerWidth;

                ulbox.setAttribute("style","width:"+100*len+"%;transform: translate3d("+(index*w)+"px,0,0);transition: none;");
                
                box.addEventListener("touchstart",toustart,false);
                box.addEventListener("touchmove",toumove,false);
                box.addEventListener("touchend",touend,false);
    
                function toustart(event){
                    event.preventDefault();
                    startX = event.touches[0].pageX;
                }
                function toumove (event){

                    event.preventDefault();
                    var x = (event.touches[0].pageX - startX)*1;
                    ulbox.setAttribute("style","width:"+100*len+"%;transform: translate3d("+(index*w+x)+"px,0,0);transition: none;");
                         
                }
                function touend (event){
                    event.preventDefault();
                    var endx = event.changedTouches[0].pageX; 

                    if(endx - startX > 10){
                        index--;
                        if(index<=0){
                            index = 0;
                        }
                        ulbox.setAttribute("style","width:"+100*len+"%;transform: translate3d("+(index*w)+"px,0,0);transition: all .3s ease-in-out;");
                    }else if(endx - startX < -10){
                        index ++;
                        if(index >= len-1){
                            index = len-1
                        }
                        ulbox.setAttribute("style","width:"+100*len+"%;transform: translate3d("+(index*w)+"px,0,0);transition: all .3s ease-in-out;");
                        
                    }else{
                        if(endx - startX == 0){
                            document.body.removeChild(box);
                        }
                        ulbox.setAttribute("style","width:"+100*len+"%;transform: translate3d("+(index*w)+"px,0,0);transition: all .3s ease-in-out;");
                    }
                }
            }
            
            Vue.directive('maximg',{
              inserted:addListener,
              updated:addListener
            })
          }