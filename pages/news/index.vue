<!--
 * @Description: 全部新闻页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:36:58
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-19 15:14:16
-->
<template>	
	<headerComponent title="新闻"></headerComponent>
	<view class="container">
		<view class="wholeBox">
			<view v-for="(item,index) in newsList" :key="index" class="newBox" @click="toDetail(item.news_id)">
				<img class="newsImg" :src="item.icon_url" alt="" />
				<p class="title">{{item.title}}</p>
				<p class="time font-red">NEWS {{item.date}}</p>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, getCurrentInstance } from 'vue'
	import { getNewsListAPI } from '@/api/home.js'
	import { timestampToTime } from '@/utils/time.js'
	
	const newsList = ref([])
	
	onMounted( async () => {
		await getNewsList()
	})
	
	/**
	 * 获取新闻列表
	 */
	const getNewsList = async ()=>{
		await getNewsListAPI()
		.then((res)=>{
			newsList.value = res
			newsList.value.forEach((item)=>{
				item.date = timestampToTime(Number(item.date))
			})
			console.log(newsList.value)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const toDetail = (news_id)=>{
		uni.navigateTo({
			url: '/pages/news/detail?news_id=' + news_id
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
			.wholeBox{
				display: flex;
				flex-wrap: wrap;
				width: 96%;
				margin: 10rpx auto;
				.newBox{
					background-color: #fff;
					border-radius: 10rpx;
					width: 48%;
					margin: 10rpx 1% 0;
					img{
						width: 100%;
						height: 200rpx;
						border-top-right-radius: 10rpx;
						border-top-left-radius: 10rpx;
					}
					.title{
						width: 100%;
						display: -webkit-box;//对象作为弹性伸缩盒子模型显示
						overflow: hidden;//溢出隐藏
						-webkit-box-orient: vertical;//设置伸缩盒子对象的子元素的排列方式
						-webkit-line-clamp: 1;//设置 块元素包含的文本行数
					}
					.time{
						font-size: 20rpx;
					}
				}
			}
	}
</style>