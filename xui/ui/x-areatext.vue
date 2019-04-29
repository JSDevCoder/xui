<template>
	<view class="x-areatext">
		<view class="label">{{label}}</view>
		<view class="block">
			<textarea class="textarea" :value="value" :data-name="label" @input="set_value" :placeholder-style="'color:' + placeholder" :placeholder="'请输入' + label" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			};
		},
		
		props: {
			label: {
				type: String,
				default: ''
			},
			
			placeholder: {
				type: String,
				default: '#808080'
			}
		},
		
		methods: {
			set_value(e) {
				let name = e.currentTarget.dataset.name;
				this.value = e.detail.value;
				this.$emit('get_value', {value: e.detail.value, name});
			}
		}
	}
</script>

<style lang="less" scoped>
.x-areatext{
	border-bottom: 1upx solid #f2f2f2;
	background-color:#fff;
	.label{
		height:80upx;
		line-height:80upx;
		padding:0 32upx;
		font-size:32upx;
	}
	.textarea{
		width:inherit;
		height:200upx;
		padding:0 32upx;
		font-size:28upx;
	}
}
</style>
