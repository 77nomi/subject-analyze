<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习路线&技能树" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="top">
			<view class="title">
				我的技能树
			</view>
			<view class="chooseAll">
				展示全部<span class="font-red">技术栈</span>
				<up-switch class="switchBtn" v-model="isAll" @change="change" activeColor="#AC0404" inactiveColor="#272727" size="20"></up-switch>
			</view>
		</view>
		<view class="tree-box">
			<next-tree 
				ref="nextTreeRef" 
				:treeData="skillTree"
				uiMode="page"
				funcMode="display"
				:ifSearch="false"
			>
				<template #label="{data: {label}}">
					<view class="line-block">
						{{label}}
					</view>
				</template>
			</next-tree>
					
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getMajorListAPI } from '@/api/career.js'

	onMounted( async () => {
	})
	
	const isAll = ref(false)
	const skillTree = ref([{
		id: 1,
		label: '计算机',
		children:[
			{
				id: 2,
				label: '前端',
				children: [
					{
						id: 3,
						label: 'html',
						children: []
					},
					{
						id: 4,
						label: 'css',
						children: []
					},
				]
			},
			{
				id: 5,
				label: '后端',
				children: [
					{
						id: 6,
						label: 'java',
						children: []
					},
					{
						id: 7,
						label: 'c',
						children: []
					},
				]
			},
		]
	},])
		
	const change = (e)=>{
		console.log(e);
	}

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
		.top{
			width: 95%;
			margin: 20rpx auto;
			display: flex;
			justify-content: space-around;
			align-items: flex-end;
			.title{
				font-size: 50rpx;
				font-weight: 600;
			}
			.chooseAll{
				display: flex;
				.switchBtn{
					margin-left: 10rpx;
				}
			}
		}
		.tree-box{
			width: 95%;
			margin: 0 auto;
			background-color: #ffffff;
			border-radius: 20rpx;
		}
	}
</style>