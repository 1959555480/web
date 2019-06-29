import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/pages/pos'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'pos',
		component: pos
	}
]

var router = new Router ({
	routes
})
export default router;