<!--
 * @Description: 新闻详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:20:00
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-19 15:14:56
-->
<template>
	<headerComponent title="新闻"></headerComponent>
	<view class="container">
		<view class="imgBox">
			<up-image :src="news_info.icon_url" width="100%" height="320rpx"></up-image>	
		</view>
		<view class="introBox">
			<view class="intro">
				<span class="title">{{news_info.title}}</span>
				<span class="font-red">NEWS {{news_info.date}}</span>
			</view>
			<view class="starImg">
				<image src="/assets/icon/icon_major_detail_star.png" style="width: 70rpx; height: 70rpx;"></image>	
				收藏
			</view>
		</view>
		<view class="contentBox">
			<pre>{{news_info.body}}</pre>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, getCurrentInstance } from 'vue'
	import { getNewsDetailAPI } from '@/api/news.js'
	import { timestampToDate } from '../../utils/time.js'

	onMounted( async () => {
		const options = getCurrentInstance()
		if(options.attrs.news_id)
			news_id.value = options.attrs.news_id
		else if(options.attrs.__pageInstance)
			news_id.value = options.attrs.__pageInstance.options.news_id
		getnewsDetail()
	})
	const news_id = ref(1)
	const news_info = ref({})
	
	/**
	 * 获取详细新闻信息
	 */
	const getnewsDetail = async ()=>{
		const query = "news_id=" + news_id.value
		await getNewsDetailAPI(query)
		.then((res)=>{
			console.log(res)
			news_info.value = res
			news_info.value.date = timestampToDate(news_info.value.date)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const toBack = ()=>{
		uni.navigateBack()
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
		.imgBox{
			width: 100%;
		}
		.introBox{
			width: 94%;
			margin: 10rpx auto 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.intro{
				display: flex;
				flex-direction: column;
				font-size: 24rpx;
				.title{
					font-size: 34rpx;
					font-weight: 600;
					margin-bottom: 10rpx;
				}
			}
			.starImg{
				margin-left: 10rpx;
				font-size: 14rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
		.contentBox{
			width: 90%;
			margin: 10rpx auto;
			padding: 10rpx;
			background-color: #fff;
			border-radius: 20rpx;
			font-size: 26rpx;
			line-height: 40rpx;
			pre{
				white-space: pre-wrap; /* 保留格式，同时处理换行 */
				overflow-wrap: break-word; /* 强制换行 */
			}
		}
	}
</style>