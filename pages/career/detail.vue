<!--
 * @Description: 岗位点评详细页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:19:13
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-04 17:30:55
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" :title="'岗位点评-'+major_info?.name" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<template v-if="comment_list!==null">
			<view class="imgBox">
				<up-image :src="major_info.pic_url" width="100%" height="320rpx"></up-image>	
			</view>
			<view class="introBox">
				<view class="intro">
					{{major_info.intro}}
				</view>
				<view class="starImg">
					<image src="/assets/icon/icon_major_detail_star.png" style="width: 70rpx; height: 70rpx;"></image>	
					收藏
				</view>
			</view>
			<view class="commentList">
				<view class="commentBox" v-for="(item,index) in comment_list" :key=index>
					<view class="top">
						<view class="left">
							<up-avatar
									text="头"
									fontSize="32rpx"
									randomBgColor
									size="64rpx"
							></up-avatar>
						</view>
						<view class="center">
							{{item.user}}
							<up-rate size="28rpx" count="5" v-model="item.star" gutter="0" readonly></up-rate>
						</view>
						<view class="right font-red">
							{{timestampToDate(item.addtime)}}
						</view>
					</view>
					<view class="bottom">
						<view class="title">
							{{item.title}}
						</view>
						<view class="content">
							{{item.body}}
						</view>
					</view>
				</view>
			</view>
		</template>
		<up-empty
			mode="data"
			icon="http://cdn.uviewui.com/uview/empty/data.png"
			text="该学科暂无数据,请重新选择"
			textColor="#4f4f4f"
			textSize="20"
			:show="comment_list===null"
		>
		</up-empty>
	</view>
</template>

<script setup>
	import { ref, onMounted, getCurrentInstance } from 'vue'
	import { getMajorDetailAPI } from '@/api/career.js'
	import { timestampToDate } from '../../utils/time.js'

	onMounted( async () => {
		const options = getCurrentInstance()
		if(options.attrs.major_id)
			major_id.value = options.attrs.major_id
		else if(options.attrs.__pageInstance)
			major_id.value = options.attrs.__pageInstance.options.major_id
		await getMajorDetail()
	})
	const major_id = ref()
	const major_info = ref(null)
	const comment_list = ref(null)
	
	/**
	 * 获取详细信息以及评论
	 */
	const getMajorDetail = async ()=>{
		// const query = "major_id=1"
		const query = "major_id=" + major_id.value
		await getMajorDetailAPI(query)
		.then((res)=>{
			console.log(res)
			major_info.value=res.major_info
			if(res.commen_list!==null){
				comment_list.value = res.commen_list
			}
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
		display: flex;
		flex-direction: column;
		align-items: center;
		.imgBox{
			width: 100%;
		}
		.introBox{
			width: 94%;
			margin: 10rpx auto 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.intro{
				font-size: 24rpx;
			}
			.starImg{
				margin-left: 10rpx;
				font-size: 14rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
		.commentList{
			width: 94%;
			margin: 0 auto 10rpx;
			.commentBox{
				background-color: #fff;
				border-radius: 20rpx;
				margin: 20rpx 0 0;
				padding: 20rpx;
				.top{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.center{
						width: 62%;
						font-size: 28rpx;
						font-weight: 600;
					}
					.right{
						font-size: 24rpx;
					}
				}
				.bottom{
					margin-top: 5rpx;
					.title{
						font-size: 30rpx;
						font-weight: 600;
					}
					.content{
						font-size: 22rpx;
					}
				}
			}
		}
	}
</style>