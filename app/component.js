module.exports = function(Vue){

	let data = {
		page:"我的萌宠"
	}

	let toptpl = require("./tpl/top.html");

	// 注册组件my-top
	Vue.component("my-top",{

		props:{
			topShow:[]
		},
		template: toptpl,
	  	data:function(){
	  		return data;
		},
		methods:{
		  	topFun:function(){  
		  		this.topShow = !this.topShow;
		  	}
		}
	})


	// 注册组件my-footer
	Vue.component("my-footer",{

		template: '<footer class="footer"><p><span style="color:dodgerblue">BJ-</span>cat</p><p> <span style="color:#f590a8"> 合作：</span><span style="color:#f590a8">微博</span>@我的萌宠</p><p style="font-size:.8rem;">2012- <span style="color:hotpink">2018</span></p><p><span style="color:darkturquoise">我的</span> 萌宠 All Rights Reserved</p></footer>'
	})

}