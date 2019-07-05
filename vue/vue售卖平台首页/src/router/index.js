import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/index'
import DetailsIndex from '../components/pages/details/detailsIndex'
import foreastPage from '../components/pages/details/foreast'
// import indexPage from '../components/pages/details/sell'
import countPage from '../components/pages/details/count'
import analysePage from '../components/pages/details/analyse'
import newsPage from '../components/pages/details/news'

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
      redirect: '/details/count',
      children:[
        {
          path: 'foreast',
          component: foreastPage
        },
        {
          path: 'count',
          component: countPage
        },
        {
          path: 'analyse',
          component: analysePage
        },{
          path: 'news',
          component: newsPage
        }
      ]
    },
  ]
})
