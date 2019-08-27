/**
 * 业务api接口调用封装
 * @author hexinshi
 * @email hexinshi@ebring.com.cn
 */
import request from './request.js'
import api from './api.js'

export default {
	// api
	api,
	
	// 状态处理
	statusCodeHandle: request.statusHandle,

	/**
	 * 测试接口
	 */
	test(userName, pageNum, pageSize) {
		return request.ajax(this.api.test);
	},
}