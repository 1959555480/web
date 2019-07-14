import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/index'
import DetailsIndex from '../components/pages/details/detailsIndex'
import analysisPage from '../components/pages/details/analysis'
import countPage from '../components/pages/details/count'
import forecastPage from '../components/pages/details/forecast'
import publishPage from '../components/pages/details/publish'

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
      redirect: 'details/count',
      children:[
        {
          path: 'analysis',//数据分析
          component: analysisPage
        },
        {
          path: 'count',//数据统计
          component: countPage
        },
        {
          path: 'forecast',//数据预测
          component: forecastPage
        },
        {
          path: 'publish',//广告发布
          component: publishPage
        }
      ]
    },
  ]
})
