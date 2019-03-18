import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Page from './views/Page'
import Notfound from './views/Notfound'
import Item1 from './components/Item1'
import Item2 from './components/Item2'
import Item3 from './components/Item3'

import Home from './components/home/Home'

import Usermanage from './components/userManage/Usermanage'
import Usermanagelist from './components/userManage/Usermanagelist'
import Usermanagedetail from './components/userManage/Usermanagedetail'


import Technical from './components/technical/Technical'

import Homemaking from './components/homemaking/Homemaking'
import Homemakinglist from './components/homemaking/Homemakinglist'
import Homemakingdetail from './components/homemaking/Homemakingdetail'
import Homemakingadd from './components/homemaking/Homemakingadd'

import Helpcenter from './components/helpcenter/Helpcenter'

import Versionman from './components/versionman/Versionman'

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
    	path: '/page',
    	component: Page,
		redirect:'/page/home',
    	children:[
      	{
      		path: 'home',
      		name: 'home',
      		title:'主页',
      		icon:'el-icon-location',
      		component: Home
      	},
      	{
      		path: '/page/usermanage',
      		name: 'usermanage',
      		title:'用户管理',
      		icon:'el-icon-document',
      		component: Usermanage,
      		children: [
      			{
      				path: '/page/usermanage',
		      		name: 'usermanagelist',
		      		title:'用户管理列表',
		      		icon:'el-icon-document',
		      		component: Usermanagelist
      			},
      			{
      				path: '/page/usermanage/usermanagedetail',
		      		name: 'usermanagedetail',
		      		title:'用户管理详情',
		      		icon:'el-icon-document',
		      		component: Usermanagedetail
      			}
      		]
      	},
      	{
      		path: 'technical',
      		name: 'technical',
      		title:'技能库',
      		icon:'el-icon-menu',
      		component: Technical
      	},
      	{
      		path: 'homemaking',
      		name: 'homemaking',
      		title:'家政事推荐',
      		icon:'el-icon-location',
      		component: Homemaking,
      		children: [
      			{
      				path: '/page/homemaking',
		      		name: 'homemakinglist',
		      		title:'推荐列表',
		      		icon:'el-icon-location',
		      		component: Homemakinglist,
      			},
      			{
      				path: '/page/homemaking/homemakingdetail',
		      		name: 'homemakingdetail',
		      		title:'推荐详情',
		      		icon:'el-icon-location',
		      		component: Homemakingdetail,
      			},
      			{
      				path: '/page/homemaking/homemakingadd',
		      		name: 'homemakingadd',
		      		title:'添加推荐',
		      		icon:'el-icon-location',
		      		component: Homemakingadd,
      			}
      		]
      	},
      	{
      		path: 'helpcenter',
      		name: 'helpcenter',
      		title:'帮助中心',
      		icon:'el-icon-menu',
      		component: Helpcenter
      	},
      	{
      		path: 'versionman',
      		name: 'versionman',
      		title:'版本管理',
      		icon:'el-icon-location',
      		component: Versionman
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
