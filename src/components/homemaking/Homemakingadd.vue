<template>
	<div class='homemaking'>
		<p>用户登陆展示时间：第{{ titleDay }}天</p>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj" @submit.native.prevent>
		  <el-form-item label="关键词:">
			<el-input v-model="formInline.name" placeholder="名称" @keyup.enter.native="onSubmit"></el-input>
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
							<p>名称：{{ item.obj.title }}</p>
							<p>类型：{{ typetran[item.type] }}</p>
						</el-col>
						<el-col :span='12'>
							<div class="imgCtai">
								<img :src="defaultImg+item.obj.poster" alt="">
							</div>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span='12'>
							<el-button type='primary' @click='openImgView(item.obj)'>预览</el-button>
						</el-col>
						<el-col :span='12'>
							<el-button type='primary' @click='handleAdd(item.obj)'>添加</el-button>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		
		<el-dialog :visible.sync="dialogVisible" width="30%">
		  <div style="text-align: left;">	
        		<p class="dialogOp">{{ dialog.title }}</p>
				<div class="imgCtais">
					<img style='width:100%' :src="defaultImg+dialog.poster"/>
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
		  	defaultImg: 'http://zp.boringkiller.cn',
		    formInline: {
		      name: ''
		    },
		    dialogVisible:false,
	      	isimg: true,
	      	total:0,
			tableData:  [],
			dialog:{},
			titleDay: 1,
			typetran: {
				obj: 'OBJ',
				work: "精选家务事",
				notice: "精选家庭要求",
				recipe: "精选菜品"
			}
		  }
		},
		methods: {
		  	onSubmit() {
		    	console.log('submit!');
		    	var param = {};
		    	param.keyword = this.formInline.name;
		    	this.axios.post('/api/laosiji/web/search',param)
		    	.then(res => {
		    		console.log(res)
		    		this.tableData = res.data.items;
		    		this.total = res.data.total;
		    	})
		    	.catch(err => {
		    		console.log(err)
		    	})
		  	},
		  	openImgView(index) {
		  		this.dialog = index;
	      		this.dialogVisible = true;
		   	},
		  	handleAdd(index){
			  	console.log(index);
			  	var params = {};
			  	params.day = this.titleDay;
			  	this.axios.post('/api/laosiji/web/create/recommend',params)
			  	.then(res => {
			  		this.$confirm('前往推荐列表查看?', '添加成功', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'success'
			        }).then(() => {
			          this.$router.push('/page/homemaking');
			        }).catch(() => {
			          return;         
			        });
			  	})
			  	.catch(err => {
			  		console.log(err)
			  	})
			  	
		  	}
		  
		},
		created(){
			this.axios.get('/api/laosiji/web/recommend/list')
	    	.then(res => {
	    		this.titleDay = res.data.total+1;
	    	})
	    	.catch(err => {
	    		this.$alert(err,'',{});
	    	})
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
		padding-top: 10px;
		padding-right: 20px;
		font-weight: 600;
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