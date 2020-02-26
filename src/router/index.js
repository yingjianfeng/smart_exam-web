import Vue from 'vue'
import VueRouter from 'vue-router'

const Form = () => import('views/student/form/Form')
const FormLogin = () => import('views/student/form/childComps/LoginView')
const FormRegister = () => import('views/student/form/childComps/Register')

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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
