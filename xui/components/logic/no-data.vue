<template>
	<view class="no-data">
		<image class="img" src="/static/no_data.png"></image>
		<view class="nd-txt">没有更多数据了~</view>
	</view>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.no-data {
		text-align: center;
		color: #808080;
		margin-top: 80upx;
		margin-bottom:32upx;

		.img {
			width:280upx;
			height:240upx;
		}
	}
</style>
