<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import index from '../../service/Index.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.get_demo_list();
		},
		methods: {
			// 调用service示例
			get_demo_list() {
				index.index_list().then(res => {
					// 处理业务逻辑
				});
			}
		}
	}
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
