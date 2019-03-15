<template>
	<div>
		<div class="jiazheng">家政老司机</div>
		<!--<el-menu default-active="1" class="el-menu-vertical-demo leftMenu" router>
		  	<el-menu-item index="1" :route='{name:item.path}' v-for='item in menuList' :key='item.path'>
		    	<template slot="title">
			      	<i :class="item.icon"></i>
			      	<span slot="title">{{ item.title }}</span>
		    	</template>
		    	<el-menu-item-group>
	          <template slot="title">分组一</template>
	          <el-menu-item index="1-1">选项1</el-menu-item>
	          <el-menu-item index="1-2">选项2</el-menu-item>
	        </el-menu-item-group>
		  	</el-menu-item>
		</el-menu>-->
		<el-menu default-active="1"
      			class="el-menu-vertical-demo"
      			background-color="#545c64"
      			text-color="#fff"
      			active-text-color="#ffd04b" router>
      			
      		<el-submenu  v-for='(item,index) in menuList' :key='item.path' :index="index+''" v-if='item.children'>
        		<template slot="title">
          			<i :class="item.icon"></i>
          			<span>{{item.title}}</span>
        		</template>
	        	<el-menu-item-group>
	          		<el-menu-item :index="ite.path" v-for='(ite,ind) in item.children' :key='ite.path'>{{ite.title}}</el-menu-item>
	        	</el-menu-item-group>
      		</el-submenu>
      		
      		<el-menu-item :index="index+''" :route='{name:item.path}' v-for='(item,index) in menuList' :key='item.path' v-if='!item.children'>
		    	<template slot="title">
			      	<i :class="item.icon"></i>
			      	<span slot="title">{{ item.title }}</span>
		    	</template>
		  	</el-menu-item>
      		
      
      
      
      
      
      <!--<el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>-->
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
		created(){
			console.log(this.menuList)
		}
		
	}
</script>
<style scoped>
	.leftMenu {
		height: 80vh;
		background: #3A3F51;
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