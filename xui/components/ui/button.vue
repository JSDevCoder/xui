<template>
	<div 
		class="x-btn" 
		:class="computedClassName"
		@tap="btnTap"
	>
		{{computedBtnText}}
	</div>
</template>

<script>
	/**
	 * 按钮组件
	 */
	export default {
		name: 'x-button',
		props: {
			// 按钮类型 []
			btnType: {
				type: String,
				default: ''
			},

			// 按钮大小
			btnSize: {
				type: String,
				default: ''
			},

			// 按钮文本
			btnText: {
				type: String,
				default: '默认按钮'
			},

			// 只有边框的按钮
			btnOutline: {
				type: String,
				default: ''
			},

			// 按钮状态
			btnActive: {
				type: String,
				default: ''
			},

			// 是否块元素
			btnBlock: {
				type: String,
				default: ''
			}
		},

		computed: {
			computedClassName() {
				const btnType = this.btnType ? 'x-btn-' + this.btnType : '';
				const btnSize = this.btnSize ? 'x-btn-' + this.btnSize : '';
				const btnOutline = this.btnOutline ? 'x-btn-outline-' + this.btnOutline : '';
				const btnActive = this.btnActive === 'true' ? 'x-btn-active' : '';
				const btnBlock = this.btnBlock === 'true' ? 'x-btn-block' : '';
				return [
					btnType,
					btnSize,
					btnOutline,
					btnActive,
					btnBlock
				]
			},
			
			computedBtnText() {
				return this.btnText;
			}
		},
		
		methods: {
			btnTap() {
				this.$emit('btnTap');
			}
		}
	}
</script>

<style lang="less" scoped>
	.x-btn {
		display: inline-block;
		margin-right:32rpx;
		margin-bottom: 32rpx;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		border: 1px solid transparent;
		font-size: 32rpx;
		padding: 12rpx 24rpx;
		line-height: 1.5;
		border-radius: 8rpx;
		transition: color .15s ease-in-out,
			background-color .15s ease-in-out,
			border-color .15s ease-in-out,
			border-radius .15s ease-in-out;
	}
	
	@commonColor: #fff;
	@primaryColor:#007aff;
	@secondaryColor: #6c757d;
	@successColor: #28a745;
	@dangerColor: #dc3545;
	@warningColor: #ffc107;
	@infoColor: #17a2b8;
	@lightColor: #f8f9fa;
	@darkColor: #343a40;
	@linkColor: #007bff;
	@list1: primary, secondary, success, danger, warning, info, light, dark, link;
	@list2: @primaryColor, @secondaryColor, @successColor, @dangerColor, @warningColor, @infoColor, @lightColor, @darkColor, @linkColor;
	
	.loop(@n, @i: 1, @v:extract(@list1, @i), @v1:extract(@list2, @i)) when (@i <= @n){
		.x-btn-@{v}{
			background-color: @v1;
			color: @commonColor;
			border-color: @v1;
		}
		.x-btn-outline-@{v}{
			background-color: @commonColor;
			color: @v1;
			border-color: @v1;
		}
		.loop(@n, (@i + 1));
	}
	.loop(length(@list1));
	.x-btn-lg{
		padding: 16rpx 32rpx;
		font-size: 40rpx;
		line-height: 1.5;
		border-radius: 9.6rpx;
	}
	.x-btn-sm{
		padding: 8rpx 16rpx;
		font-size: 28rpx;
		line-height: 1.5;
		border-radius: 6.4rpx;
	}
	.x-btn-block{
		width:100%;
		display: block;
	}
</style>
