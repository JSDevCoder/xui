<template>
	<scroll-view scroll-x="true" scroll-left="0" :scroll-into-view="'item-' + idx" scroll-with-animation="true">
		<view class="scroll-view" :style="{width: width + 'px'}">
			<view :id="'item-' + index" class="scroll-view-item" v-for="(item, index) of navData" :key="index" :data-index="index"
			 @tap="onTap" :style="{borderBottom: index == idx ? '4px solid ' + item.color : '4px solid #fff', color: index == idx ? item.color : '#333'}">
				{{item.title}}
			</view>
		</view>
	</scroll-view>
</template>

<script>
	/**
	 * 滑动导航
	 * @dev 何鑫适
	 * @email mnkv@163.com
	 */
	export default {
		data() {
			return {
				idx: 0
			}
		},

		props: {
			currentIndex: Number,
			navData: Array
		},

		watch: {
			currentIndex() {
				this.idx = this.currentIndex;
			}
		},

		computed: {
			width() {
				return 120 * this.navData.length;
			}
		},

		methods: {
			onTap(e) {
				let index = e.currentTarget.dataset.index;
				this.idx = index;
				this.$emit('onTap', index);
			}
		}
	}
</script>

<style lang="less" scoped>
	.scroll-view {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		height: 44px;
		line-height: 44px;
		border-bottom: 1px solid #f2f2f2;

		.scroll-view-item {
			width: 120px;
			text-align: center;
		}
	}
</style>
