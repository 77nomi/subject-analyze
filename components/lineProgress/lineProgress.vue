<script setup>
import { useStepStore } from '@/store/index.js'

const store = useStepStore()
// 回退至上一页
const fallBack = () => {
	uni.navigateBack()
}
</script>

<template>
	<!-- 导航栏 -->
	<up-navbar title="劳动纠纷" placeholder height="60" leftIconSize="0">
		<template #left>
			<span class="back" @click="fallBack">上一步</span>
		</template>
	</up-navbar>
	<!-- 进度条 -->
	<view class="line">
		<view class="line-right">
			<span class="right-title">01基本信息-问题描述</span>
			<view class="right-progress">
				<!-- <up-line-progress :percentage="30" activeColor="#3b3f88" :showText="false"></up-line-progress> -->
				<up-steps :current="store.step" activeColor="#3c4088" inactiveColor="#333333">
					<up-steps-item title="基本信息"></up-steps-item>
					<up-steps-item title="诉讼准备"></up-steps-item>
					<up-steps-item title="立案指导"></up-steps-item>
					<up-steps-item title="AI评估"></up-steps-item>
					<up-steps-item title="结案归档"></up-steps-item>
				</up-steps>
			</view>
		</view>
	</view>
</template>

<style lang="scss">
.back {
	color: #3b3f88;
}

.line {
	padding: 20rpx 10rpx;
	height: 128rpx;
	display: flex;
	align-items: center;
	background-color: #fff;

	.line-left {
		width: 30%;
		margin-right: 20rpx;
	}

	.line-right {
		flex: 1;
		display: flex;
		flex-direction: column;

		.right-title {
			color: #666666;
			font-size: 12px;
			margin-bottom: 20rpx;
		}

		// .right-progress {
		// 	margin-bottom: 20rpx;
		// }
	}
}
</style>
