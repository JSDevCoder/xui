<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./ui/icon/iconfont.css");
	
	page{
		fnt-size:28upx;
		font-family: "Microsoft YaHei";
	}
	
	/**
	 * 单行溢出
	 */
	.x-single-line{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	/**
	 * 多行溢出
	 */
	.x-double-line{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
