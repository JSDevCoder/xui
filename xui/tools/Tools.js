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

	/**
	 * 数组累加
	 * @param {Object} arr 目标数组
	 */
	sum_array(arr) {
		return arr.reduce((prev, cur) => prev + cur)
	}

	/**
	 * 求最大值
	 * @param {Object} arr 目标数组
	 */
	max_array(arr) {
		return arr.reduce((prev, cur) => Math.max(prev, cur))
	}

	/**
	 * 求最小值
	 * @param {Object} arr 目标数组
	 */
	max_array(arr) {
		return arr.reduce((prev, cur) => Math.min(prev, cur))
	}

	/**
	 * 数组去重
	 * @param {Object} arr 目标数组
	 */
	queue_array(arr) {
		return arr.reduce((prev, cur) => {
			!prev.includes(cur) && prev.push(cur)
			return prev
		}, []);
	}
}

export default new Tools();
