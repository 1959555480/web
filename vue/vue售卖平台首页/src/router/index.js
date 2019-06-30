import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 试图渲染到上一级的router-view
      path: '/',
      component: IndexPage
    }
  ]
})
