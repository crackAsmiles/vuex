const mutations = {
	changeState(state){
		state.msg = state.msg === 'hello world!!'?'您好 世界！！':'hello world!!';
	}
}
export default mutations