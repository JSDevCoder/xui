<template>
	<view class="side-bar" v-if="is_show">
		<view class="mock" @tap="close" @touchmove.stop="move"></view>
		<view class="pop">
			<view class="close iconfont icon-guanbi" @tap="close"></view>
			<view class="form">
				<!-- 
				* 选择小区
				*  -->
				<x-picker label="区域范围" type="selector" :range-data="area" range-key="villageName" item-type="selector" style-type="column" @get_value="get_value"></x-picker>

				<!-- 
				* 选择开始日期
				*  -->
				<x-picker label="开始日期" type="date" style-type="column" item-type="begin_date" @get_value="get_value"></x-picker>

				<!-- 
				* 选择结束日期
				*  -->
				<x-picker label="结束日期" type="date" item-type="end_date" style-type="column" @get_value="get_value"></x-picker>
				<view class="input input-default" @tap="confirm">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
import xPicker from './x-picker.vue';
/**
 * 侧边栏组件
 * @dev 何鑫适
 * @email mnkv@163.com
 */
export default {
	data() {
		return {
			is_show: false,
			area_item: '请选择区域',
			area_id: '',
			begin_date: '请选择开始日期',
			end_date: '请选择结束日期',
			index: 0
		};
	},

	components: {
		xPicker
	},

	props: {
		area: {
			type: Array,
			default() {
				return [];
			}
		}
	},

	computed: {
		/**
		 * 处理小区列表数据
		 * @param {Object} area 小区列表数据
		 */
		set_area(area) {
			let new_area = [];
			new_area.push('请选择区域');
			this.area.forEach(v => {
				new_area.push(v.villageName);
			});
			return new_area;
		}
	},

	methods: {
		/**
		 * 禁止滑动
		 */
		move() {
			console.log('打开弹层时，禁止滑动');
		},

		/**
		 * 开启弹层
		 */
		open() {
			this.is_show = true;
		},

		/**
		 * 选择picker
		 */
		get_value(data) {
			if (data.type == 'selector') {
				this.area_item = data.value.villageName;
				this.area_id = data.value.villageId;
			} else if (data.type == 'begin_date') {
				this.begin_date = data.value;
			} else if (data.type == 'end_date') {
				this.end_date = data.value;
			}
		},

		/**
		 * 关闭弹层
		 */
		close() {
			this.is_show = false;
		},

		verify_form() {
			if (this.area_id == '' && this.begin_date == '请选择开始日期' && this.end_date == '请选择结束日期') {
				uni.showToast({
					title: '请至少选择一个筛选条件',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			if (this.area_id == '' && this.begin_date == '请选择开始日期') {
				uni.showToast({
					title: '请选择开始日期',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			if (this.area_id == '' && this.end_date == '请选择结束日期') {
				uni.showToast({
					title: '请选择结束日期',
					icon: 'none',
					duration: 2000
				});
				return false;
			}

			return true;
		},

		/**
		 * 确定操作
		 */
		confirm() {
			if (!this.verify_form()) return;
			let param = {
				xqname: this.area_item == '请选择区域' ? '' : this.area_item,
				starttime: this.begin_date == '请选择开始日期' ? '' : this.begin_date,
				endtime: this.end_date == '请选择结束日期' ? '' : this.end_date
			};
			this.$emit('confirm', param);
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
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.4);
}
.pop {
	width: 80%;
	height: 100%;
	background-color: #fff;
	box-shadow: -4upx 0 6upx #808080;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 999;
	transition: all 0.3s;
	.close {
		line-height: 80upx;
		color: #3385ff;
		text-align: left;
	}
	.form {
		margin: 32upx;
		.form-item {
			margin-bottom: 32upx;
			border-bottom: 1upx solid #f2f2f2;
			.form-item-label {
				// margin-bottom:20upx;
			}
			.form-item-block {
				height: 80upx;
				line-height: 80upx;
				color: #808080;
				font-size: 24upx;
				.ph {
					flex-grow: 1;
				}
				.icon {
					width: 44upx;
					text-align: right;
				}
			}
		}
	}
}
</style>
