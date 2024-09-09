<!--
 * @Description: 选择岗位/性格测试页面
 * @Author: yuennchan@163.com
 * @Date: 2024-09-04 16:52:48
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-09 17:55:52
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" :title="if_test===1?'性格测试':'选择岗位'" :placeholder="true" >
			<template #left>
				<span></span>
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<template v-if="if_test === -1">
			<view class="testChoose" @click="handleTestChoose(0)">
				有心仪岗位，去选择岗位
			</view>
			<view class="testChoose" @click="handleTestChoose(1)">
				无心仪岗位，去做性格测试获取推荐岗位
			</view>
		</template>
		<template v-if="if_test === 0">
			<view style="width: 90%; margin: 0 auto; padding: 20rpx 0;" @click="handleTestChoose(0)">
				<job @submit="submit" />
			</view>
		</template>
		<template v-if="if_test === 1">
			<view style="width: 90%; margin: 0 auto; padding: 20rpx 0;">
				<myForm @submit="submit" />
			</view>
		</template>
		
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import myForm from './component/myForm.vue'
	import job from './component/job.vue'
	
	const if_test = ref(-1)
	
	const handleTestChoose = (type)=>{
		if_test.value = type
	}
	const submit = (params)=>{
		console.log(params)
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
		.testChoose{
			display: flex;
			align-items: center;
			text-align: center;
			border-radius: 20rpx;
			height: 300rpx;
			width: 400rpx;
			background-color: #fff;
			color: #515151;
			font-size: 40rpx;
			letter-spacing: 5rpx;
			padding-left: 5rpx;
			font-weight: 600;
			margin: 100rpx 0;
		}
	}
</style>