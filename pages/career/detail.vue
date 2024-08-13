<template>
	<view class="header">
		<up-navbar height="80rpx" :title="'就业规划-'+major_info.name" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="imgBox">
			<up-image :src="major_info.pic_url" width="100%" height="320rpx"></up-image>	
		</view>
		<view class="introBox">
			<view class="intro">
				{{major_info.intro}}
			</view>
			<view class="starImg">
				<up-image src="/assets/icon/icon_major_detail_star.png" width="70rpx" height="70rpx"></up-image>	
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
						2021-01-01
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
	</view>
</template>

<script setup>
	import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
	import { getMajorDetailAPI } from '@/api/career.js'

	onMounted( async () => {
		// const options = getCurrentInstance()
		// major_id.value = options.attrs.major_id
		getMajorDetail()
	})
	const major_id = ref()
	const major_info = ref({})
	const comment_list = ref({})
	
	
	
	/**
	 * 获取详细信息以及评论
	 */
	const getMajorDetail = async ()=>{
		const query = "major_id=1"
		// const query = "major_id=" + major_id.value
		console.log(query)
		await getMajorDetailAPI(query)
		.then((res)=>{
			console.log(res)
			major_info.value=res.major_info
			comment_list.value = res.commen_list
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	
	/**
	 * 提交表单
	 */
	const submit = ()=>{  
	  formData.value.validate()
	  .then(async (valid) => {  
	    if (valid) {  
			formData.value.subject_id = picker.value.columns[0].find(item => item.label === formData.value.subject_id).id
			const time = timeToTimestamp(formData.value.study_time+' T00:00:00Z')
			const params = {
				subject_id: formData.value.subject_id,
				study_time: timeToTimestamp(formData.value.study_time),
				spend_time: Number(formData.value.spend_time),
				plan_name: formData.value.plan_name,
				note: formData.value.note,
				add_time: Math.floor(Date.now() / 1000)
			}
			console.log(params)
			await addPlanAPI(params)
			.then((res)=>{
				if(res.msg === "success"){
					uni.$u.toast('添加成功')
					uni.reLaunch({
						url: '/pages/plan/index'
					})
				}
			})
			.catch((err)=>{
				console.log(err)
			})
	    }
	  })
	  .catch(() => {
	  });  
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