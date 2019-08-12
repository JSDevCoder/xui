<template>
	<view class="container">
		<x-side-bar ref="sideBar">
			<x-button btn-type="primary" btn-size="lg" btn-block="true" btn-text="确定" @btnTap="confirm"></x-button>
			<x-button class="mt" btn-outline="primary" btn-size="lg" btn-block="true" btn-text="关闭" @btnTap="close"></x-button>
		</x-side-bar>
		<x-bottom-popover ref="bottomPopover">
			<div class="content">可填写任意内容</div>
		</x-bottom-popover>
		<x-button 
			class="mr"
			btn-type="warning"
			btn-text="点击打开sideBar" 
			@btnTap="openSideBar"
		></x-button>
		<x-button 
			class="mt"
			btn-type="info" 
			btn-text="点击打开底部弹窗" 
			@btnTap="openBottomPopover"
		></x-button>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	import xButton from '../../components/ui/button.vue'
	import xSideBar from '../../components/ui/side-bar.vue'
	import xBottomPopover from '../../components/ui/bottom-popover.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		
		components: {
			xButton,
			xSideBar,
			xBottomPopover
		},
		
		onLoad() {
			// service.test('何六', 1, 10).then(res => {
			// 	if(res.code === 1){
			// 		
			// 	}else{
			// 		service.statusHandle(res.code, res.msg);
			// 	}
			// });
		},
		methods: {
			openSideBar() {
				this.$refs.sideBar.open();
			},
			
			confirm() {
				
			},
			
			close(){
				this.$refs.sideBar.close();
			},
			
			openBottomPopover() {
				this.$refs.bottomPopover.open();
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		padding:16px;
		
		.mt{
			margin-top: 16px;
		}
		
		.mr{
			margin-right: 16px;
		}
		
		.content{
			padding:16px;
		}
	}
</style>
