<template>
	<!-- 
	 弹出层
	 -->
	<view class="popover" :class="animation">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'x-popover',

		data() {
			return {
				isShow: false,
				animation: ''
			}
		},

		methods: {
			open() {
				this.isShow = true;
				this.animation = 'open-slide';
			},

			close() {
				this.isShow = false;
				this.animation = 'close-slide';
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes open_slide {
		0% {
			bottom: -40%;
		}

		100% {
			bottom: 0;
		}
	}
	
	@keyframes close_slide {
		0% {
			bottom: 0;
		}
	
		100% {
			bottom: -40%;
		}
	}

	.popover {
		position: fixed;
		right: 0;
		left: 0;
		bottom: -40%;
		min-height:40%;
		background-color: #fff;
		z-index: 999;
	}

	.open-slide {
		bottom: 0;
		animation: open_slide .4s;
	}
	
	.close-slide {
		bottom: -40%;
		animation: close_slide .4s;
	}
</style>
