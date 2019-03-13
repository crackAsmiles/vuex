const module1 = {
	state:{
		status:true
	},
	mutations: {
		changeMstate(state){
			state.status = state.status?false:true
		}
	},
	getters: {
		
	},
	actions: {
		changeMsT(content){
			content.commit('changeMstate')
		}
	}
}

export default module1
