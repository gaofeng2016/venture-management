import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import ProjectManager from 'pages/ProjectManager'
import ProjectList from 'pages/ProjectList'
import LimitManager from 'pages/LimitManager'
import LimitList from 'pages/LimitList'
import LimitDetail from 'pages/LimitDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/readme',
      component: resolve => require(['../components/Home.vue'], resolve),
      children:[
        { path: '/',
          redirect: '/project'
        },
        {
          path: '/project',
          component: ProjectManager
        },
        {
          path:'/projectList',
          component:ProjectList
        },
        {
          path: '/limit',
          component: LimitManager,
        },
        {
          path:'/limitList',
          component:LimitList
        },
        {
          path:'/limitDetail/:id',
          component: LimitDetail
        },
        /*{
          path: '/drag',
          component: resolve => require(['../pages/DragList.vue'], resolve)    // 拖拽列表组件
        }*/
      ]
    },
  ]
})
