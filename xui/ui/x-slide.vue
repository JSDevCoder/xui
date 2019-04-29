<template>
	<view>
		<swiper class="swiper" :indicator-dots="indicator_dots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) of list" :key="index">
				<view class="swiper-item">
					<image class="img" :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	/**
	 * 轮播图
	 * @dev 何鑫适
	 * @email mnkv@163.com
	 */
	export default {
		data() {
			return {
				list: [
					'/static/banner1.png',
					'/static/banner2.png',
					'/static/banner3.png',
					'/static/banner4.png',
					'/static/banner5.png',
				],
				indicator_dots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				circular: true
			};
		}
	}
</script>

<style lang="less" scoped>
	.swiper{
		height:400upx;
		background-color:red;
		.img{
			width:100%;
			height:400upx;
		}
	}
</style>
