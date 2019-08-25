<template>
	<!-- 
	 遮罩
	 -->
	 <view class="mask" v-if="isShow" @tap="tapMask"></view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		
		methods: {
			open() {
				this.isShow = true;
			},
			
			close() {
				this.isShow = false;
			},
			
			tapMask() {
				this.$emit('tapMask');
			}
		}
	}
</script>

<style lang="less" scoped>
	.mask{
		position: fixed;
		left:0;
		top: 0;
		bottom: 0;
		right:0;
		background-color: rgba(0, 0, 0, .6);
		transition: all .3s;
		z-index: 998;
	}
</style>
