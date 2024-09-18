<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
    const is_test = uni.getStorageSync('is_test')
		console.log(is_test)
		if(is_test===2){
			uni.reLaunch({
				url:'/pages/choose/index'
			})
		}
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
	@import './static/iconfont.css';
	/*每个页面公共css */
	@import 'uview-plus/index.scss';
	/* ，每个页面的背景色 */
	page {
		background-color: #AAC9D7;
	}
	.font-red{
		color: #AC0404 !important;
	}
	.status_bar{
		height: calc(var(--status-bar-height) + 80rpx); 
		width: 100%;
		background-color: #fff;
	}
</style>
