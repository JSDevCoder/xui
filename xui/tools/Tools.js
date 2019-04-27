/**
 * 通用工具库
 * @dev 何鑫适
 * @email mnkv@163.com
 * @github 
 */
class Tools {
	constructor(arg) {
	    
	}
	
	/**
	 * 验证
	 * @param target 需要验证的字符串
	 * @param type 验证的目标类型
	 */
	verify(target, type) {
		let result;
		switch (type) {
			case 'mobile':
				result = /^1(3|4|5|7|8)\d{9}$/.test(target);
				break;
				
			case 'email':
				result = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(target);
				break;
				
			case 'idcard':
				result = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(target);
				break;
				
			case 'realname':
				result = /^[\u4e00-\u9fa5]{2,4}$/.test(target);
				break;
		}
		return result;
	}
}

export default new Tools();