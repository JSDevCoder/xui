<template>
	<view class="wrap">
		<view class="list-link" v-if="listLinkData.length">
			<view 
				class="list-item" 
				v-for="(item, index) of listLinkData" 
				:key="index"
			>
				<view class="list-item-left">
					<image class="item-left-img" src="/static/logo.png"></image>
				</view>
				<view class="list-item-center single-line-hidden">{{item.title}}</view>
				<view class="list-item-right">></view>
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
			listLinkData: Array
		},

		components: {
			noData
		}
	}
</script>

<style lang="less" scoped>
	.list-link {
		
		.list-item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding:32upx;
			border-bottom:1upx solid #f2f2f2;
			
			.list-item-left{
				width:40upx;
				height:40upx;
				
				.item-left-img{
					width:40upx;
					height:40upx;
				}
			}
			
			.list-item-center{
				flex-grow: 1;
				padding:0 20upx;
			}
			
			.list-item-right{
				width:40upx;
				height:40upx;
				text-align:right;
			}
		}
	}
</style>
