<template>
	<div class='homeContai'>
		<p class="homemakAdd">
			<a @click="toAddStudy">添加学习时间</a>
		</p>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="day" label="学习时间">
		    	<template scope='scope'>
		    		<span>第 {{scope.row.day}} 天</span>
		    	</template>
		    </el-table-column>
			<el-table-column prop="recommend_detail" label="推荐内容" >
				<template scope="scope">
					<div v-for="(item,index) in scope.row.recommend_detail" :accesskey="item">
						<p class="contentSty"  @click="openImgView(item)">{{item.title}}</p>
					</div>
               </template>
			</el-table-column>
		    <el-table-column  align='center' prop="status" label="推荐状态">
		    	<template scope='scope'>
		    		<span>{{ scope.row.status?'推荐中':'未推荐'}}</span>
		    	</template>
		    </el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row.day)" type="text" size="small">修改</el-button>
		        <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
		      </template>
		    </el-table-column>
		 </el-table>
		 
		 <el-pagination
		  :page-size="20"
		  :pager-count="5"
		  layout="prev, pager, next"
		  :total="tableTotal">
		</el-pagination>
		
		<el-dialog :visible.sync="dialogVisible" width="30%">
		  <div style="text-align: left;">	
        		<p class="dialogOp">{{ dialog.title }}</p>
				<div class="imgCtai">
					<img v-if='isimg' style='width:100%' :src="dialog.pic"/>
					<video v-if='!isimg' style='width:100%' :src="dialog.pic" controls="controls"></video>
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
	function getList(_this){
    	_this.axios.get('/api/laosiji/web/recommend/list?page='+_this.page+'&per_page='+_this.pageNum)
    	.then(res => {
    		console.log(res);
    		_this.tableTotal = res.data.total;
    		_this.tableData = res.data.items;
    		
    	})
    	.catch(err => {
    		_this.$alert(err,'',{});
    	})
	}
	export default {
		methods: {
			toAddStudy(){
				var day = this.tableData[this.tableData.length-1]?this.tableData[this.tableData.length-1].day+1:1;
				this.$router.push({
					name:'homemakingadd',
					params: {
						id:day
					}
				});
			},
		    handleLook(day) {
		        this.$router.push({
		        	name:'homemakingdetail',
		        	params:{id:day}
		        });
		    },
	        handleDel(row) {
	        	console.log(row);
	         	this.$confirm('您确定要删除吗?', '提示信息', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          return;         
		        });
	      	},
	      	openImgView(pam) {
	      		this.dialogVisible = true;
	      		console.log(pam)
		        if(pam.pic.indexOf(".mp4") ==-1){
		        	this.isimg = true;
		        }else{
		        	this.isimg = false;
		        }
		        this.dialog = pam;
		    },
		    
	    },
		 data() {
	      return {
	      	dialogVisible:false,
	      	isimg: true,
	      	tableTotal:0,
	      	page:1,
	      	pageNum:5,
	      	dialog: {},
	        tableData: []
	      }
	    },
	    created(){
	    	getList(this);
	    }
	}
</script>

<style scoped>
	p {
		margin: 0;
		padding: 0;
		text-align: right;
		width: 100%;
		color:#7299FE;
		display: block;
		margin-bottom: 10px;
	}
	p>a{
		cursor: pointer;
	}
	.el-pagination{
		background: #fff;
		margin-top: 10px;
	}
	.contentSty{
		text-align: left;
		text-indent: 20px;
		cursor: pointer;
	}
	
	.dialogOp{
		margin: 10px 0;
		text-align: left;
		color:#333;
	}
	.imgCtai {
		background: #CCCCCC;
		padding: 4px;
		border-radius:6px;
		font-size: 0;
		width: 90%;
		margin: 20px auto;
	}
	.imgCtai img{
		width: 100%;
	}
	.textCtai {
		margin: 10px 0;
	}
	
</style>