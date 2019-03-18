<template>
	<div class='homeContai'>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj">
		  
		  <el-form-item label="注册时间">
				<el-select v-model="formInline.start" placeholder="开始时间">
				  <el-option label="2019-3-11" value="2019-3-11"></el-option>
				  <el-option label="2019-3-12" value="2019-3-12"></el-option>
				</el-select>
		  </el-form-item>
		  
		  <el-form-item label="——">
			<el-select v-model="formInline.end" placeholder="结束时间">
			  <el-option label="2019-3-11" value="2019-3-11"></el-option>
			  <el-option label="2019-3-12" value="2019-3-12"></el-option>
			</el-select>
		  </el-form-item>
		  
		  <el-form-item>
			<el-button type="primary" @click="onSubmit">查询</el-button>
		  </el-form-item>
		  
		  <p class="total">共：1234条数据</p>
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="id" label="用户ID"></el-table-column>
		    <el-table-column align='center' fixed prop="username" label="用户昵称"></el-table-column>
			<el-table-column align='center' fixed prop="reDate" label="注册时间"></el-table-column>
			<el-table-column align='center' fixed prop="recently" label="最近登陆时间"></el-table-column>
			<el-table-column align='center' fixed prop="collect" label="收藏课程"></el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row)" type="text" size="small">详情</el-button>
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
	        this.$router.push('/page/usermanage/usermanagedetail')
	      },
		  onSubmit(){
			  console.log('查询')
		  }
	    },
		 data() {
	      return {
			 formInline: {
				 start: '',
				 end: ''
			},
	        tableData: [{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
	        },
			{
				id: '0100',
				username: '凡夫俗子',
				reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
			},{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect:'20'
	        },{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
	        },{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
	        },{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
	        },{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
	        },{
	        	id: '0100',
	        	username: '凡夫俗子',
	        	reDate: '2019-3-11',
				recently: '2019-3-11 12:30',
				collect: '20'
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
	.total {
		padding-right:10px;
		padding-bottom: 10px;
		box-sizing: border-box;
	}
	.el-pagination{
		background: #fff;
		margin-top: 10px;
	}
	.contentSty{
		text-align: left;
		text-indent: 20px;
	}
	.addObj{
		background:#fff;
		padding-top:10px;
	}
		
</style>