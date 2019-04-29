<template>
	<picker :mode="type" :data-name="label" @change="set_value" :data-type="type" :range="rangeData">
		<view class="x-picker-date">
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
				value: '请选择' + this.label
			};
		},
		
		props: {
			label: {
				type: String,
				default: ''
			},
			
			type: {
				type: String,
				default: ''
			},
			
			rangeData: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		
		methods: {
			set_value(e) {
				let name = e.currentTarget.dataset.name;
				if(this.type === 'selector'){
					this.value = this.rangeData[e.detail.value];
				}else{
					this.value = e.detail.value;
				}
				this.$emit('get_value', {value: this.value, name});
			}
		}
	}
</script>

<style lang="less" scoped>
.x-picker-date{
	border-bottom: 1upx solid #f2f2f2;
	background-color:#fff;
	padding:0 32upx;
	display:flex;
	flex-direction: row;
	justify-content: flex-start;
	.label{
		width:128upx;
		height:80upx;
		line-height:80upx;
		font-size:32upx;
	}
	.block{
		width:558upx;
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
		.ph, .icon{
			height:80upx;
			line-height:80upx;
		}
		.ph{
			flex-grow: 1;
			padding-left: 20upx;
			color:#808080;
		}
		.icon{
			width:80upx;
			text-align:right;
		}
	}
}
</style>
