<!--
 * @Description: 顶部导航栏组件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-19 15:14:21
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-19 15:14:29
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" :title="title" :placeholder="true">
			<template #left>
				<image @click="handleBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
</template>

<script setup>
import { defineProps } from 'vue';
	const props = defineProps({
		title: {
			type: String,
			required: true
		}
	});

	const handleBack = () => {
		uni.navigateBack()
	}
</script>

<style>
	.header {
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
</style>