<template>
	<view class="nav-bar-wrap" :style="{ height: status_bar + 44 + 'px'}">
		<view class="nav-status-bar" :style="{ height: status_bar + 'px', backgroundColor: bgcolor }"></view>
		<view class="nav-bar" :style="{ top: status_bar + 'px', backgroundColor: bgcolor }">
			<slot name="icon-left"></slot>
			<view class="nav-bar-title" :style="{color: color}">{{ title }}</view>
			<slot name="icon-right"></slot>
		</view>
	</view>
</template>

<script>
	/**
	 * 顶部导航
	 * @dev 何鑫适
	 * @email mnkv@163.com
	 */
export default {
	
	props: {
		color: {
			type: String,
			default: '#fff'
		},
		bgcolor: {
			type: String,
			default: '#3385ff'
		},
		title: {
			type: String,
			default: ''
		}
	},
	
	computed: {
		status_bar() {
			return uni.getSystemInfoSync().statusBarHeight;
		}
	}
};
</script>

<style lang="less" scoped>
.nav-bar-wrap {
	width:100%;
	box-shadow: 0 4upx 6upx #808080;
	.nav-status-bar{
		width:100%;
		position:fixed;
		left:0;
		top:0;
		z-index:9999;
	}
	.nav-bar {
		width: 100%;
		height: 44px;
		line-height:44px;
		position: fixed;
		left: 0;
		z-index:99999;
		font-size:32upx;
		.nav-bar-title{
			text-align:center;
			width:100%;
			height:44px;
			position:absolute;
			left:0;
			top:0;
			z-index:998;
		}
	}
}
</style>
