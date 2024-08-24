<!--
 * @Description: 技能树
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:20:51
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-24 19:18:55
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习路线&技能树" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
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
	import { GetMyTreeAPI } from '@/api/tree.js'
	import { GetSubjectMapAPI } from '@/api/plan.js'

	onMounted( async () => {
		await GetMyTreeData()
	})
	
	const isAll = ref(false)
	const skillTree = ref([{
		id: 1,
		label: '全部',
		children:[]
	},])
	const allTreeList = ref([])
	const myTreeList = ref([])
		
	const change = (e)=>{
		if(e){
			getAllTreeData()
		}else{
			GetMyTreeData()
		}
	}

	/**
	 * @description: 构建树结构
	 * @param {*} dataList
	 * @return
	 */
	const buildTree = (dataList,type)=>{
		skillTree.value[0].children = []
		let children = []
		// 从接口获取数据
		if(dataList){
			let id = 2
			for(const key in dataList){
				let secondTree = {
					id: id,
					label: key,
					children: []
				}
				id++
				const item = dataList[key]
				for(const secondKey in item){
					let thirdTree = {
						id: id,
						label: secondKey,
						children: []
					}
					id++
					const thirdList = item[secondKey]
					thirdList.forEach((third)=>{
						thirdTree.children.push({
							id: id,
							label: third,
							children: []
						})
						id++
					})
					secondTree.children.push(thirdTree)
				}
				children.push(secondTree)
				// skillTree.value[0].children.push(secondTree)
			}
			if(type==0){
				allTreeList.value = children
			}else{
				myTreeList.value = children
			}
		}
		// 从已有数据里面获取数据
		else{
			console.log('exist')
			if(type==0){
				children = allTreeList.value
			}else{
				children = myTreeList.value
			}
		}
		children.forEach((item)=>{
			skillTree.value[0].children.push(item)
		})
	}
	
	
	/**
	 * @description: 获取全部的技能树
	 * @return
	 */
	const getAllTreeData = async()=>{
		if(allTreeList.value.length===0){
			await GetSubjectMapAPI()
			.then((res)=>{
				buildTree(res, 0)
			})
			.catch((err)=>{
				console.log(err)
			})
		} else {
				buildTree(null, 0)
		}
	}
	
	/**
	 * @description: 获取我学习了的技能树
	 * @return
	 */
	const GetMyTreeData = async()=>{
		if(myTreeList.value.length===0){
			await GetMyTreeAPI()
			.then((res)=>{
				buildTree(res, 1)
			})
			.catch((err)=>{
				console.log(err)
			})
		} else {
				buildTree(null, 1)
		}
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
		padding-bottom: 20rpx;
		.top{
			height: 80rpx;
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