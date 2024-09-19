<!--
 * @Description: 登录
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:20:58
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-19 15:16:36
-->
<template>
	<headerComponent title="登录"></headerComponent>
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
					label="邮箱"
					prop="email"
				>
					<up-input
						v-model="formData.email"
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
			<view class="tips" @click="toRegister()">
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
	import { getJobAPI } from '@/api/choose.js'
	
	const formData = ref({
		email: '',
		password: ''
	})
	const rules = {
		'email': [
			{  
				type: 'string',  
				required: true,  
				message: '请输入邮箱',  
				trigger: ['blur', 'change'],  
			},  
			{
				pattern:/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
				message: '请输入正确的邮箱格式',  
				trigger: ['blur', 'change'],  
			}
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
	
	const toRegister = ()=>{
		uni.navigateTo({
			url: '/pages/user/register/index'
		})
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
					email: formData.value.email,
					password: formData.value.password
				}
				await loginAPI(params)
				.then( async (res)=>{
					console.log(res)
					if(res.session_token){
						uni.setStorageSync('token', res.session_token);
						uni.setStorageSync('avatar', res.avatar);
						uni.setStorageSync('username', res.username);
						uni.setStorageSync('is_test', res.is_test);
						uni.setStorageSync('is_new', res.is_new);
						if(res.is_test===2){
							uni.reLaunch({
								url:'/pages/choose/index'
							})
						}else{
							await getJobAPI()
								.then((res)=>{
									console.log(res)
									if(res.length>0){
										uni.setStorageSync('recomendJob', res);
										uni.reLaunch({
											url: '/pages/home/index'
										})
									}
								})
								.catch((err)=>{
									console.log(err)
								})
						}
					}else{
						console.log(res.error)
						if(res.error==='User does not exist')
							uni.$u.toast('邮箱不存在')
						else if(res.error==='Email and password do not match')
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
				font-size: 22rpx;
			}
			.btn{
				margin-top: 20rpx;
				width: 200rpx;
			}
		}
	}
</style>