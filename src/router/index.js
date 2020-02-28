import Vue from 'vue'
import VueRouter from 'vue-router'

const Form = () => import('views/student/form/Form')
const FormLogin = () => import('views/student/form/childComps/LoginView')
const FormRegister = () => import('views/student/form/childComps/Register')

const Index = () => import('views/student/index/Index')
const IndexDynamic = () => import('views/student/index/childComps/main/dynamic/Dynamic')
const IndexTesk = () => import('views/student/index/childComps/main/tesk/Tesk')


const Discussion = () => import('views/student/discussion/Discussion')
const Questions = () => import('views/student/questions/Questions')
const Study = () => import('views/student/study/Study')

Vue.use(VueRouter)
const routes = [
  {
    path: '/form',
    component: Form,
    children: [
      {
        path: 'login',
        component: FormLogin,
      },
      {
        path: 'register',
        component: FormRegister,
      }
    ]
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'dynamic',
        component: IndexDynamic,
      },
      {
        path: 'tesk',
        component: IndexTesk,
      }
    ]
  },
  {
    path: '/questions',
    component: Questions,
  },
  {
    path: '/study',
    component: Study,
  },
  {
    path: '/discussione',
    component: Discussion,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
