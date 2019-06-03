<template>
	<view class="wrap">
		<view class="loading"></view>
		<view class="loading-txt">加载中...</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	.loading {
		width:60upx;
		height:60upx;
		margin:60upx auto 0;
		background-color:#2b9939;
		animation: ani-01 1.4s infinite ease-in-out;
	}
	
	.loading-txt{
		margin-top:20upx;
		text-align:center;
		font-size:24upx;
		color:#888;
	}

	@keyframes ani-01 {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
		}

		50% {
			transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
		}

		100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
		}
	}
</style>
