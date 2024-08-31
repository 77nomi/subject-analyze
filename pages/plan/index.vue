<!--
 * @Description: 学习记录主要页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:20:36
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-31 21:39:20
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习记录" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="planData">
			<view class="title">今日学习记录</view>
			<view class="planList">
				<view v-if="todayData">
					<view v-for="(data,dataIndex) in recordList.dataList" :key="dataIndex" @click="addPlan(data.plan_id)" class="planBox">
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
				<view class="noData" v-else>
					今日暂无数据，快去学习吧!
				</view>
				<view @click="toALl" class="checkMore">
					<span>查看更多</span>
					<up-icon name="arrow-right" color="black" size="14"></up-icon>
				</view>
			</view>
			<view class="add">
				<span>添加记录</span>
				<view @click="addPlan(0)" class="addBtn">
					<image src="/assets/icon/icon_plan_add.png" style="width: 40rpx; height: 40rpx;"></image>	
				</view>
			</view>
		</view>
		<view class="studyData">
			<view class="title">
				我的学习数据
			</view>
			<view class="dataChartBox">
				<view class="top">
					<span>每日平均学习时长</span>
					<view class="choose">
						<u-dropdown active-color="#AC0404" title-size="30rpx">
							<u-dropdown-item v-model="timeChoose" :title="timeChoose" :options="timeOption"></u-dropdown-item>
						</u-dropdown>
					</view>
				</view>
				<view class="time font-red">
					{{averageTime}}小时
				</view>
				<view class="num">
					共{{subjectNum}}个学科
				</view>
				<view v-if="weekData" class="content">
					<qiun-data-charts 
					      type="line"
					      :opts="opts"
					      :chartData="chartData"
					    />
				</view>
				<view v-else class="noWeekData content">
					近一周暂无学习数据，快去学习吧!
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, onActivated } from 'vue'
	import { getPlanAPI, GetPlanListAPI } from '@/api/plan.js'
	
	onMounted( async () => {
		// 埋个问题：app端不触发这个函数。
		await getChartData()
		await getPlanList()
	})

	
	const chartData = ref()
	const opts=ref( 
		{
			color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
			padding: [15,10,0,15],
			enableScroll: false,
			legend: {},
			xAxis: {
				disableGrid: true
			},
			yAxis: {
				gridType: "dash",
				dashLength: 2
			},
			extra: {
				line: {
					type: "straight",
					width: 2,
					activeType: "hollow"
				}
			}
		}
	)
	const pageInfo = ref({
		page: 1,
		pagesize: 3
	})
	const timeOption = ref([
		{
			label: '本周',
			value: '本周',
		},
		{
			label: '本月',
			value: '本月',
		},
	])
	const timeChoose = ref('本周')
	const averageTime = ref(0)
	const subjectNum = ref(0)
	const recordList = ref([])
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
	const todayData = ref(false)
	const weekData = ref(false)
	
	/**
	 * 获取折线图数据并更新折线图
	 */
	const getChartData = async()=>{
		const formatData = (data)=>{
			averageTime.value=data.average_time
			subjectNum.value=data.subjects_info.length
			let finData = {
				categories: data.xAxis
			}
			let series = []
			data.subjects_info.forEach((item)=>{
				series.push({name:item.subject_name,data:item.data})
			})
			finData.series = series
			console.log('chartData:')
			console.log(finData)
			chartData.value = JSON.parse(JSON.stringify(finData));
		}
	
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		await getPlanAPI()
		.then((res)=>{
			// console.log(res)
			if(res.subjects_info.length!==0){
				weekData.value = true
				formatData(res)
			}
		})
		.catch((err)=>{
			console.log(err)
		})
		.finally(()=>{
			uni.hideLoading()
		})
	}
	
	/**
	 * 获取学习记录列表
	 */
	const getPlanList = async()=>{
		const buildList = (dataObj)=>{
			const mergedData = { ...dataObj };
			recordList.value = Object.keys(mergedData)
				.map(key => ({ date:[key][0], dataList: mergedData[key] })) // 先创建键值对数组
				.sort((a, b) => {
					const dateA = new Date(a.date); // 转换为 Date 对象
					const dateB = new Date(b.date); // 转换为 Date 对象
					return dateB - dateA // 按降序排序
				})
				
			recordList.value.forEach((item)=>{
				item.dataList.forEach((dataDetail)=>{
					let tagList = []
					dataDetail.tags.forEach((tag)=>{
						if(tag!==0){
							tagList.push(tags.value[tag-1].text)
						}
					})
					dataDetail.tags=tagList
				})
			})
			recordList.value=recordList.value[0]
			
			const nowDate = new Date()
			const valueDate = new Date(recordList.value.date)
			// 获取年月日
			const nowDateStr = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
			const valueDateStr = `${valueDate.getFullYear()}-${valueDate.getMonth() + 1}-${valueDate.getDate()}`;
			// 判断年月日是否相同
			const areDatesEqual = nowDateStr === valueDateStr;
			if (areDatesEqual) {
				todayData.value = true
			}
			
			console.log('recordData:')
			console.log(recordList.value)
		}
		
		const params ={
			page: pageInfo.value.page,
			pagesize: pageInfo.value.pagesize
		}
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		await GetPlanListAPI(params)
		.then((res)=>{
			// console.log(res)
			if(Object.keys(res).length !== 0){
				buildList(res)
			}
		})
		.catch((err)=>{
			console.log(err)
		})
		.finally(()=>{
			uni.hideLoading()
		})
	}
	
	const addPlan = (plan_id)=>{
		uni.navigateTo({
			url: '/pages/plan/addPlan?plan_id=' + plan_id
		})
	}
	
	const toBack = ()=>{
		uni.reLaunch({
			url: '/pages/home/index'
		})
	}
	
	const toALl = ()=>{
		uni.navigateTo({
			url: '/pages/plan/allPlan'
		})
	}
	
	onActivated( async () => {
		// 埋个问题：app端不触发这个函数。
		await getChartData()
		await getPlanList()
	})
	
</script>

<style lang="scss">
	.header{
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
	.container{
		width: 100%;
		.title{
			font-size: 44rpx;
			font-weight: 600;
		}
		.planData{
			width: 94%;
			margin: 20rpx auto 0;
			.planList{
				width: 96%;
				margin: 10rpx auto 0;
				background-color: white;
				border-radius: 10rpx;
				padding: 10rpx 0;
				.planBox{
					width: 90%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 10rpx auto 0;
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
				.noData{
					text-align: center;
					font-size: 30rpx;
					padding: 10rpx 0;
					color: #a8a8a8;
				}
				.checkMore{
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10rpx;
					font-size: 24rpx;
				}
			}
			.add{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 10rpx 20rpx;
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
		.studyData{
			width: 94%;
			margin: 20rpx auto;
			padding-bottom: 20rpx;
			.dataChartBox{
				margin: 10rpx auto;
				padding: 20rpx;
				width: 90%;
				height: 100%;
				background-color: #fff;
				border-radius: 10rpx;
				.top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 34rpx;
					.choose{
						width: 150rpx;
						.u-dropdown__content__mask{
							background-color: rgba(0,0,0,0) !important;
							height: 200rpx !important;
						}
						.u-dropdown__content{
							height: 200rpx !important;
						}
						.u-cell__title-text{
							text-align: center;
						}
					}
				}
				.time{
					font-size: 50rpx;
					font-weight: 600;
					margin-bottom: 10rpx;
				}
				.content{
					width: 100%;
					height: 500rpx;
				}
				.noWeekData{
					line-height: 500rpx;
					text-align: center;
					color: #a8a8a8;
				}
			}
		}
	}
</style>