<!--
 * @Description: 数据分析详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:16:59
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-24 18:54:18
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
		<view class="topBox">
			<view class="title">
				行业招聘需求
				<view @click="openPicker" class="right">
					<span>更换专业</span>
					<up-icon name="arrow-right" color="#ac0404" size="16"></up-icon>
				</view>
			</view>
			<view class="intro">
				<span class="font-red">{{nowChoose?nowChoose.major_name:''}}</span>就业岗位技术需求
			</view>
		</view>
		<template v-if="nowChoose!==null">
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
	</view>
	<up-picker :show="showPicker" ref="uPickerRef" :columns="columns" @confirm="confirm" @change="changeHandler" @cancel="closePicker"></up-picker>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getMajorListAPI } from '@/api/career.js'
	import { getDetailAPI } from '@/api/analyze.js'
	import { timestampToDate } from '@/utils/time.js'
	

	onMounted( async () => {
		await getMajorList()
	})
	
	const allMajorList = ref([])
	const columns = ref([]);
	const columnData = ref([]);
	const showPicker = ref(true);
	const uPickerRef = ref(null)
	const nowChoose = ref(null)
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
	const confirm = async (e) => {
		const first = e.indexs[0]
		const second = e.indexs[1]
		nowChoose.value = allMajorList.value[first].majorList[second]
		showPicker.value = false;
		await getChartData()
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
		
		const query = 'major_id=' + nowChoose.value.major_id
		await getDetailAPI(query)
		.then((res)=>{
			console.log(res)
			majorData.value.data_rows = res.data_rows
			majorData.value.expand_skill = res.expand_skill.split('\\n')
			majorData.value.last_update = timestampToDate(res.last_update)
			majorData.value.main_skill = res.main_skill.split('\\n')
			formatData(res.subject_value)
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
</style>