// import Vue from 'vue'
import routers from './router'
// import axios from 'axios'
// import VueRouter from 'vue-router'
// import canvasone from './canvasone'
// import lazyload from './lazyLoad'
// import move from './move'
// import maximg from './showimg'
// import loadimg from './loadimg'

Vue.prototype.$ajax = axios


require('./component.js')(Vue)

Vue.use(VueRouter);
// Vue.use(canvasone);
// Vue.use(lazyload);
// Vue.use(move);
// Vue.use(maximg);
// Vue.use(loadimg);

const routes = routers();

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})


const app = new Vue({
	
	el:"#app",
	router:router,
	data:{
		currentRoute: window.location.pathname   
	},
	computed:{

	},

	methods:{
		com_Ajax(obj,success,error){
			this.$ajax(obj).then(function(data){

                success(data);
            },function(data){
				
                error(data);
            })
		}
	}


})


window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})





