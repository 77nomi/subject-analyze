<template>
	<view class="header">
		<up-navbar height="80rpx" title="注册" :placeholder="true" >
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
			注册
		</view>
		<view class="form">
			<up-form
				:model="registerForm"
				ref="form"
				labelWidth="140rpx"
			>
				<up-form-item
					label="邮箱"
					prop="email"
				>
					<up-input
						v-model="registerForm.email"
					></up-input>
				</up-form-item>
				<up-form-item
					label="用户名"
					prop="username"
				>
					<up-input
						v-model="registerForm.username"
					></up-input>
				</up-form-item>
				<up-form-item
					label="密码"
					prop="password"
				>
					<up-input
						v-model="registerForm.password"
					></up-input>
				</up-form-item>
				<up-form-item
					label="确认密码"
					prop="confirmPSW"
				>
					<up-input
						v-model="registerForm.confirmPSW"
					></up-input>
				</up-form-item>
				<up-form-item
					label="验证码"
					prop="confirmPSW"
					labelPosition="top"
				>
					<up-input style="width: 120rpx !important;" v-model="registerForm.confirmPSW" ></up-input>
					<up-image src="/assets/icon_register_auth.png" height="60rpx" width="100rpx"></up-image>
				</up-form-item>
			</up-form>
			<up-button class="btn font-red" shape="circle" text="注册"></up-button>
		</view>
	</view>
</template>

<script setup>
	import { ref} from 'vue'
	
	const registerForm = ref({
		email: '',
		username: '',
		password: '',
		confirmPSW: '',
		code: ''
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
			.btn{
				position: absolute;
				right: 0;
				width: 200rpx;
				top: 550rpx;
			}
		}
	}
</style>