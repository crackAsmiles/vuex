<template>
	<div>
		<el-menu default-active="1" class="el-menu-vertical-demo leftMenu" router>
		  	<el-menu-item index="1" route='/page'>
		    	<template slot="title">
			      	<i class="el-icon-location"></i>
			      	<span slot="title">导航一</span>
		    	</template>
		  	</el-menu-item>
			<el-menu-item index="2" route='/page/item2'>
			    <i class="el-icon-menu"></i>
			    <span slot="title">导航二</span>
			</el-menu-item>
		  	<el-menu-item index="3" route='/page/item3'>
		    	<i class="el-icon-document"></i>
		    	<span slot="title">导航三</span>
		  	</el-menu-item>
		</el-menu>
	</div>
</template>
<style scoped>
	.leftMenu {
		height: 80vh;
	}
</style>