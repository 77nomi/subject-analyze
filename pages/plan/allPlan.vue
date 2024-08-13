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
		<view class="title">
			<span>全部学习记录</span>
			<view class="add">
				<span>添加记录</span>
				<view @click="addPlan(0)" class="addBtn">
					<up-image src="/assets/icon/icon_plan_add.png" width="40rpx" height="40rpx"></up-image>	
				</view>
			</view>
		</view>
		<view class="planData">
			<view class="planList">
				<view @click="addPlan(1)" class="planBox">
					<up-avatar
						text=" "
						randomBgColor
						size="10"
					></up-avatar>
					<span class="plan-title">JAVA</span>
					<span class="plan-time">1小时</span>
					<up-icon name="arrow-right" color="#ac0404" size="20"></up-icon>
				</view>
			</view>
			<view class="add">
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getPlanAPI } from '@/api/plan.js'

	onMounted( async () => {
	})
	
	
	/**
	 * 获取学习记录并更新折线图
	 */
	const getPlan = async()=>{
		const formatData = (data)=>{
			averageTime.value=data.average_time
			subjectNum.value=data.subjects_info.length
			let optionData = {
				dataset: {
					source: []
				},
				legend: {
					bottom: 0
				},
				xAxis: {
					type: "category",
					axisTick: {
						show: false
					}
				},
				yAxis: {},
				series: []
			}
			let typeList = ["date"]
			data.xAxis.forEach((item) =>{
				typeList.push(item)
			})
			optionData.dataset.source.push(typeList)
			
			data.subjects_info.forEach((item)=>{
				let dataList = []
				dataList.push(item.subject_name)
				item.data.forEach((itemData)=>{
					dataList.push(itemData)
				})
				optionData.dataset.source.push(dataList)
				optionData.series.push({
					type: "line",
					seriesLayoutBy: "row"
				})
			})
			echart.value.setOption(optionData)
		}
		
		await getPlanAPI()
		.then((res)=>{
			formatData(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const addPlan = (plan_id)=>{
		uni.navigateTo({
			url: '/pages/plan/addPlan?plan_id=' + plan_id
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
				margin: 10rpx auto;
				background-color: white;
				border-radius: 10rpx;
				padding: 10rpx 0;
				.planBox{
					width: 90%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 10rpx auto;
					padding: 10rpx 5rpx;
					.plan-title{
						width: 60%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						text-align: left;
					}
					.plan-time{
						width: 20%;
						text-align: right;
						font-size: 26rpx;
					}
				}
			}
		}
	}
</style>