import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/content/login.vue'
import index from '../components/content/index.vue'
import dept from '../components/content/dept.vue'
import emp from '../components/content/emp.vue'
Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children:[{
      path: 'dept',
      name: 'dept',
      component: dept,
    },{
      path: 'emp',
      name: 'emp',
      component: emp,
    }]
  }
  
  
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next();
  const uname = window.sessionStorage.getItem("uname");
  if(!uname) return next('/login');
  return next();
  
})
export default router
