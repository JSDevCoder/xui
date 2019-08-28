<template>
	<view>
		<!--
		 遮罩
		 -->
		<x-mask ref="mask" @close="close"></x-mask>
		
		<!-- 
		 弹出层
		 -->
		<view class="popover" :class="animation">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import xMask from './mask.vue'
	export default {
		name: 'x-popover',

		data() {
			return {
				isShow: false,
				animation: ''
			}
		},
		
		components: {
			xMask
		},

		methods: {
			open() {
				this.isShow = true;
				this.animation = 'open-slide';
				this.$refs.mask.open();
			},

			close() {
				this.isShow = false;
				this.animation = 'close-slide';
				this.$refs.mask.isShow = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes open_slide {
		0% {
			right: -80%;
		}

		100% {
			right: 0;
		}
	}
	
	@keyframes close_slide{
		0% {
			right: 0
		}
		
		100% {
			right: -80%
		}
	}
	
	.popover {
		position: fixed;
		right: -80%;
		top: 0;
		bottom: 0;
		width: 80%;
		background-color: #fff;
		z-index: 999;
	}

	.open-slide {
		right: 0;
		animation: open_slide .4s;
	}
	
	.close-slide{
		right: -80%;
		animation: close_slide .4s;
	}
</style>
