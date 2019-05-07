<template>
	<view class="x-button" :class="style" @tap="submit">{{ label }}</view>
</template>

<script>
/**
 * 按钮组件
 * @dev 何鑫适
 * @email mnkv@163.com
 */
export default {
	data() {
		return {};
	},

	props: {
		label: {
			type: String,
			default: '确定'
		},

		type: {
			type: String,
			default: 'default' //default, info, warn, error
		}
	},

	computed: {
		style() {
			let cls = 'x-button-' + this.type;
			return [cls];
		}
	},

	methods: {
		submit() {
			this.$emit('submit');
		}
	}
};
</script>

<style lang="less" scoped>
.x-button {
	width: 80%;
	height: 78upx;
	margin: 32upx auto;
	border-radius: 20upx;
	text-align: center;
	line-height: 80upx;
	font-size: 32upx;
}
.x-button-default {
	background-color: #fff;
	border: 1upx solid #f2f2f2;
	color: #333;
}
.x-button-info {
	background-color: #3385ff;
	border: 1upx solid #3385ff;
	color: #fff;
}
</style>
