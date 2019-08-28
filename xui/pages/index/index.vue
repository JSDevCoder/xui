<template>
	<view class="container">
		<!-- #ifdef H5 -->
		<!-- H5导航条 -->
		<x-nav-bar back="返回" title="H5标题哟" :icons="icons" @tapIcon="tapIcon"></x-nav-bar>
		<!-- #endif -->
		
		
		<!-- 侧栏 -->
		<x-side-bar ref="sideBar">
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="closePopover('sidebar')">关闭</button>
			</view>
		</x-side-bar>

		<!-- 底部弹窗 -->
		<x-bottom-popover ref="bottomPopover">
			<view>可填写任意内容</view>
			<view class="content">
				<button type="primary" @tap="confirm">确定</button>
				<button class="mt" type="default" plane @tap="closePopover('bottom')">关闭</button>
			</view>
		</x-bottom-popover>
		
		<x-loading ref="vueLoading"></x-loading>
		
		<view class="btns">
			<button type="primary" @tap="openSideBar">点击打开侧栏</button>
			<button class="mt" type="default" @tap="openBottomPopover">点击打开底部弹窗</button>
			<button class="mt" type="default" @tap="openVueLoading">点击打开loding(vue)</button>
			<!-- #ifdef APP-PLUS -->
			<button class="mt" type="primary" @tap="openNVue">点击打开nvue窗口</button>
			<button class="mt" type="primary" @tap="openNvueLoading">点击打开loading(nvue)</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	import xSideBar from '../../components/ui/side-bar.vue'
	import xBottomPopover from '../../components/ui/bottom-popover.vue'
	import xLoading from '../../components/ui/loading.vue'
	// #ifdef H5
	import xNavBar from '../../components/ui/nav-bar.vue'
	// #endif
	
	export default {
		data() {
			return {
				title: 'Hello',
				icons: [{
					text: '侧栏'
				}, {
					text: '底栏'
				}]
			}
		},

		components: {
			xSideBar,
			xBottomPopover,
			xLoading,
			// #ifdef H5
			xNavBar
			// #endif
		},

		onLoad() {
			// #ifdef APP-PLUS
			this.createNavBar();
			console.log(123)
			// #endif
			
			// service.test().then(res => {
			// 	if(res.code === 1){
			// 		
			// 	}else{
			// 		service.statusCodeHandle(res.code, res.msg);
			// 	}
			// });
			
		},
		methods: {
			// #ifdef H5
			tapIcon(index) {
				console.log(index)
				console.log('当前点击了第' + index + '个icon')
				console.log(this.icons[index])
				
				if(index === 0){
					this.openSideBar();
				}else if(index === 1) {
					this.openBottomPopover();
				}
				
			},
			// #endif
			
			// #ifdef APP-PLUS
			createNavBar() {
				const navBar = uni.getSubNVueById('navBar');
				
				plus.webview.postMessageToUniNView({
					title: '测试一下哟'
				}, 'navBar')
				
				navBar.show();
			},
			
			openNVue() {
				const popup = uni.getSubNVueById('pop');
				popup.setStyle({
					width: '80%',
					height: '100%'
				})
				popup.show('slide-in-left');
			},
			
			openNvueLoading() {
				const loading = uni.getSubNVueById('loading');
				loading.show();
			},
			
			// #endif
			
			openVueLoading() {
				this.$refs.vueLoading.open();
			},
			
			openSideBar() {
				this.$refs.sideBar.open();
			},
			
			openBottomPopover() {
				this.$refs.bottomPopover.open();
			},
			
			confirm(){
				console.log('确定哦');
			},
			
			closePopover(flag) {
				if(flag === 'sidebar'){
					this.$refs.sideBar.close();
				}else if(flag === 'bottom'){
					this.$refs.bottomPopover.close();
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {

		.mt {
			margin-top: 16px;
		}

		.mr {
			margin-right: 16px;
		}

		.content {
			padding: 16px;
		}
		
		.btns{
			padding:16px;
		}
	}
</style>
