<template>
	<view class="x-input">
		<view class="label x-single-line">{{label}}</view>
		<view class="block">
			<input class="input" :type="text" @input="get_value" placeholder-class="placeholder" :placeholder="'请输入' + label" :value="value">
			<view class="clear iconfont icon-qingkong" v-if="value.length" @tap="clear"></view>
		</view>
	</view>
</template>

<script>
	/**
	 * input组件
	 * @dev 何鑫适
	 * @email mnkv@163.com
	 */
	export default {
		data() {
			return {
				value: ''
			};
		},
		
		props: {
			label: {
				type: String,
				default: ''
			},
			
			type: {
				type: String,
				default: 'text'
			}
		},
		
		methods: {
			get_value(e) {
				this.value = e.detail.value;
				this.$emit('get_value', e.detail.value);
			},
			
			clear() {
				this.value = '';
			}
		}
	}
</script>

<style lang="less" scoped>
.x-input{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	border-bottom:1upx solid #f2f2f2;
	.label{
		width:128upx;
		min-width:128upx;
		height:80upx;
		line-height:80upx;
		padding-left:32upx;
		font-size:32upx;
	}
	.block{
		width:558upx;
		position:relative;
		.input{
			width:518upx;
			height:80upx;
			padding:0 20upx;
			font-size:28upx;
		}
		.clear{
			width:40upx;
			height:40upx;
			color:#808080;
			font-size:36upx;
			position: absolute;
			right:0;
			top:20upx;
			z-index:999;
		}
		.placeholder{
			color:#808080;
		}
	}
}
</style>
