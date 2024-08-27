<!--
 * @Description: 数据分析详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:16:59
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-25 15:09:17
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
					行业招聘需求
					<view @click="openPicker" class="right">
						<span>更换专业</span>
						<up-icon name="arrow-right" color="#ac0404" size="16"></up-icon>
					</view>
				</view>
				<view class="intro">
					<span class="font-red">{{firstChoose?firstChoose.major_name:''}}</span>就业岗位技术需求
				</view>
			</view>
			<template v-if="chartData!==null">
				<view class="dataChartBox">
					<qiun-data-charts 
						type="pie"
						:opts="opts"
						:chartData="chartData"
					/>
				</view>
				<view class="bottomTitle">
					数据分析：
				</view>
				<view class="analyzeBox">
					<view class="big">
						记录的数据条数：{{majorData.data_rows}}条
					</view>
					<view class="big">
						数据更新时间：{{majorData.last_update}}
					</view>
					<view class="samll">
						掌握以下技能：
							<ul class=detail>
								<li v-for="(item,index) in majorData.main_skill" :key="index">{{item}}</li>
							</ul>
					</view>
					<view class="samll">
						拓展技术栈：
							<ul class=detail>
								<li v-for="(item,index) in majorData.expand_skill" :key="index">{{item}}</li>
							</ul>
					</view>
				</view>
			</template>
		</template>
		<up-empty
			mode="data"
			icon="http://cdn.uviewui.com/uview/empty/data.png"
			text="请先选择需要查看的学科"
			textColor="#4f4f4f"
			textSize="20"
			:show="firstChoose===null"
		>
		</up-empty>
		<up-empty
			mode="data"
			icon="http://cdn.uviewui.com/uview/empty/data.png"
			text="该学科暂无数据,请重新选择"
			textColor="#4f4f4f"
			textSize="20"
			:show="chartData===null"
		>
		</up-empty>
	</view>
	<!-- https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95 -->
	<!-- https://uniapp.dcloud.net.cn/component/picker-view.html -->
	<uni-popup :is-mask-click="false" ref="uPickerRef" type="bottom" style="z-index: 9999999;"  background-color="#fff">
		<view style="width:92%; display:flex; justify-content: space-between;margin: 10rpx auto 0;">
			<span style="padding: 20rpx;" @click="closePicker()">取消</span>
			<span style="padding: 20rpx;" @click="confirm()">确定</span>
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
	import { ref, onMounted } from 'vue'
	import { getMajorListAPI } from '@/api/career.js'
	import { getDetailAPI } from '@/api/analyze.js'
	import { timestampToDate } from '@/utils/time.js'
	

	onMounted( async () => {
		await getMajorList()
		openPicker()
	})
	
	const chooseData = ref([0,0])
	const indicatorStyle = ref('height: 80rpx;background-color:rgba(0, 0, 0, 0.1);border-top: 1rpx solid #1e1e1e;border-bottom: 1rpx solid #1e1e1e;')
	
	const allMajorList = ref([])
	const showColumns = ref([]);
	const secondColumns = ref([]);
	const uPickerRef = ref(null)
	const firstChoose = ref(null)
	const majorData = ref({})
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
	
	/**
	 * @description: 更改选择
	 * @param {*} e
	 * @return
	 */
	const changeHandler = (e) => {
		chooseData.value = e.detail.value
		showColumns.value[1]=secondColumns.value[e.detail.value[0]]
	};

	/**
	 * @description: 确认选择
	 * @param {*} e
	 * @return
	 */
	const confirm = async () => {
		firstChoose.value = allMajorList.value[chooseData.value[0]].majorList[chooseData.value[1]]
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
			showColumns.value.push(firstColumn)
			showColumns.value.push(secondColumn[0])
			secondColumns.value = secondColumn
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
		const formatData = (dataList)=>{
			let finData = {
				series: []
			}
			let data = []
			dataList.forEach((item)=>{
				data.push({name:item.subject_name,value:item.value,labelText:item.subject_name})
			})
			finData.series.push({data})
			chartData.value = JSON.parse(JSON.stringify(finData));
		}
		
		const query = 'major_id=' + firstChoose.value.major_id
		await getDetailAPI(query)
		.then((res)=>{
			console.log(res)
			if(res.data_rows !== 0){
				majorData.value.data_rows = res.data_rows
				majorData.value.expand_skill = res.expand_skill.split('\\n')
				majorData.value.last_update = timestampToDate(res.last_update)
				majorData.value.main_skill = res.main_skill.split('\\n')
				formatData(res.subject_value)
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
			padding: 10rpx;
			view{
				margin-left: 10rpx;
				margin-top: 15rpx;
				font-size: 30rpx;
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