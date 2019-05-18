import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Rule from '@/view/rule'
import prize from '@/view/prize'
import Connect from '@/view/connect'
import Forward from '@/view/forward'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    }
  ]
})
