<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import index from '../../service/Index.js';
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {
		const token = uni.getStorageSync('token');
		if (!token) {
			uni.navigateTo({
				url: '/pages/login/login'
			});
			return;
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
