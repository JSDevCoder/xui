<template>
	<!-- 
	 弹出层
	 -->
	<view class="popover slide-bottom" v-if="isShow">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'x-popover',

		data() {
			return {
				isShow: false
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
	@keyframes slide_bottom {
		0% {
			bottom: -40%;
		}

		100% {
			bottom: 0;
		}
	}

	.popover {
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		min-height:40%;
		background-color: #fff;
		z-index: 999;
	}

	.slide-left {
		animation: slide_left .3s;
	}

	.slide-right {
		animation: slide_right .3s;
	}

	.slide-top {
		animation: slide_top .3s;
	}

	.slide-bottom {
		animation: slide_bottom .3s;
	}
</style>
