<template>
	<!-- 
	 side-bar包含侧栏与遮罩
	 -->
	<div class="side-bar-wrap" v-show="isShow">
		<!-- 遮罩 -->
		<x-mask ref="mask" @maskTap="maskTap"></x-mask>
		
		<!-- 侧栏 -->
		<x-popover left="0" bottom="0" width="50" min-height="100" ref="popover">
			<div @tap="close">点击关闭</div>
		</x-popover>
	</div>
</template>

<script>
	import xMask from './mask.vue'
	import xPopover from './popover.vue'
	export default {
		data() {
			return {
				isShow: false
			}
		},
		components: {
			xMask,
			xPopover
		},
		
		methods: {
			open() {
				this.isShow = true;
				this.$refs.mask.open();
				this.$refs.popover.open();
			},
			
			close() {
				this.isShow = false;
				this.$refs.mask.close();
				this.$refs.popover.close();
			},
			
			maskTap() {
				this.close();
			}
		}
	}
</script>

<style>
</style>
