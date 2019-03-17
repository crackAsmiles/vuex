<template>
	<div class='homemaking'>
		<p>用户登陆展示时间：第四天</p>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj">
		  <el-form-item label="关键词:">
			<el-input v-model="formInline.name" placeholder="名称"></el-input>
		  </el-form-item>
		  <el-form-item>
			<el-button type="primary" @click="onSubmit">搜索</el-button>
		  </el-form-item>
		</el-form>
		
		<el-row>
			<el-col :span='8' class='itemCti' v-for='(item,index) in tableData' :key=''>
				<div>
					<el-row>
						<el-col :span='12'>
							<p>名称：{{ item.name }}</p>
							<p>类型：{{ item.type }}</p>
						</el-col>
						<el-col :span='12'>
							<div class="imgCtai">
								<img :src="item.thumbnail" alt="">
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span='12'>
							<el-button type='primary' @click='handleLook(index)'>预览</el-button>
						</el-col>
						<el-col :span='12'>
							<el-button type='primary' @click='handleAdd(index)'>添加</el-button>
						</el-col>
					</el-row>
				</div>
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
		  handleLook(index){
			  console.log(index);
		  },
		  handleAdd(index){
			  console.log(index);
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
		background: #fff;
	}
	.homemaking>p {
		text-align: right;
		line-height: 30px;
		margin: 0;
	}
	.imgCtai {
		width: 150px;
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
	.itemCti{
		margin: 10px 0;
		padding: 10px;
		box-sizing: border-box;
	}
	.itemCti>div {
		border: 1px solid #CCCCCC;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 6px;
	}
	.itemCti .el-row {
		margin: 10px 0;
		text-align: center;
	}
</style>