export default {
	namespaced: true,
	
	state: {
		// 用户登录状态
		hasLogin: false
	},
	
	mutations: {
		/**
		 * 登录操作
		 * @param {Object} state
		 */
		toLogin(state) {
			state.hasLogin = true;
		},
		
		/**
		 * 退出登录操作
		 * @param {Object} state
		 */
		toLogout(state) {
			state.hasLogin=  false;
		}
	}
}