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
		min-height: 40%;
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
