<template>
	<view class="wrap">
		<view class="mask"></view>
		<view class="dialog">
			<view class="loading"></view>
			<view class="loading-txt">加载中...</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	.mask{
		position:fixed;
		left:0;
		top:0;
		z-index:998;
		width:100%;
		height:100%;
		background-color:rgba(0, 0, 0, .4);
	}
	
	.dialog{
		position:fixed;
		left:295upx;
		top:50%;
		z-index: 999;
		width:160upx;
		height:160upx;
		margin-top:-80upx;
		border-radius:20upx;
		background-color:rgba(255, 255, 255, .8);
		
		.loading {
			width:60upx;
			height:60upx;
			margin:30upx auto 0;
			background-color:#2b9939;
			animation: ani-01 1.4s infinite ease-in-out;
		}
	}
	
	.loading-txt{
		margin-top:20upx;
		text-align:center;
		font-size:24upx;
		color:#333;
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
