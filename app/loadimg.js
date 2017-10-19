//Vue 自定义指令
export default (Vue , options = {})=>{
    
            let left = 0;
            let right = 0;
            let page = 1;

            const addListener = (ele,binding) =>{

                let e = ele;
                let data = [
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1607/27/e98acbaa7a06.jpg_444x296q80.jpg",
                    },
                    {
                        "imgurl":"http://i4.cctcdn.cn/up/i/1605/06/f138804663c7.jpg",
                    },
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1607/28/a038f4ed1518.jpg",
                    }, 
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1612/14/6acda2c454c1.jpg",
                    },
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1604/14/2ceb5c0c6ded.jpg_444x296q80.jpg",
                    }, 
                    {
                        "imgurl":"http://i4.cctcdn.cn/up/i/1604/13/f291ddb704b4ea8f98429d20a7ad3e2e.jpg_444x296q80.jpg",
                    },
                    {
                        "imgurl":"http://i4.cctcdn.cn/up/i/1607/27/7d88f8c8ca33.jpg",
                    },
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1612/14/6acda2c454c1.jpg",
                    },
                    {
                        "imgurl":"http://i3.cctcdn.cn/up/i/1612/14/6acda2c454c1.jpg",
                    }
                ];

                let li_w = window.innerWidth*0.98*0.48;
                showData(e,data,li_w);
                // 滑动加载更多事件
                window.onscroll = function(event){
                    let body_h = document.body.offsetHeight;
                    let w_h = window.innerHeight;
                    let scrT = document.documentElement.scrollTop;

                    if(body_h == w_h*1 + scrT*1){
                        showData(e,data,li_w)
                    }
                }

            }

            function showData(eel,data,li_w){
                
                let showData = data;

                for(let i = 0; i < showData.length; i++){
                    
                    let li = document.createElement("li"),
                        img = new Image();
                    
                        img.src = showData[i].imgurl;
                        img.onload = function(){

                            li.appendChild(img);
                            eel.appendChild(li);
                            let num = img.width/li_w;
                            //li.setAttribute("class","showanim")

                            if(left <= right){
                                li.setAttribute("style","left:0;top:"+(left*1+5)+"px");
                                left += img.height/num*1+5;
                            }else{
                                li.setAttribute("style","left:50%;top:"+(right*1+5)+"px");
                                right += img.height/num*1+5;
                            }

                            eel.setAttribute("style","height:"+(left >= right ? left : right)+"px");
                            
                        }    

                }
            }

            Vue.directive('loadimg',{
              inserted:addListener,
              updated:addListener
            })
          }