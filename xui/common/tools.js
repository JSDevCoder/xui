/**
 * 通用js工具封装
 * @author hexinshi
 * @eamil hexinshi@ebring.com.cn
 */
export default {
	/**
	 * 验证是否为空
	 * @param {string} val
	 */
	isEmpty(val) {
		const reg = /^\s+$/;
		if(val.length === 0 || val === '' || reg.test(val)){
			return true;
		}
		return false;
	},
	
	/**
	 * 验证是否为手机号
	 * @param {string|number} mobile
	 */
	isMobile(mobile) {
		const reg = /^1[3456789]\d{9}$/;
		if(reg.test(mobile)){
			return true;
		}
		return false;
	}
}