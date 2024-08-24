<!--
 * @Description: 就业规划学科分类页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:19:45
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-24 18:53:26
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="就业规划-学科分类" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="main-container">
			<template v-for="(type, typeIndex) in allMajorList" :key="typeIndex">
				<view class="title">
					{{type.major_type}}
				</view>
				<view class="major-box">
					<view class="major" v-for="(major, index) in type.majorList" :key="index" @click="toDetail(major.major_id)">
						<span class="text">{{major.major_name}}</span>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getMajorListAPI } from '@/api/career.js'

	onMounted( async () => {
		await getMajorList()
	})
	
	const allMajorList = ref([])
	
	/**
	 * 获取学科列表
	 */
	const getMajorList = async()=>{
		let majorMap = {}
		const buildTree = (dataList)=>{
			dataList.forEach((item)=>{
				if(item.major_type in majorMap){
					majorMap[item.major_type].push({'major_id':item.major_id, 'major_name': item.major_name})
				}else{
					majorMap[item.major_type] = [{'major_id':item.major_id, 'major_name': item.major_name}]
				}
			})
			for(const item in majorMap) {
				allMajorList.value.push({'major_type':item, 'majorList': majorMap[item]})
			}
		}
		
		await getMajorListAPI()
		.then((res)=>{
			buildTree(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const toDetail = (major_id)=>{
		uni.navigateTo({
			url: '/pages/career/detail?major_id=' + major_id
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
		.main-container{
			width: 90%;
			margin: 0 auto;
			.title{
				margin-top: 20rpx;
				font-size: 38rpx;
				font-weight: 600;
				border-bottom: 5rpx solid #AC0404;
			}
			.major-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
				.major{
					height: 80rpx;
					width: 30%;
					background-color: #ffffff;
					border-radius: 20rpx;
					border: 2rpx solid black;
					text-align: center;
					display: table;
					padding: 2rpx;
					margin: 10rpx 1%;
					font-size: 28rpx;
					.text{
						display: table-cell;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>