<template>
	<view :class="'tab-' + type">
		<view class="tab-head flex">
			<view
				class="tab-head-item"
				:class="idx == index ? 'bg' : ''"
				:style="{ width: width + '%' }"
				v-for="(item, index) of tab"
				:key="index"
				:data-index="index"
				@tap="active_item"
			>
				{{ item }}
			</view>
		</view>
		<view class="tab-content"><slot name="content"></slot></view>
	</view>
</template>

<script>
/**
 * tab切换组件
 * @dev 何鑫适
 * @email mnkv@163.com
 */
export default {
	data() {
		return {
			idx: 0
		};
	},

	props: {
		tab: {
			type: Array,
			default() {
				return ['选项一', '选项二'];
			}
		},

		type: {
			type: String,
			default: 'radius' //radius/card
		},

		width: {
			type: Number,
			default: 50
		}
	},

	methods: {
		active_item(e) {
			let index = e.currentTarget.dataset.index;
			this.idx = index;
			this.$emit('active_item', index);
		}
	}
};
</script>

<style lang="less" scoped>
.tab-radius {
	.tab-head {
		margin: 32upx;
		border: 1upx solid #3385ff;
		border-radius: 20upx;
		overflow: hidden;
		.tab-head-item {
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			border-right: 1upx solid #3385ff;
			&:last-child {
				border-right: none;
			}
			&.bg {
				color: #fff;
				background-color: #3385ff;
				transition: all 0.3s;
			}
		}
	}
}
</style>
