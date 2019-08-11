<template>
	<view class="container">
		<x-button btn-type="primary" btn-text="primary"></x-button>
		<x-button btn-type="secondary" btn-text="secondary"></x-button>
		<x-button btn-type="success" btn-text="success"></x-button>
		<x-button btn-type="danger" btn-text="danger"></x-button>
		<x-button btn-type="warning" btn-text="warning"></x-button>
		<x-button btn-type="info" btn-text="info"></x-button>
		<x-button btn-type="light" btn-text="light"></x-button>
		<x-button btn-type="dark" btn-text="dark"></x-button>
		<x-button btn-type="link" btn-text="link"></x-button>
		<x-button btn-outline="primary" btn-text="primary"></x-button>
		<x-button btn-outline="secondary" btn-text="secondary"></x-button>
		<x-button btn-outline="success" btn-text="success"></x-button>
		<x-button btn-outline="danger" btn-text="danger"></x-button>
		<x-button btn-outline="warning" btn-text="warning"></x-button>
		<x-button btn-outline="info" btn-text="info"></x-button>
		<x-button btn-outline="light" btn-text="light"></x-button>
		<x-button btn-outline="dark" btn-text="dark"></x-button>
		<x-button btn-outline="link" btn-text="link"></x-button>
		<x-button btn-type="primary" btn-size="lg" btn-text="large btn"></x-button>
		<x-button btn-outline="primary" btn-size="lg" btn-text="大按钮"></x-button>
		<x-button btn-type="primary" btn-size="sm" btn-text="small btn"></x-button>
		<x-button btn-outline="primary" btn-size="sm" btn-text="小按钮"></x-button>
		<x-button btn-type="primary" btn-size="sm" btn-block="true" btn-text="small btn"></x-button>
		<x-button btn-outline="primary" btn-size="sm" btn-block="true" btn-text="小按钮"></x-button>
		<x-side-bar ref="sideBar"></x-side-bar>
		<view @tap="openSideBar">点击打开sideBar</view>
	</view>
</template>

<script>
	import service from '../../common/service.js'
	import xButton from '../../components/ui/button.vue'
	import xSideBar from '../../components/ui/side-bar.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		
		components: {
			xButton,
			xSideBar
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
			}
		}
	}
</script>

<style>
	.container{
		padding:2rem;
	}
</style>
