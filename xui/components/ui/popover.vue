<template>
	<!-- 
	 弹出层
	 -->
	 <div 
		class="popover"
		:class="slide"
		:style="pos"
		v-show="isShow"
	 >
		 <slot></slot>
	 </div>
</template>

<script>
	export default {
		name: 'x-popover',
		data() {
			return {
				isShow: false
			}
		},
		props: {
			position: {
				type: String,
				default: 'fixed'
			},
			left: String,
			right: String,
			top: String,
			bottom: String,
			width: String,
			minHeight: String,
			slide: String,
			bgColor: {
				type: String,
				default: '#fff'
			}
		},
		
		computed: {
			pos() {
				const position = this.position;
				const left = this.left ? this.left + 'rpx' :  '';
				const right = this.right ? this.right + 'rpx' : '';
				const top = this.top ? this.top + 'rpx' : '';
				const bottom = this.bottom ? this.bottom + 'rpx' : '';
				const width = this.width ? this.width + '%' : '';
				const minHeight = this.minHeight ? this.minHeight + '%' : '';
				const backgroundColor = this.bgColor;
				return {
					position, 
					left, 
					right, 
					top, 
					bottom, 
					width, 
					minHeight, 
					backgroundColor
				};
			}
		},
		
		methods: {
			open() {
				this.isShow = true;
			},
			
			close() {
				this.isShow = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes slide_left {
		0% {
			left: -50%;
		}
		100% {
			left: 0;
		}
	}
	@keyframes slide_right {
		0% {
			right: -50%;
		}
		100% {
			right: 0;
		}
	}
	@keyframes slide_bottom {
		0% {
			bottom: -40%;
		}
		100% {
			bottom: 0;
		}
	}
	@keyframes slide_top {
		0% {
			top: -50%;
		}
		100% {
			top: 0;
		}
	}
	
	.slide-left{
		animation: slide_left .3s;
	}
	
	.slide-right{
		animation: slide_right .3s;
	}
	
	.slide-top{
		animation: slide_top .3s;
	}
	
	.slide-bottom{
		animation: slide_bottom .3s;
	}
</style>
