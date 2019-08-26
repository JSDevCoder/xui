<template>
	<view class="container">
		<!-- 遮罩 -->
		<x-mask ref="mask" @tapMask="tapMask"></x-mask>
		
		<!-- 侧栏 -->
		<x-side-bar ref="sideBar">
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="tapMask">关闭</button>
			</view>
		</x-side-bar>

		<!-- 底部弹窗 -->
		<x-bottom-popover ref="bottomPopover">
			<view>可填写任意内容</view>
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="tapMask">关闭</button>
			</view>
		</x-bottom-popover>
		
		<button type="primary" @tap="openSideBar">点击打开侧栏</button>
		<button class="mt" type="default" @tap="openBottomPopover">点击打开底部弹窗</button>
		<!-- #ifdef APP-PLUS -->
		<button class="mt" type="primary" @tap="openNVue">点击打开nvue窗口</button>
		<!-- #endif -->
	</view>
</template>

<script>
	import service from '../../common/service.js'
	import xSideBar from '../../components/ui/side-bar.vue'
	import xBottomPopover from '../../components/ui/bottom-popover.vue'
	import xMask from '../../components/ui/mask.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},

		components: {
			xSideBar,
			xBottomPopover,
			xMask
		},

		onLoad() {
			// #ifdef APP-PLUS
			const navBar = uni.getSubNVueById('navBar');

			plus.webview.postMessageToUniNView({
				title: '测试一下哟'
			}, 'navBar')

			navBar.show();
			
			// #endif
		},
		methods: {
			// #ifdef APP-PLUS
			openNVue() {
				const popup = uni.getSubNVueById('pop');
				popup.setStyle({
					width: '80%',
					height: '100%'
				})
				popup.show('slide-in-left');
			},
			
			// #endif
			
			openSideBar() {
				this.$refs.sideBar.open();
				this.$refs.mask.open();
			},
			
			openBottomPopover() {
				this.$refs.bottomPopover.open();
				this.$refs.mask.open();
			},

			tapMask() {
				this.$refs.mask.close();
				if(this.$refs.sideBar.isShow){
					this.$refs.sideBar.close();
				}else{
					this.$refs.bottomPopover.close();
				}
			},
			
			confirm(){
				console.log('确定哦');
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding: 16px;

		.mt {
			margin-top: 16px;
		}

		.mr {
			margin-right: 16px;
		}

		.content {
			padding: 16px;
		}
	}
</style>
