<template>
	<view>
		<x-input label="用户名" @get_value="get_user_value"></x-input>
		<x-input label="密码" :pwd="pwd" @get_value="get_pwd_value"></x-input>
		<x-button class="x-button" type="info" @tap="submit"></x-button>
	</view>
</template>

<script>
import xInput from '../../ui/x-input.vue';
import xButton from '../../ui/x-button.vue';
export default {
	data() {
		return {
			user_value: '',
			pwd_value: '',
			pwd: true
		};
	},

	components: {
		xInput,
		xButton
	},

	methods: {
		get_user_value(value) {
			console.log(value);
			this.user_value = value;
		},

		get_pwd_value(value) {
			this.pwd_value = value;
		},

		submit() {
			console.log(123);
			console.log(this.user_value);
			console.log(this.pwd_value);
		}
	}
};
</script>

<style lang="less" scoped></style>
