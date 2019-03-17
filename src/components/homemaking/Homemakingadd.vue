<template>
	<div class='homemaking'>
		<p>用户登陆展示时间：第四天</p>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj">
		   <p>添加内容</p>
		  <el-form-item label="名称">
			<el-input v-model="formInline.name" placeholder="输入名称"></el-input>
		  </el-form-item>
		  <el-form-item>
			<el-button type="primary" @click="onSubmit">添加</el-button>
		  </el-form-item>
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="recommend" label=" "></el-table-column>
			<el-table-column prop="thumbnail" label="缩略图" align='center'>
				<template scope="scope">
		           <div class='imgCtai'>
					   <img :src="scope.row.thumbnail"/>
				   </div>
		       </template>
			</el-table-column>
		    <el-table-column  align='center' prop="name" label="名称"></el-table-column>
		    <el-table-column  align='center' prop="type" label="类型"></el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row)" type="text" size="small">预览</el-button>
		        <el-button @click="handleUpdate(scope.row)" type="text" size="small">修改</el-button>
		        <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
		      </template>
		    </el-table-column>
		 </el-table>
		<el-row class='btn-group'>
		  <el-col :span="12">
			  <el-button>提交</el-button>
		  </el-col>
		  <el-col :span="12">
			  <el-button>设为默认</el-button>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		 data() {
		  return {
		    formInline: {
		      name: ''
		    },
			tableData:  [
				{recommend: '推荐一',thumbnail:require('../../assets/images/03.jpg'),name:'番茄炒蛋', type:'菜品'},
				{recommend: '推荐二',thumbnail:require('../../assets/images/03.jpg'),name:'番茄炒蛋', type:'菜品'},
				{recommend: '推荐三',thumbnail:require('../../assets/images/03.jpg'),name:'番茄炒蛋', type:'菜品'},
				{recommend: '推荐四',thumbnail:require('../../assets/images/03.jpg'),name:'番茄炒蛋', type:'菜品'}
			]
		  }
		},
		methods: {
		  onSubmit() {
		    console.log('submit!');
		  },
		  handleLook(row){
			  console.log(row);
		  },
		  handleUpdate(row){
			  console.log(row);
		  },
		  handleDel(row){
			  console.log(row);
		  }
		  
		}
	}
</script>

<style scoped>
	.addObj {
		width: 100%;
		display:block;
		background: #fff;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.homemaking {
		text-align:left;
	}
	.imgCtai {
		width: 200px;
		height: 100px;
		padding:4px;
		background: #ddd;
		font-size:0px;
		text-align: center;
		border-radius: 6px;
		margin: 0 auto;
	}
	.imgCtai img{
		width : 100%;
		height: 100%;
		display:block;
		margin: 0 auto;
	}
	.btn-group {
		background: #fff;
		text-align: center;
		padding: 20px 0 10px 0;
	}
</style>