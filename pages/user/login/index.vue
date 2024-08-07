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
				:model="formData"
				ref="formData"
				labelWidth="140rpx"
				:rules="rules"
			>
				<up-form-item
					label="用户名"
					prop="username"
				>
					<up-input
						v-model="formData.username"
					></up-input>
				</up-form-item>
				<up-form-item
					label="密码"
					prop="password"
				>
					<up-input
						v-model="formData.password"
						:password="showPSW"
					>
						<template #suffix>
							<up-icon size="16" @click="showPSWBtn()" :name="showPSW?'eye-off':'eye-fill'"></up-icon>
						</template>
					</up-input>
				</up-form-item>
			</up-form>
			<view class="tips">
				没有账号？
				<span style="color: #6a6b6b;">注册</span>
				<!-- <span class="forget" style="color: #6a6b6b;">忘记密码</span> -->
			</view>
			<up-button @click="submit" class="btn font-red" shape="circle" text="登录"></up-button>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	import { loginAPI } from '@/api/user.js'
	
	const formData = ref({
		username: '',
		password: ''
	})
	const rules = {
		'username': [
			{  
				type: 'string',  
				required: true,  
				message: '请输入用户名',  
				trigger: ['blur', 'change'],  
			},
			{
				pattern: /^[0-9a-zA-Z]*$/g,
				transform(value) {
					return String(value);
				},
				message: '只能包含字母或数字',
				trigger: ['blur', 'change']
			},
		],
		'password': [
			{
				type: 'string',
				required: true,
				message: '请输入密码',
				trigger: ['blur', 'change'], 
			},
			{
				pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/,
				transform(value) {
					return String(value);
				},
				message: '6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种',
				trigger: ['blur', 'change'], 
			},
		]
	}
	
	const showPSW = ref(true)
	/**
	 * 控制密码是否显示
	 */
	const showPSWBtn = ()=>{
		showPSW.value = !showPSW.value
	}
	
	/**
	 * 提交登录
	 */
	const submit = ()=>{  
		formData.value.validate()
		.then(async (valid) => {  
			if (valid) {
				const params = {
					username: formData.value.username,
					password: formData.value.password
				}
				await loginAPI(params)
				.then((res)=>{
					if(res.session_token){
						uni.setStorageSync('token', res.session_token);
						uni.reLaunch({
							url:'/pages/home/index'
						})
					}else{
						if(res.error==="Username does not exist")
							uni.$u.toast('用户名不存在')
						else if(res.error==="Username and password do not match")
							uni.$u.toast('密码错误')
						else
							uni.$u.toast('登录失败')
					}
				})
				.catch((err)=>{
					console.log(err)
					uni.$u.toast('登录失败')
				})
			}
		})
		.catch(() => {
		});  
		} 
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
		justify-content: center;
		.title{
			margin-top: 250rpx;
			font-size: 48rpx;
			font-weight: 600;
			letter-spacing: 20rpx;
		}
		.form{
			width: 75%;
			margin-top: 50rpx;
			.u-input--square{
				background-color: #ffffff;
				height: 40rpx;
			}
			.u-input--radius{
				border-radius: 30rpx;
			}
			.tips{
				margin-top: 20rpx;
				font-size: 16rpx;
			}
			.btn{
				margin-top: 20rpx;
				width: 200rpx;
			}
		}
	}
</style>