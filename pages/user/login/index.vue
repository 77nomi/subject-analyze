<template>
	<view class="header">
		<up-navbar height="80rpx" title="登录" :placeholder="true" >
			<template #left>
				<up-image src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="title font-red">
			登录
		</view>
		<view class="form">
			<up-form
				:model="loginForm"
				ref="form"
				labelWidth="140rpx"
			>
				<up-form-item
					label="用户名"
					prop="username"
				>
					<up-input
						v-model="loginForm.username"
					></up-input>
				</up-form-item>
				<up-form-item
					label="密码"
					prop="password"
				>
					<up-input
						v-model="loginForm.password"
					></up-input>
				</up-form-item>
			</up-form>
			<view class="tips">
				没有账号？
				<span style="color: #6a6b6b;">注册</span>
				<span class="forget" style="color: #6a6b6b;">忘记密码</span>
			</view>
			<up-button class="btn font-red" shape="circle" text="登录"></up-button>
		</view>
	</view>
</template>

<script setup>
	import { ref} from 'vue'
	
	const loginForm = ref({
		username: '',
		password: ''
	})
</script>

<style lang="scss">
	.header{
		z-index: 999;
		height: 80rpx;
		box-shadow: 0 5rpx 5rpx #a8a8a8;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		.title{
			margin-top: 250rpx;
			font-size: 48rpx;
			font-weight: 600;
			letter-spacing: 20rpx;
		}
		.form{
			position: relative;
			margin-top: 50rpx;
			.u-input--square{
				background-color: #ffffff;
				height: 40rpx;
			}
			.u-input--radius{
				border-radius: 30rpx;
			}
			.tips{
				position: absolute;
				right: 0;
				font-size: 16rpx;
				.forget{
					margin-left: 110rpx;
				}
			}
			.btn{
				position: absolute;
				right: 0;
				width: 200rpx;
				top: 300rpx;
			}
		}
	}
</style>