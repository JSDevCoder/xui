<script>
	/**
	 * JS书写规范
	 * 1.变量、函数、类的公共属性和方法都遵循小驼峰命名格式
	 * 2.常量为大写字母
	 * 3.构造函数、类名都遵循大驼峰命名格式
	 * 4.类的私有属性和方法以_作为前缀，同时遵循小驼峰命名格式
	 * 5.尽可能的给重要逻辑添加注释
	 * 6.尽可能的使用===全等，而非==
	 * 7.尽可能的使用ES6+语法中的let/const，抛弃使用var关键字
	 */
	export default {
		/**
		 * globalData中可以定义全局变量
		 * 调用方式：getApp().globalData.test
		 */
		globalData: {
			test: 'test'
		},
		onLaunch: function() {
			console.log('App Launch')
			// nvue内使用iconfont字体的使用方式
			const domModule = weex.requireModule("dom");
			domModule.addRule('fontFace', {
				"fontFamily": "iconfontExam",
				"src": "url('https://at.alicdn.com/t/font_1165569_2djuy6bsjwx.ttf')"
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/**
	 * CSS书写规范
	 * 1.样式使用class，不得使用id或者标签名
	 * 2.class的命名必须是反应元素目的和用途的，或者是通用的
	 * 3.尽量使用缩写属性
	 * 4.0后面不带单位
	 * 5.类名为小写字母，如有需要，则以`-`分隔
	 * 6.nvue模式下，css单位为rpx和px，rpx为动态单位，px为静态单位
	 */
	
	.iconfont-exam{
		font-family: iconfontExam;
		font-size: 14px;
		font-style: normal;
	}
	
	.container{
		font-size: 14px;
	}
</style>
