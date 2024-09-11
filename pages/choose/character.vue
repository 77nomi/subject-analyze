<!--
 * @Description: 选择角色页面
 * @Author: yuennchan@163.com
 * @Date: 2024-09-04 15:33:58
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-11 16:12:51
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="选择角色" :placeholder="true" >
			<template #left>
				<span></span>
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="chooseBox" @click="handleChoose(0)">
			学生
		</view>
		<view class="chooseBox" @click="handleChoose(1)">
			教师
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	
	const handleChoose = (type)=>{
		if (type === 0) {
			uni.reLaunch({
				url: '/pages/user/login/index'
			})
		} else {
			uni.showToast({
				icon: 'none',
				title: '更多功能正在开发中'
			})
		}
	}
</script>

<style lang="scss">
	.header{
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
	.container{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.chooseBox{
			line-height: 300rpx;
			text-align: center;
			border-radius: 20rpx;
			height: 300rpx;
			width: 400rpx;
			background-color: #fff;
			color: #515151;
			font-size: 40rpx;
			letter-spacing: 40rpx;
			padding-left: 40rpx;
			font-weight: 600;
			margin: 100rpx 0;
		}
	}
</style>