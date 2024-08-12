<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习记录" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="planData">
			<view class="title">今日学习记录</view>
			<view class="planList">
				<view class="planBox">
					<up-avatar
						text="呃"
						fontSize="14"
						randomBgColor
						size="30"
					></up-avatar>
					<span class="plan-title">2024-08-12 C语言 1小时</span>
					<up-icon name="edit-pen" color="black" size="25"></up-icon>
				</view>
				<view class="planBox">
					<up-avatar
						text="呃"
						fontSize="14"
						randomBgColor
						size="30"
					></up-avatar>
					<span class="plan-title">2024-08-12 C语言11111111 1小时</span>
					<up-icon name="edit-pen" color="black" size="25"></up-icon>
				</view>
				<view class="checkMore">
					<span>查看更多</span>
					<up-icon name="arrow-right" color="black" size="14"></up-icon>
				</view>
			</view>
			<view class="add">
				<span>添加记录</span>
				<view @click="addPlan" class="addBtn">
					<up-image src="/assets/icon/icon_plan_add.png" width="40rpx" height="40rpx"></up-image>	
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
					5.00小时
				</view>
				<view class="num">
					共4个学科
				</view>
				<view class="content">
					<UniChart :option="option" />
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getPlanAPI } from '@/api/plan.js'
	import UniChart from '@/node_modules/uniapp-echarts/components/uni-chart/uni-chart';

	onMounted( async () => {
		// getPlan()
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
	
	const option = ref({
		color: ["#003366", "#006699", "#4cabce", "#e5323e"],
		dataset: {
			source: [
				["type", "2012", "2013", "2014", "2015", "2016"],
				["Forest", 320, 332, 301, 334, 390],
				["Steppe", 220, 182, 191, 234, 290],
				["Desert", 150, 232, 201, 154, 190],
				["Wetland", 98, 77, 101, 99, 40]
			]
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
		series: [{
			type: "line",
			seriesLayoutBy: "row"
		}, {
			type: "line",
			seriesLayoutBy: "row"
		}, {
			type: "line",
			seriesLayoutBy: "row"
		}, {
			type: "line",
			seriesLayoutBy: "row"
		}]
		})
	
	const allMajorList = ref([])
	
	/**
	 * 获取学习记录
	 */
	const getPlan = async()=>{
		await getPlanAPI()
		.then((res)=>{
			console.log(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const addPlan = ()=>{
		uni.navigateTo({
			url: '/pages/plan/addPlan'
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
				padding-top: 10rpx;
				.planBox{
					width: 90%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 10rpx auto 0;
					padding: 10rpx 5rpx;
					.plan-title{
						width: 70%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						text-align: center;
					}
				}
				.checkMore{
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10rpx;
					font-size: 16rpx;
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
			.dataChartBox{
				margin: 10rpx auto;
				padding: 20rpx;
				width: 90%;
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
			}
		}
	}
</style>