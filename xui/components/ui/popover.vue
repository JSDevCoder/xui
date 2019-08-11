<template>
	<!-- 
	 弹出层
	 -->
	 <div 
		class="popover"
		:style="pos"
		v-show="isShow"
	 >
		 <slot></slot>
	 </div>
</template>

<script>
	export default {
		name: 'x-popover',
		data() {
			return {
				isShow: false
			}
		},
		props: {
			// 弹出层的位置
			position: {
				type: String,
				default: 'fixed'
			},
			
			left: {
				type: String,
				default: ''
			},
			
			right: {
				type: String,
				default: ''
			},
			
			top: {
				type: String,
				default: ''
			},
			
			bottom: {
				type: String,
				default: ''
			},
			
			// 弹出层的宽度
			width: {
				type: String,
				default: '100'
			},
			
			// 弹出层最小高度
			minHeight: {
				type: String,
				default: '40'
			},
			
			// 背景颜色
			bgColor: {
				type: String,
				default: '#fff'
			}
		},
		
		computed: {
			pos() {
				const position = this.position;
				const left = this.left ? this.left + 'rpx' :  '';
				const right = this.right ? this.right + 'rpx' : '';
				const top = this.top ? this.top + 'rpx' : '';
				const bottom = this.bottom ? this.bottom + 'rpx' : '';
				const width = this.width + '%';
				const minHeight = this.minHeight + '%';
				const backgroundColor = this.bgColor;
				return {position, left, right, top, bottom, width, minHeight, backgroundColor};
			}
		},
		
		created() {
			console.log(this.pos)
		},
		
		methods: {
			open() {
				this.isShow = true;
			},
			
			close() {
				this.isShow = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	.popover{
		
	}
</style>
