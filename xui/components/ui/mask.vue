<template>
	<!-- 
	 遮罩
	 -->
	 <div class="mask" v-show="isShow" @tap="maskTap"></div>
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
			
			maskTap() {
				this.$emit('maskTap');
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
	}
</style>
