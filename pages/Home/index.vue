<script setup>
import { ref } from 'vue'
const popupShow = ref(false)
const openPopup = () => {
	popupShow.value = true
}

const open = () => {
	popupShow.value = true
}

const close = () => {
	popupShow.value = false
}

// 案件列表
const caseList = ref([
	{ name: '案件一', id: '01' },
	{ name: '案件二', id: '02' },
	{ name: '案件三', id: '03' },
	{ name: '案件四', id: '04' }
])
// 当前选中案件
const activeIndex = ref(0)
const changeIndex = (index) => {
	activeIndex.value = index
}

const toChat = () => {
	uni.navigateTo({
		url: '/pages/Consult/index'
	})
}
</script>

<template>
	<header class="header">
		<view class="option">
			<view class="left">
				<up-icon name="grid" size="34" color="#B7B9E0"></up-icon>
			</view>
			<view class="right" @click="openPopup">
				<view class="top">一站式诉讼 ></view>
				<view class="bottom">点击展开列表</view>
			</view>
		</view>
		<view class="info">
			<up-icon name="bell" size="34" color="#333333"></up-icon>
		</view>
		<view class="meau">
			<up-icon name="more-dot-fill" size="34" color="#333333"></up-icon>
		</view>
	</header>

	<!-- 标题 -->
	<view class="todo">
		<view class="title">我的待办</view>
		<view class="direction">请选择您遇到法律问题的类别</view>
	</view>

	<!-- 可选区域 -->
	<view class="container">
		<!-- 劳动纠纷 -->
		<view class="item">
			<view class="icon">
				<u-icon name="zhongcai" custom-prefix="custom-icon" size="34" color="#24C789"></u-icon>
			</view>
			<view class="direc">
				<h3>劳动纠纷</h3>
				<view class="detail">降薪调岗 裁员补偿</view>
			</view>
		</view>
		<!-- 婚姻家事 -->
		<view class="item">
			<view class="icon">
				<u-icon name="hunyinjiashi-01" custom-prefix="custom-icon" size="34" color="#f35555"></u-icon>
			</view>
			<view class="direc">
				<h3>婚姻家事</h3>
				<view class="detail">家事纠纷 抚养起诉</view>
			</view>
		</view>
		<!-- 税务纠纷 -->
		<view class="item">
			<view class="icon">
				<u-icon name="shuiwuguanli" custom-prefix="custom-icon" size="34" color="#5A87F9"></u-icon>
			</view>
			<view class="direc">
				<h3>税务纠纷</h3>
				<view class="detail">税务纠纷 行政复议</view>
			</view>
		</view>
		<!-- 民间借贷 -->
		<view class="item">
			<view class="icon">
				<u-icon name="jiedaijiufen" custom-prefix="custom-icon" size="34" color="#F2A054"></u-icon>
			</view>
			<view class="direc">
				<h3>民间借贷</h3>
				<view class="detail">个人债务 公司债务</view>
			</view>
		</view>
	</view>

	<view class="more">其他类别敬请期待...</view>

	<button @click="toChat">test</button>

	<!-- 左侧弹出层 -->
	<up-popup :show="popupShow" @close="close" @open="open" mode="left" class="popup" bgColor="#f5f7fa">
		<view class="title">
			<view class="left">
				<up-icon name="grid" size="40" color="#B7B9E0"></up-icon>
			</view>
			<view class="right">
				<view class="top">一站式诉讼</view>
				<view class="bottom">点击切换/新增</view>
			</view>
		</view>
		<!-- 案件列表 -->
		<view
			class="case common"
			v-for="(item, index) in caseList"
			:key="item.id"
			@click="changeIndex(index)"
			:class="{ active: activeIndex === index }"
		>
			<view class="icon">
				<up-icon
					:name="activeIndex === index ? 'bookmark-fill' : 'bookmark'"
					:color="activeIndex === index ? '#3B3F88' : '#AFAFAF'"
					size="26"
				></up-icon>
			</view>
			<span class="name">{{ item.name }}</span>
			<view class="select" v-if="activeIndex === index">
				<up-icon name="checkmark" color="#3B3F88" size="20"></up-icon>
			</view>
		</view>

		<!-- 底部新增按钮 -->
		<view class="add">
			<view class="icon">
				<up-icon name="plus-circle-fill" size="24" color="#3B3F88"></up-icon>
			</view>
			<span class="text">新建案件</span>
		</view>
	</up-popup>
</template>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 20rpx;

	.option {
		margin-left: 20rpx;
		background-color: #fff;
		width: 456rpx;
		height: 108rpx;
		border-radius: 200rpx;
		display: flex;
		align-items: center;

		.left {
			margin: 0 20rpx 0 40rpx;
		}

		.right {
			.top {
				color: #2b2b33;
				font-size: 14px;
				font-weight: 700;
			}
			.bottom {
				color: #8f9399;
				font-size: 12px;
			}
		}
	}
}
.todo {
	margin: 80rpx 0 50rpx 0;
	padding-left: 20rpx;
	.title {
		font-size: 22px;
		font-weight: 700;
		line-height: 22px;
		color: #2b2b33;
	}

	.direction {
		margin: 20rpx 0;
		font-size: 12px;
		color: #8f9399;
	}
}

.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.item {
		width: 336rpx;
		height: 308rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;

		position: relative;

		.icon {
			position: absolute;
			left: 20rpx;
			top: 50rpx;
			margin-bottom: 40rpx;
		}

		.direc {
			position: absolute;
			left: 20rpx;
			bottom: 40rpx;

			.detail {
				color: #8f9399;
				font-size: 12px;
				margin-top: 10rpx;
			}
		}
	}
}

.more {
	font-size: 12px;
	color: #8f9399;
	margin-top: 60rpx;
	text-align: center;
}

.popup {
	position: relative;

	.title {
		height: 200rpx;
		width: 580rpx;
		display: flex;
		align-items: center;

		.left {
			margin-right: 20rpx;
		}

		.right {
			.top {
				color: #2b2b33;
				font-weight: 600;
			}
			.bottom {
				font-size: 12px;
				color: #8f9399;
			}
		}
	}
	.case {
		width: 580rpx;
		height: 100rpx;
		font-size: 16px;
		// color: #666666;
		display: flex;
		align-items: center;
		padding-left: 20rpx;

		.name {
			margin: 0 20rpx 0rpx 20rpx;
		}
	}

	.add {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 580rpx;
		height: 150rpx;
		background-color: #fff;
		padding-left: 20rpx;
		display: flex;
		align-items: center;

		.icon {
			margin-right: 20rpx;
		}
	}
}

.common {
	color: #666666;
}

.active {
	background-color: #fff;
	color: #3b3f88;
	font-weight: 700;
}
</style>
