<template>
	<div class='homemaking'>
		<p class="homemakingDate">用户登陆展示时间：第一天</p>
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
		        <el-button @click="openImgView(scope.row)" type="text" size="small">预览</el-button>
		        <el-popover
				  placement="right"
				  trigger="click">
				  <el-form  :inline="true" :model="formInlines" class="demo-form-inline">
					  <el-form-item label="名称">
						<el-input v-model="formInlines.name" placeholder="输入名称"></el-input>
					  </el-form-item>
					  <el-form-item>
						<el-button type="primary" @click="onSubmit">添加</el-button>
					  </el-form-item>
					</el-form>
				  <el-button slot="reference" type="text" size="small">修改</el-button>
				</el-popover>
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
		
		<el-dialog :visible.sync="dialogVisible" width="30%">
		  <div style="text-align: left;">	
        		<p class="dialogOp">鸡蛋牛奶</p>
				<div class="imgCtais">
					<img v-if='isimg' style='width:100%' src="../../assets/images/03.jpg"/>
					<video v-if='!isimg' style='width:100%' src="../../../public/vedio/vedio.mp4" controls="controls"></video>
				</div>
				<p class="dialogOp">牛奶和鸡蛋最好不要通吃。</p>
				<div>
					庄家指出，牛奶加鸡蛋的早餐并不科学，蛋白质难以提供能量。现在有超过90%的孩子早上
					只吃牛奶加鸡蛋，粮食长期在早餐中缺位，这其实对于孩子的生长发育并不好
				</div>
				<div>
					庄家指出，牛奶加鸡蛋的早餐并不科学，蛋白质难以提供能量。现在有超过90%的孩子早上
					只吃牛奶加鸡蛋，粮食长期在早餐中缺位，这其实对于孩子的生长发育并不好
				</div>
			</div>
		</el-dialog>
		
		
	</div>
</template>

<script>
	export default {
		 data() {
		  return {
		    formInline: {
		      name: ''
		    },
		    formInlines: {
		      name: ''
		    },
		    dialogVisible:false,
	      	isimg: true,
			tableData:  [
				{recommend: '推荐一',thumbnail:require('../../assets/images/03.jpg'),name:'清洁卫生间', type:'OBj'},
				{recommend: '推荐二',thumbnail:require('../../assets/images/03.jpg'),name:'清洁厨房', type:'家务事'},
				{recommend: '推荐三',thumbnail:require('../../assets/images/03.jpg'),name:'清洁卧室', type:'菜品'},
				{recommend: '推荐四',thumbnail:require('../../assets/images/03.jpg'),name:'清洁客厅', type:'家务事'}
			]
		  }
		},
		methods: {
		  onSubmit() {
		    console.log('submit!');
		  },
		  openImgView(index) {
	      		this.dialogVisible = true;
//		        if(index%2 == 0){
//		        	this.isimg = true;
//		        }else{
//		        	this.isimg = false;
//		        }
		    },
		  	handleDel(row){
			  console.log(row);
			  this.$confirm('确认删除？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
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
	.addObj>p{
		padding-top: 10px;
	}
	.homemaking {
		text-align:left;
	}
	.homemakingDate {
		font-weight: 600;
		text-indent: 10px;
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
	.dialogOp{
		margin: 10px 0;
		text-align: left;
		color:#333;
	}
	.imgCtais {
		background: #CCCCCC;
		padding: 4px;
		border-radius:6px;
		font-size: 0;
		width: 90%;
		margin: 20px auto;
	}
	.imgCtais img{
		width: 100%;
	}
	.textCtai {
		margin: 10px 0;
	}
</style>