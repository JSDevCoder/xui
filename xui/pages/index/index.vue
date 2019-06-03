<template>
	<view class="container">
		<view @tap="showAlert">点击我显示alert</view>
		<alert ref="alert" @confirm="confirm">123</alert>
	</view>
</template>

<script>
	
	import { mapMutations } from 'vuex'
	import index from '../../service/Index.js'
	export default {
		data() {
			return {
				ajaxStop: false,
				ajaxCount: 0
			}
		},

		components: {
			
		},

		onLoad() {
			this.indexList();
			
// 			let token = uni.getStorageSync('token');
// 
// 			if (token) {
// 				// 保持登录状态
// 				this.toLogin();
// 
// 				// 其他业务逻辑
// 
// 			} else {
// 				// uni.redirectTo({
// 				// 	url: '/pages/login/login'
// 				// });
// 			}
		},

		methods: {
			...mapMutations('users', ['toLogin']),
			
			showAlert() {
				this.$refs.alert.open();
			},
			
			confirm() {
				this.$refs.alert.close();
			},
			
			indexList(){
				index.indexList().then(res => {
					this.ajaxCountComputed();
				});
			},
			
			ajaxCountComputed() {
				const COUNT = 1;
				this.ajaxCount += 1;
				if(this.ajaxCount == COUNT){
					this.ajaxStop = true;
					console.log(this.ajaxCount)
				}
			},

			onTap(index) {
				console.log(index)
				this.activeIndex = index;
			},

			onChange(e) {
				let index = e.detail.current;
				console.log(index)
				this.currentIndex = index;
			}
		}
	}
</script>

<style lang="less" scoped>

</style>
