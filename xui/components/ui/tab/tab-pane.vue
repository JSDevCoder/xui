<template>
	<view class="tab-pane"></view>
</template>

<script>
	export default {
		props: ['label'],
		mounted() {
			this.updateNav()
		},
		methods: {
			updateNav() {
				console.log(this.$parent.updateNav());
			}
		},
		
		watch: {
			label() {
				this.updateNav();
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>
