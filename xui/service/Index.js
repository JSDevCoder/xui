import Request from '../request/Request.js'

/**
 * Index模块业务逻辑处理
 * @dev 何鑫适
 * @email mnkv@163.com
 * @github 
 */
class Index extends Request {
	constructor(arg) {
		super();
	    // 逻辑接口示例
		this.list = '';
	}
	
	/**
	 * 接口请求示例
	 */
	index_list() {
		return super.ajax(this.list);
	}
}

export default new Index();