<template>
	<view class="loading" v-if="isShow">
		<image class="img loader" src="/static/logo.png"></image>
		<text class="text">loading</text>
	</view>
</template>

<script>
	export default {
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
				this.isShow = false
			}
		}
	}
</script>

<style lang="less" scoped>
	@keyframes loader {
		0% {
			transform: perspective(120px) rotateY(0deg);
		}

		// 50% {
		// 	transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
		// }

		100% {
			transform: perspective(120px) rotateY(-180deg);
		}
	}

	.loader {
		animation: loader 1.4s infinite ease-in-out;
	}

	.loading {
		width: 80px;
		height: 80px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 999;
		margin-left: -40px;
		margin-top: -40px;

		.img {
			width: 40px;
			height: 40px;
			margin-top: 8px;
		}

		.text {
		}
	}
</style>
