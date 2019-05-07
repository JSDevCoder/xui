import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Strore({
	store: {
		has_login: false
	},

	mutations: {
		/**
		 * 更改登录状态
		 */
		login() {
			state.has_login = true;
		}
	}
});
