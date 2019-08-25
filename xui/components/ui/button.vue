<template>
	<view 
		class="x-btn" 
		:class="computedClassName"
		@tap="btnTap"
	>
		{{computedBtnText}}
	</view>
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
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		border: 1px solid transparent;
		font-size: 16px;
		padding: 6px 12px;
		line-height: 1.5;
		border-radius: 4px;
		transition: color .15s ease-in-out,
			background-color .15s ease-in-out,
			border-color .15s ease-in-out,
			border-radius .15s ease-in-out;
	}
	
	@common: #fff;
	@primary:#007aff;
	@secondary: #6c757d;
	@success: #28a745;
	@danger: #dc3545;
	@warning: #ffc107;
	@info: #17a2b8;
	@light: #f8f9fa;
	@dark: #343a40;
	@link: #007bff;
	@list: primary, secondary, success, danger, warning, info, light, dark, link;
	
	.loop(@n, @i: 1, @v:extract(@list, @i)) when (@i <= @n){
		.x-btn-@{v}{
			background-color: @@v;
			color: @common;
			border-color: @@v;
		}
		.x-btn-outline-@{v}{
			background-color: @common;
			color: @@v;
			border-color: @@v;
		}
		.loop(@n, (@i + 1));
	}
	.loop(length(@list));
	.x-btn-lg{
		padding: 8px 16px;
		font-size: 20px;
		line-height: 1.5;
		border-radius: 6px;
	}
	.x-btn-sm{
		padding: 4px 8px;
		font-size: 14px;
		line-height: 1.5;
		border-radius: 4px;
	}
	.x-btn-block{
		display: block;
	}
</style>
