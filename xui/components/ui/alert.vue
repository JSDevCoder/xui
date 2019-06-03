<template>
	<view class="wrap" v-if="is_show">
		<view class="mask"></view>
		<view class="alert">
			<view class="alert-title">{{title}}</view>
			<view class="alert-content">
				<view v-if="content">{{content}}</view>
				<slot></slot>
			</view>
			<view class="alert-btns" @tap="confirm">
				{{btnTxt}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_show: false
			}
		},
		
		props: {
			title: {
				type: String,
				default: '提示信息'
			},
			
			content: {
				type: String,
				default: ''
			},
			
			btnTxt: {
				type: String,
				default: '确定'
			}
		},
		
		methods: {
			/**
			 * 打开弹窗
			 */
			open() {
				this.is_show = true;
			},
			
			/**
			 * 关闭弹窗
			 */
			close() {
				this.is_show = false;
			},
			
			/**
			 * 确定操作
			 */
			confirm() {
				this.$emit('confirm');
			}
		}
	}
</script>

<style lang="less" scoped>
	.mask{
		position:fixed;
		left:0;
		top:0;
		z-index:998;
		width:100%;
		height:100%;
		background-color:rgba(0, 0, 0, .4);
	}
	
	.alert{
		animation: ani-02 .3s linear;
		position:fixed;
		left:75upx;
		top:50%;
		z-index: 999;
		width:600upx;
		min-height:300upx;
		margin-top:-150upx;
		border-radius:20upx;
		background-color:#fff;
		
		.alert-title{
			padding:0 20upx;
			height:88upx;
			line-height:88upx;
			border-bottom:1upx solid #f2f2f2;
		}
		
		.alert-content{
			min-height:82upx;
			padding:20upx;
		}
		
		.alert-btns{
			height:88upx;
			line-height:88upx;
			border-top:1upx solid #f2f2f2;
			text-align:center;
		}
		.alert-btns:active{
			background-color:#f2f2f2;
		}
		
	}
	
	@keyframes ani-02 {
		0% {
			top: 0
		}
		100% {
			top: 150px
		}
	}
</style>
