<template>
	<view>
		<x-input label="用户名" @get_value="get_value"></x-input>
	</view>
</template>

<script>
	import xInput from '../../ui/x-input.vue'
	export default {
		data() {
			return {
				value: ''
			};
		},
		
		components: {
			xInput
		},
		
		methods: {
			get_value(value) {
				console.log(value)
			}
		}
	}
</script>

<style lang="less">

</style>
