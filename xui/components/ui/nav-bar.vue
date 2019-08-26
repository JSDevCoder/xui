<template>
	<!-- 顶部导航 -->
	<view class="wrap">
		<view class="nav-bar">
			<view class="back">返回</view>
			<view class="title">{{title}}</view>
			<view class="icons">#</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title'],
		computed: {
			statusBarHeight() {
				return uni.getSystemInfoSync().statusBarHeight;
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrap{
		width:100%;
		height:44px;
		background-color: #cc0200;
		color:#fff;
		
		.back, .icons{
			min-width:40px;
			text-align:center;
		}

		.nav-bar{
			position: fixed;
			left: 0;
			right:0;
			top:0;
			z-index: 99999;
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height:44px;
		}
	}
</style>
