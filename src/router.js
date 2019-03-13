import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Page from './views/Page'
import Notfound from './views/Notfound'
import Item1 from './components/Item1'
import Item2 from './components/Item2'
import Item3 from './components/Item3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
    	path: '/page/',
    	name: 'page',
    	component: Page,
    	children:[
      	{
      		path: '',
      		name: 'item1',
      		component: Item1
      	},
      	{
      		path: 'item2',
      		name: 'item2',
      		component: Item2
      	},
      	{
      		path: 'item3',
      		name: 'item3',
      		component: Item3
      	}
      ]
    },
    {
    	path: '**',
    	name: 'notfound',
    	component: Notfound
    }
  ]
})
