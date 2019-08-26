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
		animation: open_slide .8s;
	}
	
	.close-slide{
		right: -80%;
		animation: close_slide .8s;
	}
</style>
