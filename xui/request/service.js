/**
 * 业务api接口调用封装
 * @author hexinshi
 * @email hexinshi@ebring.com.cn
 */
import Request from './request.js'
import Api from './api.js'

class Service extends Request {
	constructor(api) {
		super();
		// api接口
		this.api = api;
	}
	
	
	
	/**
	 * 测试接口
	 */
	test(userName, pageNum, pageSize) {
		return super.ajax(this.api.test, {
			userName, 
			pageNum, 
			pageSize
		}, {
			method: 'GET'
		});
	}
}

export default new Service(new Api());