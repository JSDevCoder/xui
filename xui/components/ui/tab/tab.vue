<template>
	<view class="tab">
		<view class="tab-head">
			<view class="tab-head-item"></view>
		</view>
		<view class="tab-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		mounted() {
			console.log(this.$children)
		},

		methods: {
			updateNav() {
				return this.$children.filter(function(item) {
					console.log(item.$options)
					return item.$options.name === 'tab-pane'
				})
			}
		}
	}
</script>

<style lang="less" scoped>

</style>
