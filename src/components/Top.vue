<template>
	<div class="topContai">
		<span class="logoTItle">{{ firTitle }}>></span>
		<span class="logoTItle">{{ senTitle }}</span>
		<el-button round class='singUp' @click='singOut'>退出登陆</el-button>
	</div>
</template>

<script>
	import router from '../router'
	export default {
		data(){
			return {
				firTitle: '',
				senTitle: ''
			}
		},
		methods: {
			getParams(){
				var titleObj = this.getTitle(this.$route.name);
				this.firTitle = titleObj.firstT;
				this.senTitle = titleObj.secondT;
			},
			getTitle(name){
				console.log(name);
				let firTlt = '';
				let secTlt = '';
				const routeList = router.options.routes[1].children;
				for(var i=0;i<routeList.length;i++){
					var firTitle = routeList[i];
					if(firTitle.name && firTitle.name === name && !firTitle.children){
						firTlt = firTitle.title;
						secTlt = '';
					}
					if(firTitle.children){
						for(var j=0;j<firTitle.children.length;j++){
							var secT = firTitle.children[j];
							if(name === secT.name){
								firTlt = firTitle.title;
								secTlt = secT.title;
							}
						}
					}
				}
				return {
					firstT: firTlt,
					secondT:secTlt
				};
			},
			singOut(){
				this.$router.push('/');
			}
		},
		created() {
			var defaultName = this.$route.name;
			var titleObj = this.getTitle(defaultName);
			this.firTitle = titleObj.firstT;
			this.senTitle = titleObj.secondT;
		},
		watch: {
　　			'$route': 'getParams'
		}
	}
</script>

<style scoped>
	.topContai {
		background-image:url(../assets/images/top.jpg);
		background-size: cover;
		height: 60px;
		line-height: 60px;
		padding: 0 20px;
	}
	.topContai h2{
		margin: 0;
		padding: 0;
		line-height: 60px;
		color: #fff;
	}
	.logoTItle{
		float: left;
		color: #fff;
	}
	.singUp{
		float: right;
		margin-top: 10px;
	}
</style>