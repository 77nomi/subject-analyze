<template>
	<view class="header">
		<up-navbar height="80rpx" title="就业规划-学科分类" :placeholder="true" >
			<template #left>
				<up-image src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
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
					<view class="major" v-for="(major, index) in type.majorList" :key="index">
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
			console.log(majorMap)
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