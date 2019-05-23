/**
 * ajax请求封装库
 * @dev 何鑫适
 * @email mnkv@163.com
 * @github 
 */
class Request {
	constructor(arg) {
		// 调试模式开关
		this.debug = true;
	}

	/**
	 * LOG日志
	 */
	log(api, data, res) {
		if (this.debug) {
			console.log('===LOG Begin=====================================================================');
			console.log('请求接口: ' + this.api(api));
			console.log('请求参数: ' + JSON.stringify(data));
			console.log('返回数据: ' + JSON.stringify(res));
			console.log('===LOG End=====================================================================');
		}
	}

	/**
	 * 项目环境
	 * @dev 开发环境
	 * @prod 生产环境
	 */
	server() {
		const dev = {
			BASE_URL: '',
		}

		const prod = {
			BASE_URL: '',
		}

		return this.debug ? dev : prod;
	}

	/**
	 * 处理api
	 */
	api(api) {
		if (!api) {
			console.error('api接口不存在');
			return false;
		}
		return this.server().BASE_URL + api;
	}

	/**
	 * 处理headers
	 */
	headers() {
		const headers = {};
		const token = uni.getStorageSync('token');
		if (token) {
			headers['token'] = token;
		}
		headers['Content-Type'] = 'application/json';
		// headers['Content-type'] = 'application/x-www-form-urlencoded'

		return headers;
	}

	/**
	 * 请求异常状态处理
	 */
	status_handle(code, from, msg) {
		let info = '';
		switch (code) {
			case '500':
				info = '服务器出错，请求失败';
				break;
			case '404':
				info = '资源或者接口不存在， 请求失败'
				break;
			case '-1': //业务异常状态
				info = msg;
				console.error(from + '___' + msg);
				break;
		}
		uni.showToast({
			title: info,
			icon: 'none',
			duration: 2000
		});
	}

	/**
	 * ajax请求，默认POST请求方式
	 */
	async ajax(
		api,
		data = {},
		method = 'POST'
	) {
		if (!this.api(api)) return;
		const options = {};
		options.url = this.api(api);
		options.data = data;
		options.method = method;
		options.headers = this.headers();
		let [error, res] = await uni.request(options)
		if (res) {
			this.log(api, data, res);
			if (res.statusCode == 200) {
				return res.data;
			} else {
				// 处理异常状态
				this.status_handle(res.statusCode);
			}
		} else if (error) {
			this.log(api, data, error)
		}
	}
}

export default Request;
