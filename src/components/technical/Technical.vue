<template>
	<div class='homeContai'>
		<el-form  :inline="true" :model="formInline" class="demo-form-inline addObj">
		  
		  <el-form-item label="一级文章类别:">
				<el-select v-model="formInline.first">
				  <el-option label="一级文章1" value="一级文章1"></el-option>
				  <el-option label="一级文章2" value="一级文章2"></el-option>
				  <el-option label="一级文章2" value="一级文章2"></el-option>
				</el-select>
		  </el-form-item>
		  
		  <el-form-item label="二级文章类别:">
				<el-select v-model="formInline.second">
				  <el-option label="二级文章1" value="二级文章1"></el-option>
				  <el-option label="二级文章2" value="二级文章2"></el-option>
				  <el-option label="二级文章2" value="二级文章2"></el-option>
				</el-select>
		  </el-form-item>
		  
		  <el-form-item label="类型">
			<el-select v-model="formInline.type" placeholder="全部">
			  <el-option label="类型一" value="类型一"></el-option>
			  <el-option label="类型二" value="类型二"></el-option>
			  <el-option label="类型三" value="类型三"></el-option>
			</el-select>
		  </el-form-item>
		  
		  <el-form-item label="课程标题:">
			<el-input v-model='formInline.name' placeholder='输入课程标题'></el-input>
		  </el-form-item>
		  
		  <el-form-item>
			<el-button type="primary" @click="onSubmit">搜索</el-button>
		  </el-form-item>
		  
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column align='center' fixed prop="title" label="文章标题"></el-table-column>
		    <el-table-column align='center' fixed prop="first" label="文章一级分类"></el-table-column>
			<el-table-column align='center' fixed prop="second" label="文章二级分类"></el-table-column>
			<el-table-column align='center' fixed prop="type" label="类型"></el-table-column>
			<el-table-column align='center' fixed prop="helpPeo" label="帮助人数"></el-table-column>
			<el-table-column align='center' fixed prop="nohelpPeo" label="没帮助人数"></el-table-column>
		    <el-table-column align='center' label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleLook(scope.row)" type="text" size="small">详情</el-button>
		      </template>
		    </el-table-column>
		 </el-table>
		 
	</div>	
</template>

<script>
	export default {
		methods: {
	      handleLook(row) {
				console.log(row);
	      },
		  onSubmit(){
			  console.log('查询');
		  }
	    },
		 data() {
	      return {
			 formInline: {
				first: '',second: '',type: '',name: ''
			},
	        tableData: [{
	        	title: '卫生间清洁',
	        	first: '家务事',
	        	second: '卫生清洁',
				type: '文章',
				helpPeo: 50,
				nohelpPeo: 100
	        },
			{
				title: '卫生间清洁',
				first: '卫生清洁',
				second: '家务事',
				type: '文章',
				helpPeo: 20,
				nohelpPeo: 100
			},{
	        	title: '卫生间清洁',
	        	first: '卫生清洁',
	        	second: '家务事',
				type: '文章',
				helpPeo:20,
				nohelpPeo: 100
	        },{
	        	title: '卫生间清洁',
	        	first: '卫生清洁',
	        	second: '家务事',
				type: '文章',
				helpPeo: 2,
				nohelpPeo: 100
	        }
	        ]
	      }
	    }
	}
</script>

<style scoped>
	.addObj{
		background:#fff;
		padding-top:10px;
	}
		
</style>