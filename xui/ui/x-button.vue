<template>
	<view class="x-button" :class="style">{{label}}</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		
		props: {
			label: {
				type: String,
				default: '确定'
			},
			
			type: {
				type: String,
				default: 'default', //default, info, warn, error
			}
		},
		
		computed: {
			style() {
				let cls = 'x-button-' + this.type;
				return [cls];
			}
		}
	}
</script>

<style lang="less" scoped>
	.x-button{
		width:80%;
		height:78upx;
		margin:32upx auto;
		border-radius: 20upx;
		text-align:center;
		line-height:80upx;
		font-size:32upx;
	}
	.x-button-default{
		background-color:#fff;
		border:1upx solid #f2f2f2;
		color:#333;
	}
	.x-button-info{
		background-color:#3385aa;
		border:1upx solid #3385aa;
		color:#fff;
	}
</style>
