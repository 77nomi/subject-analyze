<template>
	<view class="header">
		<up-navbar height="80rpx" title="注册" :placeholder="true" >
			<template #left>
				<up-image src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.header{
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
</style>