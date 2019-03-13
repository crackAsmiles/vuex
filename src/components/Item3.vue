<template>
	<div>
		<h1>state &nbsp;&nbsp;{{ msg}}</h1>
		<p>module-state&nbsp;&nbsp;{{ status }}</p>
		<hr />
		<div>
			<p>
				<el-button type="primary" @click="changeState">state  改变</el-button>
			</p>
			<p>
				<el-button type="success" @click="changeMState">state-module 改变</el-button>
			</p>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed:{
			...mapState({
				msg:state => state.msg,
				status: state => state.module1.status
			})
		},
		methods: {
			changeState(){
//				this.$store.commit('changeState')   根据 mutations
				this.$store.dispatch('changeSta')   // 根据 actions
			},
			changeMState(){
//				this.$store.commit('changeMstate')
				this.$store.dispatch('changeMsT')
			}
		}
		
	}
</script>

<style>
</style>