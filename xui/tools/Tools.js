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
	 * 格式化金额
	 * @param {Object} val 要格式化的数字
	 * @param {Object} dec 保留几位小数
	 */
	money_format(val, dec = 2) {
		if(typeof val == 'string'){
			val = new Number(val);
		}
	
		return val.toFixed(dec);
	}
	
	/** 
	 * 时间戳格式化函数 
	 * @param  {string} format    格式 
	 * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
	 * @return {string}           格式化的时间字符串 
	 */
	format_date(format, timestamp) {
		let a, jsdate = ((timestamp) ? new Date(timestamp) : new Date());
		let pad = function(n, c) {
			if ((n = n + "").length < c) {
				return new Array(++c - n.length).join("0") + n;
			} else {
				return n;
			}
		};
		let txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let txt_ordin = {
			1: "st",
			2: "nd",
			3: "rd",
			21: "st",
			22: "nd",
			23: "rd",
			31: "st"
		};
		let txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September",
			"October", "November", "December"
		];
		let f = {
			// Day 
			d: function() {
				return pad(f.j(), 2)
			},
			D: function() {
				return f.l().substr(0, 3)
			},
			j: function() {
				return jsdate.getDate()
			},
			l: function() {
				return txt_weekdays[f.w()]
			},
			N: function() {
				return f.w() + 1
			},
			S: function() {
				return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'
			},
			w: function() {
				return jsdate.getDay()
			},
			z: function() {
				return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0
			},
	
			// Week 
			W: function() {
				let a = f.z(),
					b = 364 + f.L() - a;
				let nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
				if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
					return 1;
				} else {
					if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
						nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
						return date("W", Math.round(nd2.getTime() / 1000));
					} else {
						return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
					}
				}
			},
	
			// Month 
			F: function() {
				return txt_months[f.n()]
			},
			m: function() {
				return pad(f.n(), 2)
			},
			M: function() {
				return f.F().substr(0, 3)
			},
			n: function() {
				return jsdate.getMonth() + 1
			},
			t: function() {
				let n;
				if ((n = jsdate.getMonth() + 1) == 2) {
					return 28 + f.L();
				} else {
					if (n & 1 && n < 8 || !(n & 1) && n > 7) {
						return 31;
					} else {
						return 30;
					}
				}
			},
	
			// Year 
			L: function() {
				let y = f.Y();
				return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0
			},
			//o not supported yet 
			Y: function() {
				return jsdate.getFullYear()
			},
			y: function() {
				return (jsdate.getFullYear() + "").slice(2)
			},
	
			// Time 
			a: function() {
				return jsdate.getHours() > 11 ? "pm" : "am"
			},
			A: function() {
				return f.a().toUpperCase()
			},
			B: function() {
				// peter paul koch: 
				let off = (jsdate.getTimezoneOffset() + 60) * 60;
				let theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
				let beat = Math.floor(theSeconds / 86.4);
				if (beat > 1000) beat -= 1000;
				if (beat < 0) beat += 1000;
				if ((String(beat)).length == 1) beat = "00" + beat;
				if ((String(beat)).length == 2) beat = "0" + beat;
				return beat;
			},
			g: function() {
				return jsdate.getHours() % 12 || 12
			},
			G: function() {
				return jsdate.getHours()
			},
			h: function() {
				return pad(f.g(), 2)
			},
			H: function() {
				return pad(jsdate.getHours(), 2)
			},
			i: function() {
				return pad(jsdate.getMinutes(), 2)
			},
			s: function() {
				return pad(jsdate.getSeconds(), 2)
			},
			//u not supported yet 
	
			// Timezone 
			//e not supported yet 
			//I not supported yet 
			O: function() {
				let t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
				if (jsdate.getTimezoneOffset() > 0) t = "-" + t;
				else t = "+" + t;
				return t;
			},
			P: function() {
				let O = f.O();
				return (O.substr(0, 3) + ":" + O.substr(3, 2))
			},
			//T not supported yet 
			//Z not supported yet 
	
			// Full Date/Time 
			c: function() {
				return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()
			},
			//r not supported yet 
			U: function() {
				return Math.round(jsdate.getTime() / 1000)
			}
		};
	
		return format.replace(/[\\]?([a-zA-Z])/g, function(t, s) {
			let ret;
			if (t != s) {
				// escaped 
				ret = s;
			} else if (f[s]) {
				// a date function exists 
				ret = f[s]();
			} else {
				// nothing special 
				ret = s;
			}
			return ret;
		});
	}
	
	/**
	 * 去掉日期中的秒
	 * @param {Object} datetime
	 */
	date_handle(datetime) {
		let arr = datetime.split(':');
		return arr[0] + ':' + arr[1];
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
