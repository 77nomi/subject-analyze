<template>
	<view class="header">
		<up-row
			justify="space-between"
			gutter="10"
		>
			<up-col span="4">
				<view class="nav-layout nav-left">
					<up-avatar 
						src="https://xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com/20240315/ai_photo/2eb1714d5d914510b10df7d443110be2.png"
						size='30'
					></up-avatar>
					<view class="right">
						<span class="font-red">WELCOME!</span>
						<span>用户名</span>
					</view>
				</view>
			</up-col>
			<up-col span="7">
				<view class="nav-layout" style="margin-right: 10rpx;margin-left:-16rpx;">
					<up-search v-model="search" :showAction="false" bgColor="#D4D4D4" height="55rpx"></up-search>
				</view>
			</up-col>
			<up-col span="1">
				<view class="nav-layout">
					<up-image src="/assets/icon/icon_main_setting.png" width="46rpx" height="40rpx" style="margin-right: 16rpx;"></up-image>		
				</view>
			</up-col>
		</up-row>
	</view>

	<view class="container">
		<view class="top-grid">
			<up-row justify="space-between" gutter="10" >
				<up-col span="4"></up-col>
				<up-col span="4">
					<view class="grid-layout">
						<up-image :show-loading="true" src="/assets/icon/icon_main_study_plan.png" width="25px" height="25px"></up-image>
						<view>
							学习<br><span class="font-red">计划</span>
						</view>
					</view>
				</up-col>
				<up-col span="4">
					<view class="grid-layout">
						<up-image :show-loading="true" src="/assets/icon/icon_main_data_analyze.png" width="25px" height="25px"></up-image>
						<view>
							数据<br><span class="font-red">分析</span>
						</view>
					</view>
				</up-col>
			</up-row>
			<up-row justify="space-between" gutter="10" >
				<up-col span="4"></up-col>
				<up-col span="8">
					<view class="grid-layout big-grid-layout">
						<up-image :show-loading="true" src="/assets/icon/icon_main_study_route.png" width="25px" height="25px"></up-image>
						<view>
							课程学习路线<br><span class="font-red">技能树</span>
						</view>
					</view>
				</up-col>
			</up-row>
			<up-row justify="space-between" gutter="10" >
				<up-col span="4"></up-col>
				<up-col span="4">
					<view class="small-grid-layout">
						<up-grid :border="false" col="2" >
						<up-grid-item>
							<view class="grid-item-top">
								<up-image :show-loading="true" src="/assets/icon/icon_main_news.png" width="46rpx" height="40rpx"></up-image>
							</view>
							<span>新闻</span>
						</up-grid-item>
						<up-grid-item>
							<view class="grid-item-top">
								<up-image :show-loading="true" src="/assets/icon/icon_main_pay.png" width="40rpx" height="44rpx"></up-image>
							</view>
							<span>薪资</span>
						</up-grid-item>
						<up-grid-item>
							<view class="grid-item-top">
								<up-image :show-loading="true" src="/assets/icon/icon_main_star.png" width="46rpx" height="40rpx"></up-image>
							</view>
							<span>收藏</span>
						</up-grid-item>
						<up-grid-item>
							<view class="grid-item-top">
								<up-image :show-loading="true" src="/assets/icon/icon_main_custom.png" width="44rpx" height="44rpx"></up-image>
							</view>
							<span>客服</span>
						</up-grid-item>
					</up-grid>
					</view>
				</up-col>
				<up-col span="4">
					<view class="grid-layout">
						<up-image :show-loading="true" src="/assets/icon/icon_main_work_plan.png" width="28px" height="25px"></up-image>
						<view>
							就业<br><span class="font-red">规划</span>
						</view>
					</view>
				</up-col>
			</up-row>
		</view>
		<view class="news-container">
			<view v-for="(item,index) in newsList" :key="index" class="new-box">
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
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getNewsListAPI } from '@/api/home.js'
	import { timestampToTime } from '@/utils/time.js'
	
	const search = ref('')
	const newsList = ref([])
	
	onMounted( async () => {
		await getNewsList()
	})
	
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
	
</script>

<style lang="scss">
	.header{
		position: fixed;
		top: 0;
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
		margin-top: 100rpx;
		.top-grid{
			.u-row{
				margin-top: 20rpx;
			}
			.grid-layout{
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
				box-shadow: 0 4rpx 4rpx #a8a8a8;
			}
			.big-grid-layout{
				width: 460rpx;
			}
			.small-grid-layout{
				height: 200rpx;
				font-size: 18rpx;
				.grid-item-top{
					width: 80rpx;
					height: 80rpx;
					box-shadow: 0 4rpx 4rpx #a8a8a8;
					background-color: white;
					border-radius: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				span{
					margin-top: 3rpx;
					margin-bottom: 2rpx;
				}
			}
		}
		.news-container{
			margin-top: 50rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
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
						width: 380rpx;
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
</style>