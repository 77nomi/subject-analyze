<!--
 * @Description: 数据分析详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:16:59
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-16 10:19:07
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="数据分析 " :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="topBox">
			<view class="title">
				行业招聘需求
				<view @click="openPicker" class="right">
					<span>更换专业</span>
					<up-icon name="arrow-right" color="#ac0404" size="16"></up-icon>
				</view>
			</view>
			<view class="intro">
				{{nowChoose.major_name}}专业就业岗位技术需求
			</view>
		</view>
		<template v-if="nowChoose!==null">
			<view class="dataChartBox">
				<UniChart ref="echart" />
			</view>
			<view class="analyzeBox">
				<view class="num">
					记录的数据条数：10000条
				</view>
				<view class="most">
					需求最高的技术：C
				</view>
				<view class="updateTime">
					数据更新时间：2024-08-13
				</view>
				<view class="analyzeDetail">
					<p>分析：</p>
					<view class="detail">
						哈哈哈哈哈
					</view>
				</view>
			</view>
		</template>
	</view>
	<up-picker :show="showPicker" ref="uPickerRef" :columns="columns" @confirm="confirm" @change="changeHandler" @cancel="closePicker"></up-picker>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getPlanAPI } from '@/api/plan.js'
	import UniChart from '@/node_modules/uniapp-echarts/components/uni-chart/uni-chart';
	import { getMajorListAPI } from '@/api/career.js'

	onMounted( async () => {
		await getMajorList()
	})
	
	const echart = ref(null)
	const allMajorList = ref([])
	const columns = ref([]);
	const columnData = ref([]);
	const showPicker = ref(true);
	const uPickerRef = ref(null)
	const nowChoose = ref(null)
	
	
	/**
	 * @description: 更改选择
	 * @param {*} e
	 * @return
	 */
	const changeHandler = (e) => {
		const {
			columnIndex,
			value,
			values,
			index,
		} = e;

		if (columnIndex === 0) {
			uPickerRef.value.setColumnValues(1, columnData.value[index]);
		}
	};

	/**
	 * @description: 确认选择
	 * @param {*} e
	 * @return
	 */
	const confirm = (e) => {
		const first = e.indexs[0]
		const second = e.indexs[1]
		nowChoose.value = allMajorList.value[first].majorList[second]
		showPicker.value = false;
		getChartData()
	};
	
	/**
	 * @description: 关闭选择器
	 * @return
	 */
	const closePicker = ()=>{
    if (nowChoose.value !== null) {
        showPicker.value = false;
    }
	}
	
	/**
	 * @description: 打开选择器
	 * @return
	 */
	const openPicker = ()=>{
		showPicker.value=true
	}
	
	/**
	 * @description: 获取学科列表
	 * @return
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
			let firstColumn = []
			let secondColumn = []
			for(const item in majorMap) {
				firstColumn.push(item)
				allMajorList.value.push({'major_type':item, 'majorList': majorMap[item]})
				let typeMajorList = []
				majorMap[item].forEach((major)=>{
					typeMajorList.push(major.major_name)
				})
				secondColumn.push(typeMajorList)
			}
			columns.value.push(firstColumn)
			columns.value.push(secondColumn[0])
			columnData.value = secondColumn
		}
		
		await getMajorListAPI()
		.then((res)=>{
			buildTree(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	/**
	 * @description: 获取数据并更新图
	 * @return
	 */
	const getChartData = async()=>{
		const formatData = (data)=>{
			let optionD = {
				dataset: [
				  {
				    dimensions: ['name', 'value'],
				    source: [
				      ['Hannah Krause', 1048],
				      ['Zhao Qian', 120],
				      ['Jasmin Krause ', 580],
				      ['Li Lei', 484]
				    ]
				  },
				  {
				    transform: {
				      type: 'sort',
				      config: { dimension: 'value', order: 'desc' }
				    }
				  }
				],
				tooltip: {
					trigger: 'item'
				},
				legend: {
					orient: 'horizontal',
					bottom: 'bottom',
					width: '80%'
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			}
			
			let option = {
			  dataset: [
			    {
			      dimensions: ['name', 'value'],
			      source: [
			        ['Hannah Krause', 41],
			        ['Zhao Qian', 20],
			        ['Jasmin Krause ', 52],
			        ['Li Lei', 37]
			      ]
			    },
			    {
			      transform: {
			        type: 'sort',
			        config: { dimension: 'value', order: 'desc' }
			      }
			    }
			  ],
			  xAxis: {
			    type: 'category',
					axisLabel: { interval: 0, rotate: 20 }
			  },
			  yAxis: {},
			  series: {
			    type: 'bar',
			    encode: { x: 'name', y: 'value' },
					datasetIndex: 1
			  }
			};
			echart.value.setOption(optionD)
		}
		
		await getPlanAPI()
		.then((res)=>{
			formatData(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	
	/**
	 * @description: 返回上一页
	 * @return
	 */
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
		.topBox{
			width: 96%;
			margin: 20rpx auto;
			padding-bottom: 20rpx;
			.title{
				font-size: 44rpx;
				font-weight: 600;
				display: flex;
				justify-content: space-between;
				.right{
					font-size: 24rpx;
					font-weight: 500;
					display: flex;
					align-items: center;
					padding-right: 20rpx;
				}
			}
			.intro{
				margin-left: 6rpx;
				font-size: 30rpx;
			}
		}
		.dataChartBox{
			width: 90%;
			height: 550rpx;
			margin: 0 auto;
			padding: 10rpx;
			background-color: #fff;
			border-radius: 10rpx;
		}
		.analyzeBox{
			width: 90%;
			margin: 20rpx auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 10rpx;
			view{
				margin-left: 10rpx;
				margin-top: 10rpx;
				font-size: 30rpx;
				.detail{
					margin-left: 5rpx;
					font-size: 28rpx;
				}
			}
		}
	}
</style>