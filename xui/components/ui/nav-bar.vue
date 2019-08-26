<template>
	<!-- 顶部导航 -->
	<view class="wrap">
		<view class="nav-bar">
			<view class="back" :class="backIcon ? backIcon : ''">{{back ? back : ''}}</view>
			<view class="title">{{title}}</view>
			<view class="icons">
				<view class="icon-item" v-for="(item, index) of icons" :key="index">
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
			}
		},
		computed: {
			statusBarHeight() {
				return uni.getSystemInfoSync().statusBarHeight;
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrap{
		width:100%;
		height:44px;
		background-color: #cc0200;
		color:#fff;
		
		

		.nav-bar{
			position: fixed;
			left: 0;
			right:0;
			top:0;
			z-index: 99999;
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height:44px;
			
			.back, .icons{
				min-width:48px;
				text-align:center;
			}
			
			.title{
				text-align:center;
			}
			
			.icons{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				
				.icon-item{
					flex-grow: 1;
				}
			}
		}
		
		
	}
</style>
