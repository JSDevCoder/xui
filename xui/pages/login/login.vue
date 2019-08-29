<template>
	<view class="container">
		<!-- #ifdef H5 -->
		<x-nav-bar title="用户登录"></x-nav-bar>
		<x-loading ref="loading"></x-loading>
		<!-- #endif -->
		
		<form @submit="submitForm" @reset="resetForm">
			<view class="form">
				<view class="form-item">
					<view class="form-item-label">手机号</view>
					<input class="form-item-input" type="number" name="mobile" v-model="mobile" placeholder="请输入手机号" />
				</view>
				<view class="form-item">
					<view class="form-item-label">密码</view>
					<input class="form-item-input" type="text" password="true" name="password" v-model="password" placeholder="请输入手机号" />
				</view>
				
				<button class="submit" form-type="submit">登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	// #ifdef H5
	import xNavBar from '../../components/ui/nav-bar.vue'
	import xLoading from '../../components/ui/loading.vue'
	// #endif
	import tools from '../../common/tools.js'
	import service from '../../common/service.js'
	export default {
		data() {
			return {
				mobile: '15291985843',
				password: '123456'
			};
		},
		
		components: {
			// #ifdef H5
			xNavBar,
			xLoading
			// #endif
			
		},

		onLoad() {
			// #ifdef APP-PLUS
			this.createNavBar();
			// #endif
		},

		methods: {
			// #ifdef APP-PLUS
			createNavBar() {
				const navBar = uni.getSubNVueById('navBar__login');
				plus.webview.postMessageToUniNView({
					title: '用户登录'
				}, 'navBar__login')
				navBar.show();
			},
			
			createLoading() {
				const loading = uni.getSubNVueById('loading');
				loading.show();
			},
			
			removeLoading() {
				const loading = uni.getSubNVueById('loading');
				loading.hide();
			},
			// #endif
			
			// #ifdef H5
			createLoading__H5() {
				this.$refs.loading.open();
			},
			
			removeLoading__H5(){
				this.$refs.loading.close();
			},
			// #endif
			
			verifyForm(data) {
				const mobile = data.mobile || '';
				const password = data.password || '';
				if(tools.isEmpty(mobile)){
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 2000,
						position: 'bottom'
					});
					return false;
				}
				
				if(!tools.isMobile(mobile)){
					uni.showToast({
						title: '手机号格式输入有误',
						icon: 'none',
						duration: 2000,
						position: 'bottom'
					});
					return false;
				}
				
				if(tools.isEmpty(password)){
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 2000,
						position: 'bottom'
					});
					return false;
				}
				
				return true;
			},
			
			submitForm(e) {
				const data = e.detail.value;
				if(!this.verifyForm(data)) return;
				// #ifdef APP-PLUS
				this.createLoading();
				// #endif
				// #ifdef H5
				this.createLoading__H5();
				// #endif
				service.login(data.mobile, data.password).then(res => {
					// #ifdef APP-PLUS
					this.removeLoading();
					// #endif
					// #ifdef H5
					this.removeLoading__H5();
					// #endif
					if(res.code === 1){
						const token = res.data.token;
						uni.setStorageSync('token', token);
						uni.showToast({
							title: res.msg,
							icon: 'none',
							duration: 2000,
							position: 'bottom'
						});
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/index/index'
							});
						}, 800)
					}else{
						service.statusCodeHandle(res.code, res.msg);
					}
				});
				
			},
		}
	}
</script>

<style lang="less" scoped>
	.form{
		padding: 20px;
		
		.form-item{
			display:flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			height:40px;
			border-bottom: 1px solid #d8d8d8;
			
			&:last-child{
				border-bottom: none;
			}
			
			.form-item-label{
				width: 80px;
			}
		}
		
		.submit{
			display:block;
			background-color: #cc0200;
			color: #fff;
			width:100%;
			height:40px;
			line-height:40px;
			margin-top:20px;
			font-size:14px;
		}
	}
</style>
