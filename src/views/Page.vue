<template>
	<el-container>
	  <el-header class='top'>
	  	<top></top>
	  </el-header>
	  <el-container>
	    <el-aside width="200px">
	    	<left></left>
	    </el-aside>
	    <el-container>
	      <el-main>
	      	<router-view/>
	      </el-main>
	    </el-container>
	  </el-container>
	  <el-footer>
	  	<foot></foot>
	  </el-footer>
	</el-container>
</template>

<script>
	import Top from '../components/Top'
	import Left from '../components/Left'
	import Foot from '../components/Foot'
	export default {
		name:'page',
		components:{
			Top: Top,
			Left: Left,
			Foot: Foot
		}
	}
</script>

<style scoped>
	.el-header,.el-footer{
		padding: 0;
	}
	.top{
		margin-bottom: 10px;
	}
</style>