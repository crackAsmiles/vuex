<template>
	<div class='userDetail'>
		<el-row>
			<!-- <el-col :span="8"><div class="grid-content bg-purple-dark">鬼画符鬼画符给</div></el-col> -->
			<el-col :span="8" :offset="8">
			  <div class="wxImg">
				  <!-- <img class='wxImg' src='../../asserts/images/01/png' /> -->
				  <img src="../../assets/images/touxiang.jpeg" alt="">
				  <p>微信昵称</p>
			  </div>
			</el-col>
			<el-col :span="8">
				<el-col :span="24">
					<p>注册时间：2019-3-11</p>
				</el-col>
				<el-col :span="24">
					<p>最近登陆时间：2019-3-11</p>
				</el-col>
				<el-col :span="24">
					<p>用户成长值：300</p>
				</el-col>
			</el-col>
		</el-row>
		<el-row class='borderB'>收藏内容</el-row>
		<el-row>
		  <el-col :span="8">
			  <p>标题</p>
			  <p>卫生间清洁</p>
		  </el-col>
		  <el-col :span="8">
			  <p>缩略图</p>
			  <div class='sltCtai'>
				  <img src="../../assets/images/03.jpg" alt="">
			  </div>
		  </el-col>
		  <el-col :span="8">
			  <p>收藏时间</p>
			  <p>2019-3-21 13:42</p>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped>
	.wxImg {
		text-align:center;
	}
	.wxImg img{
		width: 150px;
		height: 150px;
		border-radius:50%;
	}
	.sltCtai{
		padding:4px;
		background:#ccc;
		height:150px;
		width:200px;
		border-radius:6px;
		margin: 0 auto;
	}
	.sltCtai img {
		width:100%;
		height:100%;
	}
	.el-row {
		margin:10px 0;
	}
	.borderB{
		border-bottom: 1px solid #ddd;
		text-align: left;
	}
	.intro {
		text-align: left;
	}
</style>