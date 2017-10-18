export default () => {

  // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

  // 1. 定义（路由）组件。
  // 可以从其他文件 import 进来
  const home = () => import("./views/Home.vue");
  const one = () => import("./views/One.vue");
  const detail = () => import("./views/Detail.vue");
  const activity = () => import("./views/Activity.vue");  
  const showimages = () => import("./views/Showimage.vue");

  // 2. 定义路由
  // 每个路由应该映射一个组件。 其中"component" 可以是
  // 通过 Vue.extend() 创建的组件构造器，
  // 或者，只是一个组件配置对象。
  // 我们晚点再讨论嵌套路由。
  const routes = [
    { path: '/', component: home },
    { path: '/one', component: one },
    { path: '/detail/:id',name:"detail", component:detail},
    { path: '/activity/:id',name:"activity", component:activity},
    { path: '/showimg',name:"showimg", component:showimages}
  ]

  return routes;
  
}