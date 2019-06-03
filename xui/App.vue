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
	/* 多行溢出 */
	.more-line-hidden{
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		display: -webkit-box;
		overflow: hidden;
	}
	
	/* 单行溢出 */
	.single-line-hidden{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>
