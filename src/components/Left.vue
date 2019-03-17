<template>
	<div>
		<div class="jiazheng">家政老司机</div>
			<el-menu :default-active="returnState()" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
				<div v-for='(item,index) in menuList'>
					
					<el-submenu :key='index' :index="item.path" v-if='item.children'>
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.title}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item :index="ite.path" v-for='(ite,ind) in item.children' :key='ind'>{{ite.title}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					
					<el-menu-item :index="item.path" :route='{name:item.path}' :key='index' v-if='!item.children'>
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
					</el-menu-item>
					
				</div>	
		</el-menu>
	</div>
</template>
<script>
	import router from '../router'
	export default {
		data(){
			return {
				menuList:router.options.routes[1].children
			}
		},
		methods: {
			returnState(){
				if(this.$route.matched.length>2){
					return this.$route.path;
				}else{
					return this.$route.path.split("/page/")[1];
				}
			}
		}
		
	}
</script>
<style scoped>
	.leftMenu {
		min-height: 80vh;
		background: #3A3F51;
		height: 100%;
	}
	.el-menu-item{
		color: #fff;
	}
	.el-menu-item:focus, .el-menu-item:hover{
		color: #333;
	}
	.jiazheng{
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #00CCCC;
		color: #fff;
		font-weight: bolder;
	}
</style>