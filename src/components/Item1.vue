<template>
	<el-table
	    :data="tableData"
	    stripe
	    style="width: 100%">
	    <el-table-column
	      prop="name"
	      label="姓名"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="age"
	      label="年龄"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="address"
	      label="地址">
	    </el-table-column>
	  </el-table>
</template>

<script>
	export default {
		data(){
			return {
				tableData: []
			}
		},
		created(){
			this.axios.get('http://localhost:9001/api/getList')
			.then(res => {
				this.tableData = res;
				console.log(res);
			})
		}
		
	}
</script>

<style>
</style>