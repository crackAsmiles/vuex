<template>
	<el-container>
		<el-aside width="200px" class='asideCti'>
	    	<left></left>
	    </el-aside>
	     <el-container>
	     	<el-header class='top'>
		  		<top></top>
		  	</el-header>
	      	<el-main>
	      		<router-view/>
	      	</el-main>
	      	<el-footer>
			  	<foot></foot>
			</el-footer>
	    </el-container>
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
	.asideCti{
	    min-height: 100vh;
	    background-color: rgb(84, 92, 100);
	    color: #fff;
		height: 100%;
		background-color: rgb(84, 92, 100);
	}
	.el-main{
		background: #F5F7FA;
		padding: 10px 20px;
	}
	/*.bg_phone{
		background-image: url(../../public/image/true.png);
		background-size:cover ;
	}*/
	/*.el-message-box{
		background: transparent;
		background-image: url(../../public/image/true.png);
		background-size:cover ;
	}*/
</style>