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
import Textdetail from './components/homemaking/Textdetail'
import Videodetail from './components/homemaking/Videodetail'

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
    	path: '/page/',
    	name: 'page',
    	component: Page,
    	children:[
      	{
      		path: ' ',
      		name: 'home',
      		title:'主页',
      		icon:'el-icon-location',
      		component: Home
      	},
      	{
      		path: 'usermanage/',
      		name: 'usermanage',
      		title:'用户管理',
      		icon:'el-icon-document',
      		component: Usermanage,
      		children: [
      			{
      				path: '',
		      		name: 'usermanagelist',
		      		title:'用户管理列表',
		      		icon:'el-icon-document',
		      		component: Usermanagelist
      			},
      			{
      				path: 'usermanagedetail',
		      		name: 'usermanagelist',
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
      				path: '',
		      		name: 'homemakinglist',
		      		title:'家政事推荐列表',
		      		icon:'el-icon-location',
		      		component: Homemakinglist,
      			},
      			{
      				path: 'homemakingdetail',
		      		name: 'homemakingdetail',
		      		title:'推荐详情',
		      		icon:'el-icon-location',
		      		component: Homemakingdetail,
      			},
      			{
      				path: 'homemakingadd',
		      		name: 'homemakingadd',
		      		title:'添加推荐',
		      		icon:'el-icon-location',
		      		component: Homemakingadd,
      			},
      			{
      				path: 'textdetail',
		      		name: 'textdetail',
		      		title:'标题详情(图文)',
		      		icon:'el-icon-location',
		      		component: Textdetail,
      			},
      			{
      				path: 'videodetail',
		      		name: 'videodetail',
		      		title:'标题详情(视频)',
		      		icon:'el-icon-location',
		      		component: Videodetail,
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
