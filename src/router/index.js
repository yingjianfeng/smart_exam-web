import Vue from 'vue'
import VueRouter from 'vue-router'

const Form = () => import('views/student/form/Form');
const FormLogin = () => import('views/student/form/childComps/LoginView');
const FormRegister = () => import('views/student/form/childComps/Register');

const Index = () => import('views/student/index/Index');
const IndexDynamic = () => import('views/student/index/childComps/main/dynamic/Dynamic');
const IndexTesk = () => import('views/student/index/childComps/main/tesk/Tesk');


const QuestionsItems = () => import('views/student/questions/childComps/Items');

const Discussion = () => import('views/student/discussion/Discussion');
const Questions = () => import('views/student/questions/Questions');
const Study = () => import('views/student/study/Study');


Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: resolve => (require(["views/student/form/childComps/LoginView"], resolve)),
  },
  {
    path: '/form',
    component: resolve => (require(["views/student/form/Form"], resolve)),
    children: [
      {
        path: 'login',
        component: resolve => (require(["views/student/form/childComps/LoginView"], resolve)),
      },
      {
        path: 'register',
        component: resolve => (require(["views/student/form/childComps/Register"], resolve)),
      }
    ]
  },
  {
    path: '/index',
    component: resolve => (require(["views/student/index/Index"], resolve)),
    children: [
      {
        path: 'dynamic',
        component: resolve => (require(["views/student/index/childComps/main/dynamic/Dynamic"], resolve)),
      },
      {
        path: 'tesk',
        component: resolve => (require(["views/student/index/childComps/main/tesk/Tesk"], resolve)),
      },
      {
        path: 'history',
        component: resolve => (require(["views/student/index/childComps/main/history/History"], resolve)),
      }
    ]
  },
  
  {
    path: '/questions',
    component: resolve => (require(["views/student/questions/Questions"], resolve)),
    children: [
      {
        path: 'items',
        component: resolve => (require(["views/student/questions/childComps/Items"], resolve)),
      },
      {
        path: 'test',
        component: resolve => (require(["views/student/questions/childComps/Test"], resolve))
      }
    
    ]
  },
  {
    path: '/study',
    component: resolve => (require(["views/student/study/Study"], resolve))
  },
  {
    path: '/discussione',
    component: resolve => (require(["views/student/discussion/Discussion"], resolve)),
    children: [
      {
        path: 'show',
        component: resolve => (require(["views/student/discussion/childComps/ShowView"], resolve)),
      }
    ]
  },
  {
    path: '/information',
    component: resolve => (require(["views/student/information/Information"], resolve))
  },
  {
    path: '/teacher/index',
    component: resolve => (require(["views/teacher/index/Index"], resolve)),
    children: [
      {
        path: 'data',
        component: resolve => (require(["views/teacher/index/childComps/data/Data"], resolve)),
      },
      {
        path: 'questionall',
        component: resolve => (require(["views/teacher/index/childComps/question/All"], resolve)),
      },
      {
        path: 'questioninsert',
        component: resolve => (require(["views/teacher/index/childComps/question/Insert"], resolve)),
      },
      {
        path: 'student',
        component: resolve => (require(["views/teacher/index/childComps/student/Student"], resolve)),
      },
      {
        path: 'questionDetail',
        component: resolve => (require(["views/teacher/index/childComps/student/QuestionDetail"], resolve)),
      },
      {
        path: 'publish',
        component: resolve => (require(["views/teacher/index/childComps/article/PublishView"], resolve)),
      },
      {
        path: 'show',
        component: resolve => (require(["views/teacher/index/childComps/article/ShowView"], resolve)),
      },{
        path: 'analyze',
        component: resolve => (require(["views/teacher/index/childComps/question/Analyze"], resolve)),
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  // mode: 'history',
  // base:"/vue"
});
router.beforeEach((to,from,next)=>{
  if(to.path=='/form/login'||to.path=='/form/register'){
    next();
  }else if(localStorage.getItem("Authorization")!=null){
    next();
  }else{
    next({path:'/form/login'});
  }
  
});

export default router
