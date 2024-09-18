<!--
 * @Description: 数据分析详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:16:59
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-18 15:30:11
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="数据分析 " :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<template v-if="firstChoose!==null">
			<view class="topBox">
				<view class="title">
					岗位招聘需求
					<view @click="openPicker" class="right">
						<span>更换岗位</span>
						<up-icon name="arrow-right" color="#ac0404" size="16"></up-icon>
					</view>
				</view>
				<view class="intro">
					<span class="font-red">{{firstChoose?firstChoose.job_name:''}}</span>岗位技术需求
				</view>
			</view>
			<template v-if="chartData!==null">
				<view class="dataChartBox">
					<qiun-data-charts 
						type="pie"
						:opts="opts"
						:chartData="chartData"
						tooltipFormat="formatter-analyze"
					/>
				</view>
				<view class="analyzeBox">
					<up-tabs itemStyle="margin-top:0; height: 80rpx;" :list="tabList" @click="handleTabChange"></up-tabs>
					<view class="text-container" v-if="tabIndex===0">
						<view class="big">
							记录的数据条数：{{jobData.data_rows}}条
						</view>
						<view class="big">
							数据更新时间：{{jobData.last_update}}
						</view>
						<view class="samll">
							掌握以下技能：
								<ul class=detail>
									<li v-for="(item,index) in jobData.main_skill" :key="index">{{item}}</li>
								</ul>
						</view>
						<view class="samll">
							拓展技术栈：
								<ul class=detail>
									<li v-for="(item,index) in jobData.expand_skill" :key="index">{{item}}</li>
								</ul>
						</view>
					</view>
					<view class="table-container" v-else>
						<uni-table border stripe emptyText="暂无更多数据" >
							<uni-tr>
								<uni-th width="50" align="center">技术名称</uni-th>
								<uni-th align="center">url（点击可复制）</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in tableData" :key="index">
								<uni-td align="center">{{item.name}}</uni-td>
								<uni-td style="word-break: break-all;" align="center">{{item.url}}</uni-td>
							</uni-tr>
						</uni-table>
					</view>
				</view>
			</template>
		</template>
		<up-empty
			mode="data"
			icon="http://cdn.uviewui.com/uview/empty/data.png"
			text="请先选择需要查看的岗位"
			textColor="#4f4f4f"
			textSize="20"
			:show="firstChoose===null"
		>
		</up-empty>
		<up-empty
			mode="data"
			icon="http://cdn.uviewui.com/uview/empty/data.png"
			text="该岗位暂无数据,请重新选择"
			textColor="#4f4f4f"
			textSize="20"
			:show="chartData===null"
		>
		</up-empty>
	</view>
	<uni-popup :is-mask-click="false" ref="uPickerRef" type="bottom" style="z-index: 9999999;"  background-color="#fff">
		<view style="width:92%; display:flex; justify-content: space-between;margin: 10rpx auto 0;">
			<span style="padding: 10rpx; color: #585858;" @click="closePicker()">取消</span>
			<view style="padding: 10rpx; text-align: center;">
				<p>选择岗位</p>
				<view style="display: flex; align-items: bottom; font-size: 20rpx; margin-top: 5rpx;">
					推荐岗位<up-switch size="15" v-model="showAll" @change="changeShowAll"></up-switch>全部岗位
				</view>
			</view>
			<span style="padding: 10rpx; color: #00aaff;" @click="confirm()">确定</span>
		</view>
		<picker-view class="picker-view" mask-style="display:none;" :indicator-style="indicatorStyle" :value="chooseData" @change="changeHandler">
				<picker-view-column>
						<view class="item" v-for="(item,index) in showColumns[0]" :key="index">{{item}}</view>
				</picker-view-column>
				<picker-view-column>
						<view class="item" v-for="(item,index) in showColumns[1]" :key="index">{{item}}</view>
				</picker-view-column>
		</picker-view>
	</uni-popup>
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue'
	import { getJobListAPI } from '@/api/career.js'
	import { getDetailAPI } from '@/api/analyze.js'
	import { timestampToDate } from '@/utils/time.js'
	

	onMounted( async () => {
		await getJobList()
		buildOptions(uni.getStorageSync('recomendJob'),'recomend')
		openPicker()
	})
	
	const chooseData = ref([0,0])
	const indicatorStyle = ref('height: 80rpx;background-color:rgba(226, 226, 226, 0.1);border-top: 1rpx solid #cfcfcf;border-bottom: 1rpx solid #cfcfcf;')
	
	const allMajorList = ref()
	const recomendMajorList = reactive([])
	const showColumns = ref([]);
	const firstColumn = ref({
		all: [],
		recomend: []
	})
	const showAll = ref(false)
	const uPickerRef = ref(null)
	const firstChoose = ref(null)
	const jobData = ref({})
	const chartData = ref()
	const opts = ref(
		{
			color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
			padding: [0,5,-10,5],
			enableScroll: false,
			extra: {
				pie: {
					activeOpacity: 0.5,
					activeRadius: 10,
					offsetAngle: 0,
					labelWidth: 15,
					border: true,
					borderWidth: 3,
					borderColor: "#FFFFFF",
					linearType: "custom"
				}
			},
			legend: {
				margin: 5
			}
		}	
	)
	const tabList = ref([
		{name: '数据分析'},
		{name: '学习资料'}
	])
	const tabIndex = ref(0)
	const tableData = ref({})
	
	const handleTabChange = (e)=>{
		tabIndex.value = e.index
	}
	
	const changeShowAll = (e)=>{
		if(e){
			showColumns.value[0] = firstColumn.value.all
			showColumns.value[1] = allMajorList.value[0].optionsList
		}else{
			showColumns.value[0] = firstColumn.value.recomend
			showColumns.value[1] = recomendMajorList.value[0].optionsList
		}
	}
	
	/**
	 * @description: 更改选择
	 * @param {*} e
	 * @return
	 */
	const changeHandler = (e) => {
		chooseData.value = e.detail.value
		if(showAll.value){
			showColumns.value[1]=allMajorList.value[e.detail.value[0]].optionsList
		}else{
			showColumns.value[1]=recomendMajorList.value[e.detail.value[0]].optionsList
		}
		tabIndex.value = 0
	};

	/**
	 * @description: 确认选择
	 * @param {*} e
	 * @return
	 */
	const confirm = async () => {
		if(showAll.value)
			firstChoose.value = allMajorList.value[chooseData.value[0]].jobList[chooseData.value[1]]
		else
			firstChoose.value = recomendMajorList.value[chooseData.value[0]].jobList[chooseData.value[1]]
		uPickerRef.value.close()
		chartData.value = null
		await getChartData()
	};
	
	/**
	 * @description: 关闭选择器
	 * @return
	 */
	const closePicker = ()=>{
    if (firstChoose.value !== null) {
			uPickerRef.value.close()
    } else {
			uni.navigateBack()
		}
	}
	
	/**
	 * @description: 打开选择器
	 * @return
	 */
	const openPicker = ()=>{
		uPickerRef.value.open()
	}
	
	/**
	 * @description: 获取岗位列表
	 * @return
	 */
	const getJobList = async()=>{
		await getJobListAPI()
		.then((res)=>{
			buildOptions(res, 'all')
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	/**
	 * @description: 构造选择器列表结构
	 * @param {*} dataList
	 * @return
	 */
	const buildOptions = (dataList, type)=>{
		let jobMap = {}
		let finList = []
		dataList.forEach((item)=>{
			if(item.job_type in jobMap){
				jobMap[item.job_type].push({'job_id':item.job_id, 'job_name': item.job_name})
			}else{
				jobMap[item.job_type] = [{'job_id':item.job_id, 'job_name': item.job_name}]
			}
		})
		let first = []
		for(const item in jobMap) {
			first.push(item)
			let optionsList = []
			jobMap[item].forEach((job)=>{
				optionsList.push(job.job_name)
			})
			finList.push({'job_type':item, 'jobList': jobMap[item], 'optionsList': optionsList})
		}
		if(type==='all'){
			allMajorList.value = finList
			firstColumn.value.all = first
		}else{
			showColumns.value.push(first)
			showColumns.value.push(finList[0].optionsList)
			recomendMajorList.value = finList
			firstColumn.value.recomend = first
		}
	}
	
	/**
	 * @description: 获取数据
	 * @return
	 */
	const getChartData = async()=>{
		const buildChartData = (dataList)=>{
			let finData = {
				series: []
			}
			let data = []
			dataList = dataList.slice(0,9)
			dataList.forEach((item,index)=>{
				data.push({name:item.subject_name,value:item.value,labelText:item.subject_name})
			})
			finData.series.push({data})
			chartData.value = JSON.parse(JSON.stringify(finData));
		}
		
		const buildTableData = (dataList)=>{
			let data = []
			dataList.forEach(item=>{
				if(item.study_url){
					data.push({name:item.subject_name,url:item.study_url})
				}
			})
			tableData.value = data
			console.log(tableData.value)
		}
		
		const query = 'job_id=' + firstChoose.value.job_id
		await getDetailAPI(query)
		.then((res)=>{
			console.log(res)
			if(res.data_rows !== 0){
				jobData.value.data_rows = res.data_rows
				jobData.value.expand_skill = res.expand_skill.split('\\n')
				jobData.value.last_update = timestampToDate(res.last_update)
				jobData.value.main_skill = res.main_skill.split('\\n')
				buildChartData(res.subject_value)
				buildTableData(res.subject_value)
			}
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
		padding-bottom: 20rpx;
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
				font-weight: 600;
			}
		}
		.dataChartBox{
			width: 90%;
			height: 600rpx;
			margin: 0 auto;
			padding: 10rpx;
			background-color: #fff;
			border-radius: 10rpx;
		}
		.bottomTitle{
			width: 90%;
			margin: 20rpx auto;
			font-size: 34rpx;
			font-weight:600;
		}
		.analyzeBox{
			width: 90%;
			margin: 10rpx auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 0 10rpx;
			.u-tabs__wrapper__nav__line{
				width: 100rpx !important;
				margin-left: -29rpx !important;
			}
			view{
				margin-top: 5rpx;
				font-size: 30rpx;
			}
			.text-container{
				margin-left: 10rpx;
			}
			.table-container{
				width: 100%;
			}
			.big{
				font-weight: 600;
			}
			.samll{
				font-size: 28rpx;
				.detail{
					display: inline-block;
					font-size: 26rpx;
					padding-left: 6%;
				}
				pre{
					white-space: pre-wrap;
					word-wrap: break-word;
				}
			}
		}
	}
	.picker-view {
		width: 100%;
		height: 600rpx;
	}
	.item {
		line-height: 80rpx;
		text-align: center;
	}
</style>