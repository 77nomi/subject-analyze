<!--
 * @Description: 主页
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:19:54
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-19 22:24:20
-->
<template>
	<view class="header">
		<up-row
			justify="space-between"
			gutter="10"
		>
			<up-col span="4">
				<view class="nav-layout nav-left" @click="toLogin">
					<up-avatar 
						:src="avatar"
						size='30'
					></up-avatar>
					<view class="right">
						<span class="font-red">WELCOME!</span>
						<span>{{username}}</span>
					</view>
				</view>
			</up-col>
			<up-col span="6">
				<view class="nav-layout">
					<up-search v-model="search" :showAction="false" bgColor="#D4D4D4" height="55rpx"></up-search>
				</view>
			</up-col>
			<up-col span="2" style="padding: 0;">
				<view class="nav-layout">
					<image src="/assets/icon/icon_main_setting.png" mode="aspectFit" style=" width:40rpx; height: 40rpx;"></image>	
				</view>
			</up-col>
		</up-row>
	</view>

	<view class="container">
		<view class="top-grid">
			<up-row justify="space-between" gutter="10" >
				<up-col span="4">
					<view @click="toAnalyze" class="grid-layout">
						<image src="/assets/icon/icon_main_data_analyze.png" mode="aspectFit" style=" width:50rpx; height: 50rpx;"></image>	
						<view>
							数据<br><span class="font-red">分析</span>
						</view>
					</view>
				</up-col>
				<up-col span="8">
					<view @click="toCareer" class="grid-layout big-grid-layout">
						<image src="/assets/icon/icon_main_work_plan.png" mode="aspectFit" style=" width:50rpx; height: 50rpx;"></image>	
						<view>
							专业介绍<br><span class="font-red">专业点评</span>
						</view>
					</view>
				</up-col>
			</up-row>
			<up-row justify="space-between" gutter="10" >
				<up-col span="8">
					<view @click="toTree" class="grid-layout big-grid-layout">
						<image src="/assets/icon/icon_main_study_route.png" mode="aspectFit" style=" width:50rpx; height: 50rpx;"></image>	
						<view>
							学习路线<br><span class="font-red">技能树</span>
						</view>
					</view>
				</up-col>
				<up-col span="4">
					<view @click="toPlan" class="grid-layout">
						<image src="/assets/icon/icon_main_study_plan.png" mode="aspectFit" style=" width:50rpx; height: 50rpx;"></image>	
						<view>
							学习<br><span class="font-red">记录</span>
						</view>
					</view>
				</up-col>
			</up-row>
			<view class="line-box">
				<view class="line-content" @click="toNews">
					<view class="line-item-top">
						<image src="/assets/icon/icon_main_news.png" mode="aspectFit" style=" width:46rpx; height: 40rpx;"></image>
					</view>
					<span>新闻</span>
				</view>
				<view class="line-content">
					<view class="line-item-top">
						<image src="/assets/icon/icon_main_pay.png" mode="aspectFit" style=" width:46rpx; height: 40rpx;"></image>
					</view>
					<span>薪资</span>
				</view>
				<view class="line-content">
					<view class="line-item-top">
						<image src="/assets/icon/icon_main_star.png" mode="aspectFit" style=" width:46rpx; height: 40rpx;"></image>
					</view>
					<span>收藏</span>
				</view>
				<view class="line-content">
					<view class="line-item-top">
						<image src="/assets/icon/icon_main_custom.png" mode="aspectFit" style=" width:46rpx; height: 40rpx;"></image>
					</view>
					<span>客服</span>
				</view>
			</view>
		</view>
		<view class="news-container">
			<span class="title">最新消息
			</span>
			<view v-for="(item,index) in newsList" :key="index" class="new-box" @click="toNewsDetail(item.news_id)">
				<view class="img">
					<up-image radius="20rpx" :show-loading="true" :src="item.icon_url" width="260rpx" height="180rpx" mode="scaleToFill"></up-image>
				</view>
				<view class="new-right">
					<view class="title">
						{{item.title}}
					</view>
					<view class="date font-red">
						NEWS {{item.date}}
					</view>
					<view class="content font-red">
						{{item.intro}}
					</view>
				</view>
			</view>
		</view>
	</view>
	
	<up-overlay class="overlay" :show="showOverlay">
		<view class="overlay-analyze" v-if="step===1">
			<view class="content">
				收集了各个岗位的数据进行数据分析，并上传了学习资料以供学习
			</view>
			<view class="bottom">
				<span>(1/4)</span>
				<span class="next" @click="nextStep">
					下一步
				</span>
				<span class="skip" @click="skipStep">
					跳过
				</span>
			</view>
		</view>
		<view class="overlay-carrer" v-if="step===2">
			<view class="content">
				介绍不同专业，收集了大众对于不同专业的点评
			</view>
			<view class="bottom">
				<span>(2/4)</span>
				<span class="last" @click="lastStep">
					上一步
				</span>
				<span class="next" @click="nextStep">
					下一步
				</span>
				<span class="skip" @click="skipStep">
					跳过
				</span>
			</view>
		</view>
		<view class="overlay-tree" v-if="step===3">
			<view class="content">
				对各种不同的技能进行分类整合，便于查看
			</view>
			<view class="bottom">
				<span>(3/4)</span>
				<span class="last" @click="lastStep">
					上一步
				</span>
				<span class="next" @click="nextStep">
					下一步
				</span>
				<span class="skip" @click="skipStep">
					跳过
				</span>
			</view>
		</view>
		<view class="overlay-record" v-if="step===4">
			<view class="content">
				可以添加自己的学习记录，查看自己的历史学习记录
			</view>
			<view class="bottom">
				<span>(4/4)</span>
				<span class="last" @click="lastStep">
					上一步
				</span>
				<span class="skip" @click="skipStep">
					关闭
				</span>
			</view>
		</view>
	</up-overlay>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getNewsListAPI } from '@/api/home.js'
	import { timestampToTime } from '@/utils/time.js'
	
	const search = ref('')
	const newsList = ref([])
	const username = ref('')
	const avatar = ref('')
	const showOverlay = ref(false)
	const step = ref(1)
	
	onMounted( async () => {
		await getNewsList()
		username.value = uni.getStorageSync('username')
		avatar.value = 'https://careerapi.hithere.fun'+uni.getStorageSync('avatar')
		if(uni.getStorageSync('is_new'))
			showOverlay.value = true
	})
	
	const lastStep = ()=>{
		step.value--
	}
	
	const nextStep = ()=>{
		step.value++
		if(step.value>4)
			showOverlay.value = false
	}
	
	const skipStep = ()=>{
		showOverlay.value = false
	}
	
	/**
	 * 获取新闻列表
	 */
	const getNewsList = async ()=>{
		await getNewsListAPI()
		.then((res)=>{
			newsList.value = res
			newsList.value.forEach((item)=>{
				item.date = timestampToTime(Number(item.date))
			})
			console.log(newsList.value)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	const toCareer = ()=>{
		uni.navigateTo({
			url: '/pages/career/index'
		})
	}
	
	const toTree = ()=>{
		uni.navigateTo({
			url: '/pages/tree/index'
		})
	}
	
	const toPlan = ()=>{
		uni.navigateTo({
			url: '/pages/plan/index'
		})
	}
	
	const toNews = ()=>{
		uni.navigateTo({
			url: '/pages/news/index'
		})
	}
	
	const toNewsDetail = (news_id)=>{
		uni.navigateTo({
			url: '/pages/news/detail?news_id=' + news_id
		})
	}
	const toAnalyze = ()=>{
		uni.navigateTo({
			url: '/pages/analyze/index'
		})
	}
	
	const toLogin = ()=>{
		uni.navigateTo({
			url: '/pages/user/login/index'
		})
	}
	
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;
		padding-top: var(--status-bar-height);
		z-index: 999;
		height: 80rpx;
		width:100%;
		background-color: white;
		box-shadow: 0 5rpx 5rpx #a8a8a8;

		.nav-layout {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
		}
		
		.nav-left{
			display: flex;
			justify-content: center;
			.right{
				margin-left: 10rpx;
				display: flex;
				flex-direction: column;
				span{
					font-size: 18rpx;
					line-height: 30rpx;
					text-align: center;
				}
			}
		}
	}

	.container{
		width: 100%;
		padding-top: 80rpx;
		.status_bar{
			height: calc(var(--status-bar-height) + 80rpx); 
			width: 100%;
			background-color: #fff;
		}
		.top-grid{
			.u-row{
				margin-top: 20rpx;
			}
			.grid-layout{
				margin-left: 15rpx;
				background-color: white;
				border-radius: 20rpx;
				width: 200rpx;
				height: 180rpx;
				padding-top: 20rpx;
				display: flex;
				align-items: flex-start;
				justify-content: space-evenly;
				font-size: 46rpx;
				font-weight: 600;
				box-shadow: 6rpx 6rpx 6rpx #c6c6c6;
			}
			.big-grid-layout{
				width: 430rpx;
				display: flex;
				align-items: flex-start;
				padding-left: 20rpx;
				justify-content: left;
				view{
					margin-left: 20rpx;
				}
			}
			.line-box{
				display: flex;
				justify-content: space-between;
				padding: 0 20rpx;
				margin: 20rpx 0;
				font-size: 28rpx;
				.line-content{
					text-align: center;
					.line-item-top{
						width: 100rpx;
						height: 100rpx;
						box-shadow: 0 4rpx 4rpx #a8a8a8;
						background-color: white;
						border-radius: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 5rpx;
					}
				}
			}
		}
		.news-container{
			margin-top: 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				font-weight: 600;
				font-size: 40rpx;
			}
			.new-box{
				margin-top: 20rpx;
				width: 650rpx;
				height: 180rpx;
				box-shadow: 0 6rpx 6rpx #a8a8a8;
				background-color: white;
				border-radius: 20rpx;
				display: flex;
				.new-right{
					margin-left: 10rpx;
					margin-top: 10rpx;
					.title{
						font-size: 30rpx;
						font-weight: 600;
					}
					.date{
						margin: 5rpx 0;
						font-size: 10rpx;
					}
					.content{
						width: 370rpx;
						font-size: 24rpx;
						display: -webkit-box;//对象作为弹性伸缩盒子模型显示
						overflow: hidden;//溢出隐藏
						-webkit-box-orient: vertical;//设置伸缩盒子对象的子元素的排列方式
						-webkit-line-clamp: 1;//设置 块元素包含的文本行数
					}
				}
			}
		}
	}
	
	.overlay{
		height: 100%;
		width: 100%;
		z-index: 9;
		.content{
			width: 400rpx;
			background-color: #fff;
			font-size: 34rpx;
			padding: 10rpx;
			border-radius: 10rpx;
		}
		.bottom{
			color: #fff;
			font-size: 24rpx;
			width: 400rpx;
			text-align: right;
		}
		.overlay-analyze{
			border: solid #fff 4rpx;
			margin-top: 90rpx;
			margin-left: 5rpx;
			width: 210rpx;
			height: 210rpx;
			z-index: 99;
			.content{
				margin-top: 130rpx;
				margin-left: 220rpx;
			}
			.bottom{
				margin-left: 220rpx;
			}
		}
		.overlay-carrer{
			border: solid #fff 4rpx;
			margin-top: 90rpx;
			margin-left: 260rpx;
			width: 465rpx;
			height: 210rpx;
			z-index: 99;
			.content{
				margin-top: 230rpx;
				margin-left: -120rpx;
			}
			.bottom{
				margin-left: -120rpx;
			}
		}
		.overlay-tree{
			border: solid #fff 4rpx;
			margin-top: 310rpx;
			margin-left: 5rpx;
			width: 465rpx;
			height: 210rpx;
			z-index: 99;
			.content{
				margin-top: 230rpx;
				margin-left: 120rpx;
			}
			.bottom{
				margin-left: 120rpx;
			}
		}
		.overlay-record{
			border: solid #fff 4rpx;
			margin-top: 310rpx;
			margin-left: 518rpx;
			width: 210rpx;
			height: 210rpx;
			z-index: 99;
			.content{
				margin-top: 230rpx;
				margin-left: -320rpx;
			}
			.bottom{
				margin-left: -320rpx;
			}
		}
	}
</style>