/**
 * 业务api接口调用封装
 * @author hexinshi
 * @email hexinshi@ebring.com.cn
 */
import request from './request.js'
import api from './api.js'

export default {
	// 状态处理
	statusCodeHandle: request.statusHandle,
	
	// 用户登录
	login(mobile, password) {
		return request.ajax(api.login, {
			mobile,
			password
		});
	}
}