/**
 * Index模块业务逻辑处理
 * @dev 何鑫适
 * @email mnkv@163.com
 */
import Request from '../request/Request.js'
import indexMock from './IndexMock.js'

class Index extends Request {
	constructor(arg) {
		super();

		// 逻辑接口示例
		this.list = '/tmVillage/qryAllVillage';
	}

	/**
	 * 接口请求示例
	 */
	indexList() {
		if(this.hasMock){
			indexMock.list();
		}
		return super.ajax(this.list);
	}
}

export default new Index();
