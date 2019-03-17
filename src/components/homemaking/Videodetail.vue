<template>
	<div class='homeContai'>
		<p class="homemakAdd">
			<a>添加学习时间</a>
		</p>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="date" label="学习时间"></el-table-column>
			<el-table-column prop="content" label="推荐内容" >
				<template scope="scope">
                   <p class="contentSty" v-for="item in scope.row.content" :accesskey="item">{{item}}</p>
               </template>
			</el-table-column>
		    <el-table-column  align='center' prop="status" label="推荐状态"></el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row)" type="text" size="small">查看</el-button>
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
	</div>	
</template>

<script>
	export default {
		methods: {
	      handleLook(row) {
	        console.log(row);
	      },
	      handleDel(row) {
	        console.log(row);
	      }
	    },
		 data() {
	      return {
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
	}
</style>