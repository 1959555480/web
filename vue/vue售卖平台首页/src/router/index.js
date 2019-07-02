import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/index'
import DetailsIndex from '../components/pages/details/detailsIndex'
import sellPage from '../components/pages/details/sell'
import indexPage from '../components/pages/details/sell'
import productPage from '../components/pages/details/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 试图渲染到上一级的router-view
      path: '/',
      component: IndexPage
    },
    {
      path: '/details',
      component: DetailsIndex,
      children:[
        {
          path: 'sell',
          component: sellPage
        },
        {
          path: 'product',
          component: productPage
        }
      ]
    },
  ]
})
