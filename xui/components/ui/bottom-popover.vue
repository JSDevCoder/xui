<template>
	<!-- 
	 底部弹窗
	 -->
	<div class="bottom-popover" v-show="isShow">
		<!-- 遮罩 -->
		<x-mask ref="mask" @maskTap="close"></x-mask>

		<!-- 侧栏 -->
		<x-popover class="x-popover" left="0" bottom="0" right="0" min-height="40" slide="slide-bottom" ref="popover">
			<div class="title">
				<div>弹出层</div>
				<x-button btn-type="danger" btn-size="sm" btn-text="关闭" @btnTap="close"></x-button>
			</div>
			<slot></slot>
		</x-popover>
	</div>
</template>

<script>
	import xMask from './mask.vue'
	import xPopover from './popover.vue'
	import xButton from './button.vue'
	export default {
		name: 'x-bottom-popover',
		data() {
			return {
				isShow: false
			}
		},
		components: {
			xMask,
			xPopover,
			xButton
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
			}
		}
	}
</script>

<style lang="less" scoped>
	.popover{
		.title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom:1px solid #d8d8d8;
			padding:8px 16px;
		}
	}
</style>
