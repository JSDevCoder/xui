<template>
	<view class="wrap">
		<view class="list-card" v-if="listCardData.length">
			<view 
				class="list-item" 
				:style="{width: (100 / absCount) + '%'}" 
				v-for="(item, index) of listCardData" 
				:key="index"
			>
				<view class="list-item-wrap">
					<view class="list-item-top">
						<image 
							class="item-top-img" 
							src="/static/logo.png"
						></image>
					</view>
					<view class="list-item-bottom more-line-hidden">{{item.title}}</view>
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
			listCardData: Array,

			// item个数
			absCount: {
				type: Number,
				default: 3
			}
		},

		components: {
			noData
		}
	}
</script>

<style lang="less" scoped>
	.list-card {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		
		.list-item {
			
			.list-item-wrap{
				margin:20upx;
				border-radius:20upx;
				
				.list-item-top{
					.item-top-img{
						width:100%;
						height:160upx;
					}
				}
				.list-item-bottom{
					margin:20upx 0;
				}
			}
		}
	}
</style>
