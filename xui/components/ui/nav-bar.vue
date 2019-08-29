<template>
	<!-- 顶部导航 -->
	<view class="wrap">
		<view class="nav-bar" :style="{backgroundColor: bgColor, color: color}">
			<view class="back" :class="backIcon ? backIcon : ''" @tap="toBack">{{back ? back : ''}}</view>
			<view class="title">{{title}}</view>
			<view class="icons">
				<view class="icon-item" v-for="(item, index) of icons" :key="index" @tap="tapIcon(index)">
					<view :class="item.icon ? item.icon : ''">{{item.text ? item.text : ''}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '默认标题'
			},
			
			back: {
				type: String,
				default: ''
			},
			
			backIcon: {
				type: String,
				default: ''
			},
			
			icons: {
				type: Array,
				default() {
					return [];
				}
			},
			
			bgColor: {
				type: String,
				default: '#fff'
			},
			
			color: {
				type: String,
				default: '#333'
			}
		},
		
		computed: {
			statusBarHeight() {
				return uni.getSystemInfoSync().statusBarHeight;
			}
		},
		methods: {
			
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			tapIcon(index) {
				this.$emit('tapIcon', index);
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrap{
		width:100%;
		height:44px;
		
		.nav-bar{
			position: fixed;
			left: 0;
			right:0;
			top:0;
			z-index: 998;
			height:44px;
			box-shadow: 0 1px 1px #d8d8d8;
			
			.back, .icons{
				min-width:44px;
				height:44px;
				text-align:center;
				position: absolute;
				top:0;
			}
			
			.back, .title{
				line-height:44px;
			}
			
			.back{
				left:0;
			}
			
			.title{
				text-align:center;
			}
			
			.icons{
				right:0;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				
				.icon-item{
					flex-grow: 1;
					padding: 0 6px;
				}
			}
		}
		
		
	}
</style>
