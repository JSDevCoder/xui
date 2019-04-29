<template>
	<view class="three-level" v-if="is_show">
		<view class="mock" @tap="close"></view>
		<view class="pop">
			<view class="pop-head flex">
				<view class="cancel" @tap="close">取消</view>
				<view class="title">选择物业信息</view>
				<view class="confirm" @tap="confirm">确定</view>
			</view>
			<view class="pop-content">
				<view class="pc-head flex" v-if="items.length">
					<view class="pch-item" :class="idx == index ? 'active' : ''" v-for="(item, index) of items" :key="index" :data-index="index" @tap="active_item">
						{{ item }}
					</view>
				</view>
				<view class="list">
					<view
						class="list-item"
						:class="list_idx[item.type - 1] == index ? 'change' : ''"
						v-for="(item, index) of list"
						:key="index"
						:data-index="index"
						:data-type="item.type"
						:data-name="item.name"
						@tap="change_item"
					>
						{{ item.name }}
						<text class="icon iconfont icon-xuanzhong1" v-if="list_idx[item.type - 1] == index"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * 三级联动
 * @dev 何鑫适
 * @email mnkv@163.com
 */
export default {
	data() {
		return {
			is_show: false,
			idx: 0,
			list_idx: [null, null, null],
			items: [],
			list: [
				{
					name: '测试一',
					type: 1
				},
				{
					name: '测试二',
					type: 1
				},
				{
					name: '测试三',
					type: 1
				}
			]
		};
	},

	methods: {
		/**
		 * 点击选中的项目
		 */
		active_item(e) {
			let index = e.currentTarget.dataset.index;
			this.idx = index;
		},

		/**
		 * 点击每一个列表项
		 */
		change_item(e) {
			let index = Number(e.currentTarget.dataset.index);
			let type = Number(e.currentTarget.dataset.type);
			let name = e.currentTarget.dataset.name;
			
			switch(type) {
				case 1:
					this.$set(this.list_idx, type - 1, index);
					this.$set(this.items, type - 1, name)
					break;
				
				case 2:
					
					break;
					
				case 3:
					
					break;
			}
		},

		/**
		 * 开启弹层
		 */
		open() {
			this.is_show = true;
		},

		/**
		 * 关闭弹层
		 */
		close() {
			this.is_show = false;
		},

		/**
		 * 确定操作
		 */
		confirm() {
			console.log(confirm);
		}
	}
};
</script>

<style lang="less" scoped>
.mock {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 666;
	background-color: rgba(0, 0, 0, 0.8);
}
.pop {
	width: 100%;
	height: 600upx;
	background-color: #fff;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 999;
	.pop-head {
		line-height: 80upx;
		border-bottom: 1upx solid #f2f2f2;
		box-shadow: 0 -4upx 6upx #808080;
		.cancel,
		.confirm {
			width: 120upx;
			text-align: center;
			color: #20b2aa;
		}
		.title {
			text-align: center;
			flex-grow: 1;
		}
	}
	.pop-content {
		.pc-head {
			border-bottom: 1upx solid #f2f2f2;
			margin: 0 32upx;
			.active {
				color: #20b2aa;
				border-bottom: 8upx solid #20b2aa;
				font-size: 32upx;
				transition: all 0.3s;
			}
			.pch-item {
				min-width: 120upx;
				height: 80upx;
				text-align: center;
				line-height: 80upx;
			}
		}
		.list {
			margin: 0 32upx;
			height: 438upx;
			overflow-y: scroll;
			.list-item {
				line-height: 80upx;
				.icon {
					font-size: 32upx;
					margin-left: 32upx;
					font-weight: 600;
				}
			}
			.change {
				color: #20b2aa;
				// border-bottom: 1upx solid #20b2aa;
				font-size: 32upx;
				transition: all 0.3s;
			}
		}
	}
}
</style>
