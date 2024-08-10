<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习计划" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="planList">
			
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
	import { getMajorListAPI } from '@/api/career.js'
	import UniChart from '@/node_modules/uniapp-echarts/components/uni-chart/uni-chart';

	onMounted( async () => {
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
		.studyData{
			width: 94%;
			margin: 20rpx auto;
			.title{
				font-size: 44rpx;
				font-weight: 600;
			}
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
							background-color: rgba(0,0,0,0);
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