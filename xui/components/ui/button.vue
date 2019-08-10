<template>
	<div 
		class="x-btn" 
		:class="[computedType, computedSize, computedBtnLine, computedActive, computedBlock]"
		@tap="btnTap"
	>
		{{computedText}}
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
			computedType() {
				return this.btnType ? 'x-btn-' + this.btnType : '';
			},

			computedSize() {
				return this.btnSize ? 'x-btn-' + this.btnSize : '';
			},

			computedText() {
				return this.btnText;
			},

			computedBtnLine() {
				return this.btnOutline ? 'x-btn-outline-' + this.btnOutline : '';
			},

			computedActive() {
				return this.btnActive === 'true' ? 'x-btn-active' : '';
			},

			computedBlock() {
				return this.btnBlock === 'true' ? 'x-btn-block' : '';
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
	@commonColor: #fff;
	@primaryColor: #007aff;
	@secondaryColor: #6c757d;
	@successColor: #28a745;
	@dangerColor: #dc3545;
	@warningColor: #ffc107;
	@infoColor: #17a2b8;
	@lightColor: #f8f9fa;
	@darkColor: #343a40;
	@linkColor: #007bff;
	
	.x-btn {
		display: inline-block;
		margin-right:1rem;
		margin-bottom: 1rem;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		border: 1px solid transparent;
		font-size: 1rem;
		padding: .375rem .75rem;
		line-height: 1.5;
		border-radius: .25rem;
		transition: color .15s ease-in-out,
			background-color .15s ease-in-out,
			border-color .15s ease-in-out,
			border-radius .15s ease-in-out;

		&.x-btn-primary {
			background-color: @primaryColor;
			color: @commonColor;
			border-color: @primaryColor;
		}
		
		&.x-btn-outline-primary{
			background-color: @commonColor;
			color: @primaryColor;
			border-color: @primaryColor;
		}

		&.x-btn-secondary {
			background-color: @secondaryColor;
			color: @commonColor;
			border-color: @secondaryColor;
		}
		
		&.x-btn-outline-secondary{
			background-color: @commonColor;
			color: @secondaryColor;
			border-color: @secondaryColor;
		}
		
		&.x-btn-success{
			background-color: @successColor;
			color: @commonColor;
			border-color: @successColor;
		}
		
		&.x-btn-outline-success{
			background-color: @commonColor;
			color: @successColor;
			border-color: @successColor;
		}
		
		&.x-btn-danger{
			background-color: @dangerColor;
			color: @commonColor;
			border-color: @dangerColor;
		}
		
		&.x-btn-outline-danger{
			background-color: @commonColor;
			color: @dangerColor;
			border-color: @dangerColor;
		}
		
		&.x-btn-warning{
			background-color: @warningColor;
			color: @commonColor;
			border-color: @warningColor;
		}
		
		&.x-btn-outline-warning{
			background-color: @commonColor;
			color: @warningColor;
			border-color: @warningColor;
		}
		
		&.x-btn-info{
			background-color: @infoColor;
			color: @commonColor;
			border-color: @infoColor;
		}
		
		&.x-btn-outline-info{
			background-color: @commonColor;
			color: @infoColor;
			border-color: @infoColor;
		}
		
		&.x-btn-light{
			background-color: @lightColor;
			color: @commonColor;
			border-color: @lightColor;
		}
		
		&.x-btn-outline-light{
			background-color: @commonColor;
			color: @lightColor;
			border-color: @lightColor;
		}
		
		&.x-btn-dark{
			background-color: @darkColor;
			color: @commonColor;
			border-color: @darkColor;
		}
		
		&.x-btn-outline-dark{
			background-color: @commonColor;
			color: @darkColor;
			border-color: @darkColor;
		}
		
		&.x-btn-link{
			background-color: @linkColor;
			color: @commonColor;
			border-color: @linkColor;
		}
		
		&.x-btn-outline-link{
			background-color: @commonColor;
			color: @linkColor;
			border-color: @linkColor;
		}
		
		&.x-btn-lg{
			padding: .5rem 1rem;
			font-size: 1.25rem;
			line-height: 1.5;
			border-radius: .3rem;
		}
		
		&.x-btn-sm{
			padding: .25rem .5rem;
			font-size: .875rem;
			line-height: 1.5;
			border-radius: .2rem;
		}
		
		&.x-btn-block{
			width:100%;
			display: block;
		}
	}
</style>
