<template>
	<view class="wrap">
		<view class="list-line" v-if="listLineData.length">
			<view class="list-item" v-for="(item, index) of listLineData" :key="index">
				<view class="list-item-left" :style="{width: absWidth + 'px'}">
					<image class="item-left-img" :style="{width: absWidth + 'px', height: absWidth + 'px'}" src="/static/logo.png"></image>
				</view>
				<view class="list-item-right">
					{{item.title}}
				</view>
			</view>
		</view>
		<no-data v-else></no-data>
	</view>
</template>

<script>
	import noData from './no-data.vue'

	/**
	 * 列表
	 * @dev 何鑫适
	 * @email mnkv@163.com
	 */
	export default {
		props: {
			// list数据
			listLineData: Array,

			// 固定位置宽度
			absWidth: {
				type: Number,
				default: 80
			}
		},

		components: {
			noData
		}
	}
</script>

<style lang="less" scoped>
	.list-line {

		.list-item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			padding: 32upx;
			border-bottom: 1upx solid #f2f2f2;
			background-color: #fff;

			.list-item-right {
				flex-grow: 1;
				padding-left: 10px;
			}
		}
	}
</style>
