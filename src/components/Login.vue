<template>
	<div class="loginContai">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm loginView">
			  <el-form-item label-width="0px">
			     <h5>登&nbsp;&nbsp;陆</h5>
			  </el-form-item>
			  <el-form-item label="用户名" prop="name" class='login-item'>
			    <el-input v-model="ruleForm.name"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pws" class='login-item'>
			    <el-input v-model="ruleForm.pws"></el-input>
			  </el-form-item>
			  <el-form-item label-width="0px" class='login-item'>
			    <el-button class='login-btn' type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
			  </el-form-item>
			</el-form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
	      return {
	        ruleForm: {
	          name: '',
	          pws: '',
	        },
	        rules: {
	          name: [
	            { required: true, message: '请输入活动名称', trigger: 'blur' }
	          ],
	          pws: [
	          	{ required: true, message: '请输入密码', trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            let user = {};
	            user['username'] = this.ruleForm.name;
	            user['password'] = this.ruleForm.pws;
	            var exriesDate = new Date().getDate();
	            var expried = new Date();
	            expried.setDate( exriesDate + 7 );
	            this.axios.post('/api/users/login',user)
	            .then(res => {
	            	console.log(res)
	            	this.cookies.set('token',res.data,expried);
	            	// 以后请求都设置请求头
	            	this.axios.defaults.headers.common['Authentication-token'] = res.data;
	            	this.$router.push('/page');
	            })
	            .catch(err => {
	            	this.$alert(err,'',{});
	            })
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      }
	    }
		
	}
</script>

<style scoped>
	.loginContai {
		height:100vh;
		width: 100%;
		background-image: url(../assets/images/bg.jpg);
		background-size: cover;
		color: #fff;
	}
	.loginView{
		width: 600px;
		background: #FFFFFF;
		color: #333;
		padding: 20px 10px;
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%,-50%);
		border-radius: 6px;
	}
	.login-btn{
		width: 80%;
	}
	.login-item {
		margin-top: 50px;
	}
  h5{
    margin: 0;
    padding: 0;
    font-size: 30px;
    color:#666;
  }
</style>