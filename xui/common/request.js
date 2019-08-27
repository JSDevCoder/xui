/**
 * 封装uni.request
 * @author hexinshi
 * @email hexinshi@ebring.com.cn
 */
export default {
	// 当前开发环境
	mode: 'dev',
	
	// 当前请求对象
	task: null,
	
	/**
	 * 获取当前环境服务器地址
	 */
	getRequestURL() {
		const dev = {
			baseUrl: 'http://192.168.108.115:3000',
			resUrl: 'http://192.168.108.115/'
		};
		
		const test = {
			baseUrl: '',
			resUrl: ''
		};
		
		const production = {
			baseUrl: '',
			resUrl: ''
		};
		
		return this.mode == 'prod' ? production : 
				this.mode == 'test' ? test : dev;
	},
	
	/**
	 * 获取完整的请求地址
	 * @param {Object} api
	 */
	getApi(api) {
		return this.getRequestURL().baseUrl + api;
	},
	
	/**
	 * 处理用户传递的参数
	 * @param {Object} data
	 */
	getData(data) {
		//对data做一些公共操作
		return data;
	},
	
	/**
	 * 处理ajax请求中的header头
	 * @param {Object} options
	 */
	getHeader(options) {
		const token = uni.getStorageSync('token');
		if(token) options['token'] = token;
		if(typeof options.type === 'undefined'){
			options['Content-type'] = 'application/x-www-form-urlencoded';
		}else if(options.type === 'json'){
			options['Content-Type'] = 'application/json';
		}
		return options;
	},
	
	/**
	 * ajax请求简单封装
	 */
	async ajax(
		api = '', 
		data = {},
		{
			method = 'POST', 
			header = {}, 
			dataType = 'json', 
			responseType = 'text'
		} = {}
	) {
		if(!api) throw new Error('ajax请求缺少参数\'api\'');
		uni.showLoading({title: 'loading...'});
		const options = {
			url: this.getApi(api),
			data: this.getData(data),
			method,
			header: this.getHeader(header),
			dataType,
			responseType
		}
		try{
			const [error, res]  = await uni.request(options);
			uni.hideLoading();
			if(error && error.errMsg === 'request:fail timeout'){
				this.log(options.url, options.data, error);
				uni.showToast({
					title: '请求超时',
					icon: 'none',
					duration: 2000,
					position: 'bottom'
				});
				return;
			}
			this.log(options.url, options.data, res);
			if(res && res.statusCode === 200){
				return res.data;
			}else{
				this.statusHandle(res.statusCode);
			}
		}catch(e) {
			console.log(e)
		}
	},
	
	/**
	 * 服务器请求状态处理
	 * @param {Object} statusCode 状态码
	 * @param {Object} msg 提示信息
	 */
	statusHandle(statusCode, msg) {
		const status = [500, 404, -403];
		const msg_text = [
			'请求失败，服务器内部错误',
			'请求失败，API接口不存在',
			'当前登录已失效，请重新登录'
		];
		const pos = status.indexOf(statusCode);
		let title = '';
		if(pos === -1){
			status.push(statusCode);
			msg_text.push(msg);
			title = msg_text[msg_text.length - 1];
		}else{
			title = msg_text[pos];
		}
		uni.showToast({
			title,
			icon: 'none',
			duration: 2000,
			position: 'bottom'
		});
		if(statusCode === -403){
			setTimeout(() => {
				uni.reLaunch({
					url: '/pages/login/login'//登录界面
				})
			}, 1000)
		}
	},
	
	log(url, param, res) {
		console.log('*********************************************************');
		console.log('当前请求接口: ' + url);
		console.log(param);
		console.log(res);
		console.log('*********************************************************');
	}
}