<template>
	<view class="header">
		<up-navbar height="80rpx" title="全部记录" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<scroll-view :scroll-y="true" class="scrollBox" @scrolltolower="getPlanList()">
			<view class="title">
				<span>全部学习记录</span>
				<view class="add">
					<span>添加记录</span>
					<view @click="ToAddPlan(0)" class="addBtn">
						<up-image src="/assets/icon/icon_plan_add.png" width="40rpx" height="40rpx"></up-image>	
					</view>
				</view>
			</view>
			<view class="planData">
				<view class="planList">
					<view v-for="(item,index) in recordList" :key="index" class="dateList">
						<view class="top" :style="index==0?'border-top-right-radius: 10rpx;border-top-left-radius: 10rpx;':''" >
							<span>{{item.date}}</span>
							<span>共{{item.allTime}}小时</span>
						</view>
						<view v-for="(data,dataIndex) in item.dataList" :key="dataIndex" @click="ToAddPlan(data.plan_id)" class="planBox">
							<up-avatar
								text=" "
								randomBgColor
								size="10"
							></up-avatar>
							<span class="plan-title">{{data.subject}}</span>
							<view class="plan-time-tags">
								<span class="plan-time">{{data.spend_time}}小时</span>
								<view class="tagsList">
									<view v-for="(tags,tagIndex) in data.tags" :key="tagIndex" class="tagBox">{{tags}}</view>
								</view>
							</view>
							<up-icon name="arrow-right" color="#ac0404" size="20"></up-icon>
						</view>
					</view>
				</view>
				<view class="add">
				</view>
			</view>
		</scroll-view>
	</view>	
	<u-loadmore style="padding-bottom: 20rpx;" :status="status" />
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { GetPlanListAPI } from '@/api/plan.js'

	onMounted( async () => {
		await getPlanList()
	})
	
	const status = ref('loadmore')
	const pageInfo = ref({
		page: 1,
		pagesize: 15
	})
	const tags = ref([
		{
			text: '有问题',
			value: 1
		},
		{
			text: '新知识',
			value: 2
		},
		{
			text: '待总结',
			value: 3
		},
		{
			text: '没看懂',
			value: 4
		},
		{
			text: '有点问题',
			value: 5
		},
		{
			text: '其他',
			value: 6
		},
	])
	const recordList = ref([])
	
	/**
	 * 获取学习记录列表
	 */
	const getPlanList = async()=>{
		const buildList = (dataObj)=>{
			const mergedData = { ...dataObj };
			let stmpList = Object.keys(mergedData)
				.map(key => ({ date:[key][0], dataList: mergedData[key] })) // 先创建键值对数组
				.sort((a, b) => {
					const dateA = new Date(a.date); // 转换为 Date 对象
					const dateB = new Date(b.date); // 转换为 Date 对象
					return dateB - dateA // 按降序排序
				})
				
			stmpList.forEach((item)=>{
				let allTime = 0
				item.dataList.forEach((dataDetail)=>{
					allTime+=dataDetail.spend_time
					let flag = 1
					let tagList = []
					dataDetail.tags.forEach((tag)=>{
						if(tag==0){
							flag = 0
						}else{
							if(tag>tags.value.length){
								flag=0
								return
							}
							tagList.push(tags.value[tag-1].text)
						}
					})
					dataDetail.tags=tagList
				})
				item.allTime=allTime
				if(recordList.value.length && item.date==recordList.value[recordList.value.length-1].date){
					recordList.value[recordList.value.length-1].allTime+=item.allTime
					recordList.value[recordList.value.length-1].dataList.push(...item.dataList)
				}else{
					recordList.value.push(item)
				}
			})
			pageInfo.value.page++
		}
		
		if(status.value=='nomore')
			return
		status.value = 'loading'
		const params ={
			page: pageInfo.value.page,
			pagesize: pageInfo.value.pagesize
		}
		await GetPlanListAPI(params)
		.then((res)=>{
			console.log(res)
			if(Object.keys(res).length === 0){
				status.value = 'nomore'
			}else{
				buildList(res)
				status.value = 'loadmore'
			}
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const ToAddPlan = (plan_id)=>{
		uni.navigateTo({
			url: '/pages/plan/addPlan?plan_id=' + plan_id
		})
	}
	
	const toBack = ()=>{
		uni.navigateBack()
	}
	
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.header{
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		.scrollBox{
			flex-grow: 1;
		}
		.title{
			width: 94%;
			margin: 20rpx auto 0;
			font-size: 44rpx;
			font-weight: 600;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.add{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 10rpx 0 10rpx 20rpx;
				font-size: 28rpx;
				span{
					margin-right: 20rpx;
				}
				.addBtn{
					background-color: #fff;
					height: 60rpx;
					width: 60rpx;
					border-radius: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.planData{
			width: 94%;
			margin: 20rpx auto 0;
			.planList{
				width: 96%;
				margin: 10rpx auto 0;
				background-color: white;
				border-radius: 10rpx;
				padding: 0 0 10rpx;
				.dateList{
					.top{
						background-color: #49454F;
						color: #fff;
						font-size: 26rpx;
						display: flex;
						justify-content: space-between;
						padding: 5rpx 10rpx;
						margin-top: 20rpx;
					}
					.planBox{
						width: 90%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin: 10rpx auto;
						padding: 10rpx 5rpx;
						.plan-title{
							width: 31%;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: left;
						}
						.plan-time-tags{
							width: 50%;
							text-align: right;
							font-size: 26rpx;
							.tagsList{
								display: flex;
								flex-wrap: wrap;
								justify-content: flex-end;
								.tagBox{
									background-color: #2C2C2C;
									padding: 2rpx 7rpx;
									border-radius: 15rpx;
									color: #fff;
									font-size: 20rpx;
									margin: 5rpx 0 0 5rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>