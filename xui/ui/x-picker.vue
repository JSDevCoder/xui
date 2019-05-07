<template>
	<picker 
		:mode="type" 
		:data-name="label" 
		@change="set_value"
		:data-type="type" 
		:range="rangeData"
		:range-key="rangeKey"
	>
		<view :class="'x-picker__' + styleType">
			<view class="label">{{label}}</view>
			<view class="block">
				<view class="ph">{{ value }}</view>
				<view class="icon iconfont icon-xiala"></view>
			</view>
		</view>
	</picker>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				value: '请选择' + this.label
			};
		},
		
		props: {
			// 标签名称
			label: {
				type: String,
				default: ''
			},
			
			// 逻辑分类，目的是区分不同的功能
			itemType: {
				type: String,
				default: ''
			},
			
			// 弹出层类型，1.普通单选、2.时间日期选择
			type: {
				type: String,
				default: ''
			},
			
			// 显示的样式类别， 1.row：横向排列 2.column 竖向排列
			styleType: {
				type: String,
				default: 'row'
			},
			
			// 当类型为单选时的默认数据
			rangeData: {
				type: Array,
				default: () => {
					return [];
				}
			},
			
			rangeKey: {
				type: String,
				default: ''
			}
		},
		
		methods: {
			/**
			 * 设置选择后的值
			 * @param {Object} e
			 */
			set_value(e) {
				let value;
				if(this.type === 'selector'){
					value = this.rangeData[e.detail.value];
					if(this.rangeKey){
						this.value = this.rangeData[e.detail.value][this.rangeKey]
					}else{
						this.value = this.rangeData[e.detail.value];
					}
					
				}else{
					value = e.detail.value;
					this.value = e.detail.value;
				}
				this.$emit('get_value', {value: value, type: this.itemType});
			}
		}
	}
</script>

<style lang="less" scoped>
.x-picker__row, .x-picker__column{
	border-bottom: 1upx solid #f2f2f2;
	background-color:#fff;
	
	.label{
		height:80upx;
		line-height:80upx;
		font-size:32upx;
	}
	.block{
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
		.ph, .icon{
			height:80upx;
			line-height:80upx;
		}
		.ph{
			flex-grow: 1;
			color:#808080;
		}
		.icon{
			width:80upx;
			text-align:right;
		}
	}
}
.x-picker__column{
	.label{
		width:686upx;
	}
	.block{
		width:686upx;
	}
}
.x-picker__row{
	display:flex;
	flex-direction: row;
	justify-content: flex-start;
	padding:0 32upx;
	.label{
		width:128upx;
	}
	.block{
		width:558upx;
		.ph{
			padding-left:20upx;
		}
	}
}
</style>
