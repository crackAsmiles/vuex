<template>
	<div class='homeContai'>
		<p class="homemakAdd">
			<a @click="toAddStudy">添加学习时间</a>
		</p>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="date" label="学习时间"></el-table-column>
			<el-table-column prop="content" label="推荐内容" >
				<template scope="scope">
					<div v-for="(item,index) in scope.row.content" :accesskey="item">
						<p class="contentSty"  @click="openImgView">{{item}}</p>
					</div>
               </template>
			</el-table-column>
		    <el-table-column  align='center' prop="status" label="推荐状态"></el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row)" type="text" size="small">修改</el-button>
		        <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
		      </template>
		    </el-table-column>
		 </el-table>
		 
		 <el-pagination
		  :page-size="20"
		  :pager-count="11"
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
		
		<el-dialog :visible.sync="dialogVisible" width="30%">
		  <div style="text-align: left;">	
        		<p class="dialogOp">鸡蛋牛奶</p>
				<div class="imgCtai">
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
		methods: {
			toAddStudy(){
				this.$router.push('/page/homemaking/homemakingadd');
			},
		    handleLook(row) {
		        console.log(row);
		        this.$router.push('/page/homemaking/homemakingdetail');
		    },
	        handleDel(row) {
	        	console.log(row);
	         	this.$confirm('确认删除？')
		          .then(_ => {
		            done();
		          })
		          .catch(_ => {});
	      	},
	      	openImgView(index) {
	      		this.dialogVisible = true;
		        if(index%2 == 0){
		        	this.isimg = true;
		        }else{
		        	this.isimg = false;
		        }
		    },
		    
	    },
		 data() {
	      return {
	      	dialogVisible:false,
	      	isimg: true,
	        tableData: [{
	        	date:'第一天',
	        	content: ['1、阿姨上户须知','2、上户礼仪须知','3、日常用品养护须知'],
	        	status:'推荐中'
	        },
	        {
	        	date:'第二天',
	        	content: ['1、阿姨上户须知','2、上户礼仪须知','3、日常用品养护须知'],
	        	status:'推荐中'
	        },
	        {
	        	date:'第三天',
	        	content: ['1、阿姨上户须知','2、上户礼仪须知','3、日常用品养护须知'],
	        	status:'推荐中'
	        },
	        {
	        	date:'第四天',
	        	content: ['1、阿姨上户须知','2、上户礼仪须知','3、日常用品养护须知'],
	        	status:'推荐中'
	        }
	        ]
	      }
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