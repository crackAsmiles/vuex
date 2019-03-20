<template>
	<div class='homemaking'>
		<p class="homemakingDate">用户登陆展示时间：第{{ titleDay }}天</p>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj">
		   <p>添加内容</p>
		   
		  <el-form-item label="名称">
			<el-input v-model="formInline.name" placeholder="输入名称"></el-input>
		  </el-form-item>
		  
		  <el-form-item label="推荐种类">
				<el-select v-model="chooseKind" placeholder="种类">
				  <el-option label="OBJ" value="obj"></el-option>
				  <el-option label="精选菜品" value="recipe"></el-option>
				  <el-option label="精选家庭工作" value="notice"></el-option>
				  <el-option label="精选家庭事务" value="work"></el-option>
				</el-select>
		  </el-form-item>
		  
		  <el-form-item>
			<div class="uploadCti">
			  	<el-upload
				  class="upload-demo upObj"
				  ref="upload"
				  action=""
				  :on-change='changeImg'
				  :auto-upload="false">
				  <el-button slot="trigger" type="success">选择图片</el-button>
				</el-upload>
				<img :src="uploadImg" alt="" />
			</div>
			
		  </el-form-item>
		  
		  <el-form-item>
			<el-button type="primary" @click="sureAdd">确认添加</el-button>
		  </el-form-item>
		  
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="title" label="推荐">
		    	<template slot-scope="scope">
		    		<span>推荐{{ scope.row.recommend_num}}</span>
		    	</template>
		    </el-table-column>
			<el-table-column prop="pic" label="缩略图" align='center'>
				<template scope="scope">
		           <div class='imgCtai'>
					   <img :src="scope.row.pic"/>
				   </div>
		       </template>
			</el-table-column>
		    <el-table-column  align='center' prop="title" label="名称"></el-table-column>
		    <el-table-column  align='center' prop="old_id" label="类型">
		    	<template scope='scope'>
		    		<span>{{typetran[scope.row.kind]}}</span>
		    	</template>
		    </el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="openImgView(scope.row)" type="text">预览</el-button>
		        <el-popover
				  placement="right"
				  trigger="click">
				  <el-form  :inline="true"  class="demo-form-inline adPadding">
					  <el-form-item label="名称">
						<el-input v-model="scope.row.title" placeholder="输入名称"></el-input>
					  </el-form-item>
					  <el-form-item label="推荐种类">
						<el-select v-model="scope.row.kind" placeholder="种类">
						  <el-option label="OBJ" value="obj"></el-option>
						  <el-option label="精选菜品" value="recipe"></el-option>
						  <el-option label="精选家庭工作" value="notice"></el-option>
						  <el-option label="精选家庭事务" value="work"></el-option>
						</el-select>
				  	</el-form-item>
					  <el-form-item>
					   	<div class="uploadCti">
						  	<el-upload
							  class="upload-demo upObj"
							  ref="upload"
							  action=""
							  :on-change='changeImgs'
							  :auto-upload="false">
							  <el-button slot="trigger" type="success">选择图片</el-button>
							</el-upload>
							<img :src="scope.row.pic" alt="" />
						</div>
					   
					  </el-form-item>
					  <el-form-item>
						<el-button type="primary" @click="onSubmit(scope.row)">确定修改</el-button>
					  </el-form-item>
					</el-form>
				  <el-button slot="reference" type="text">修改</el-button>
				</el-popover>
		        <el-button @click="handleDel(scope.row)" type="text">删除</el-button>
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
        		<p class="dialogOp">{{ dialog.title }}</p>
				<div class="imgCtais">
					<img v-if='isimg' style='width:100%' :src="dialog.pic" />
					<video v-if='!isimg' style='width:100%' src="dialog.pic" controls="controls"></video>
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
	// 获取数据
	function getDetail(_this){
		_this.axios.get('/api/laosiji/web/recommend/detail?day='+_this.titleDay)
		.then(res => {
			_this.tableData = res.data;
		})
		.catch(err => {
			console.log(err)
		})
	}
	// 添加推荐
	function addRem(_this){
		var param = {};
		param['day'] = _this.titleDay;
		param['recommend_num'] = _this.tableData[_this.tableData.length-1].recommend_num+1;
		param['kind'] = _this.chooseKind;
		param['pic'] = _this.uploadImg;
		param['title'] = _this.formInline.name;
		param['old_id'] = _this.titleDay;
		console.log(param)
		_this.axios.post('/api/laosiji/web/create/recommend/detail',param)
		.then(res => {
			_this.$confirm('添加成功！')
	          .then(_ => {
	            getDetail(_this)
	          })
	          .catch(_ => {});
		})
		.catch(err => {
			console.log(err);
		})
	}
	
	// 修改推荐
	function updateRem(_this,obj){
		console.log(obj)
		var param = {};
		param['day'] = _this.titleDay;
		param['recommend_num'] = obj.recommend_num;
		param['kind'] = obj.kind;
		param['pic'] = obj.pic;
		param['title'] = obj.title;
		param['old_id'] = obj.old_id;
		console.log(param)
		_this.axios.put('/api/laosiji/web/update/recommend/detail',param)
		.then(res => {
			console.log(res);
			_this.$confirm('修改成功！')
	          .then(_ => {
	            getDetail(_this)
	          })
	          .catch(_ => {});
		})
		.catch(err => {
			console.log(err);
		})
	}
	
	
	export default {
		 data() {
		  return {
		  	testImg:require('../../assets/images/touxiang.jpeg'),
		    formInline: {
		      name: ''
		    },
		    formInlines: {
		      name: ''
		    },
		    titleDay:1,
		    dialogVisible:false,
	      	isimg: true,
	      	dialog:{},
			tableData:  [],
			uploadImg:require('../../assets/images/touxiang.jpeg'),
			chooseKind:'',
			typetran: {obj: 'OBJ',work: "精选家务事",notice: "精选家庭要求",recipe: "精选菜品"}
		  }
		},
		methods: {
		  changeImgs(file){
		  	 let reader = new FileReader();  
	        var _this = this;
			 reader.readAsDataURL(file.raw); 
			 reader.onload=function(e) {    
			  var imgFile = e.target.result;
			  _this.testImg = imgFile;
			  
			 }
		  },
		  onSubmit(obj) {
		    updateRem(this,obj);
		  },
		  openImgView(pam) {
	      		this.dialogVisible = true;
	      		this.dialog = pam;
		        if(pam.pic.indexOf(".mp4") ==-1){
		        	this.isimg = true;
		        }else{
		        	this.isimg = false;
		        }
		        this.dialog = pam;
		    },
		  	handleDel(row){
			  console.log(row);
			  this.$confirm('确认删除？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
		  },
		  sureAdd(){
		  	addRem(this);
		  },
	      changeImg(file){
	        let reader = new FileReader();  
	        var _this = this;
			 reader.readAsDataURL(file.raw); 
			 reader.onload=function(e) {    
			  var imgFile = e.target.result;
			  _this.uploadImg = imgFile;
			  
			 }
	      }
		},
		created(){
			var day = this.$route.params.id?this.$route.params.id:1;
			this.titleDay = day;
			getDetail(this);
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
	.el-button--text {
		margin-right: 15px;
	}
	.uploadCti{
		width: 150px;
		height: 100px;
		position: relative;
	}
	.uploadCti .upObj {
		width: 100%;
		height: 100%;
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
	}
	.uploadCti img{
		width: 100%;
		height: 100%;
	}
	.el-upload{
	    width: 150px;
    	height: 100px;
	}
	.adPadding{
		padding-top: 58px;
	}
</style>