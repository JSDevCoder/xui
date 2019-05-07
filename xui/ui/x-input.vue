<template>
	<view class="x-input">
		<view class="label x-single-line">{{ label }}</view>
		<view class="block">
			<input
				class="ipt"
				:type="type"
				:password="pwd && is_show_pwd"
				:data-name="label"
				@input="get_value"
				:placeholder-style="'color:' + placeholder"
				:placeholder="'请输入' + label"
				:value="valueData"
				:disabled="forbidden"
			/>
			<view class="clear iconfont icon-qingkong" :style="{ right: pwd ? '26px' : 0 }" v-if="value.length" @tap="clear"></view>
			<view :class="'show iconfont icon-mimaxianshi' + (is_show_pwd ? '' : '1')" v-if="pwd && value.length" @tap="show_pwd"></view>
		</view>
	</view>
</template>

<script>
/**
 * input组件
 * @dev 何鑫适
 * @email mnkv@163.com
 */
export default {
	data() {
		return {
			value: '',
			is_show_pwd: true
		};
	},

	props: {
		label: {
			type: String,
			default: ''
		},

		type: {
			type: String,
			default: 'text'
		},

		pwd: {
			type: Boolean,
			default: false
		},

		placeholder: {
			type: String,
			default: '#808080'
		},
		
		forbidden: {
			type: Boolean,
			default: false
		},
		
		valueData: {
			type: String,
			default: ''
		}
	},
	
	watch: {
		valueData(val) {
			this.valueData = val;
		}
	},

	methods: {
		get_value(e) {
			let name = e.currentTarget.dataset.name;
			this.value = e.detail.value;
			this.$emit('get_value', { value: e.detail.value, name });
		},

		clear() {
			this.value = '';
		},

		show_pwd() {
			if (this.is_show_pwd) {
				this.is_show_pwd = false;
			} else {
				this.is_show_pwd = true;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.x-input {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	border-bottom: 1upx solid #f2f2f2;
	background-color: #fff;
	.label {
		width: 128upx;
		min-width: 128upx;
		height: 80upx;
		line-height: 80upx;
		padding-left: 32upx;
		font-size: 32upx;
	}
	.block {
		width: 558upx;
		line-height:80upx;
		position: relative;
		.ipt {
			width: 518upx;
			height: 80upx;
			padding: 0 20upx;
			font-size: 28upx;
		}
		.clear {
			width: 40upx;
			height: 40upx;
			color: #c4c4c4;
			font-size: 36upx;
			text-align: right;
			position: absolute;
			right: 0;
			top: 20upx;
			z-index: 999;
		}
		.show {
			width: 40upx;
			height: 40upx;
			color: #c4c4c4;
			font-size: 36upx;
			text-align: right;
			position: absolute;
			right: 0;
			top: 20upx;
			z-index: 999;
		}
		.placeholder {
			color: #808080;
		}
	}
}
</style>
