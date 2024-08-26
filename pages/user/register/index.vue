<!--
 * @Description: 注册
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:21:02
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-26 21:56:30
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" title="" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="title font-red">
			注册
		</view>
		<view class="form">
			<up-form
				:model="formData"
				ref="formData"
				labelWidth="140rpx"
				:rules="rules"
			>
				<up-form-item
					label="头像"
					prop="avatar"
				>
					<up-upload
						:fileList="avatar"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						multiple
						:maxCount="1"
					></up-upload>
				</up-form-item>
				<up-form-item
					label="邮箱"
					prop="email"
				>
					<up-input
						v-model="formData.email"
					></up-input>
				</up-form-item>
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
							<up-icon size="16" @click="showPSWBtn(1)" :name="showPSW?'eye-off':'eye-fill'"></up-icon>
						</template>
					</up-input>
				</up-form-item>
				<up-form-item
					label="确认密码"
					prop="confirmPSW"
				>
					<up-input
						v-model="formData.confirmPSW"
						:password="showComfirmPSW"
					>
						<template #suffix>
							<up-icon size="16" @click="showPSWBtn(2)" :name="showComfirmPSW?'eye-off':'eye-fill'"></up-icon>
						</template>
					</up-input>
				</up-form-item>
				<up-form-item
					label="验证码"
					prop="value"
				>
					<up-input 
						v-model="formData.value"
						class="codeBox"
					>
						<template #suffix>
							<image @click="updateCode" src="/assets/icon/icon_register_reload.png" style="height: 32rpx; width: 32rpx;"></image>
						</template>
					</up-input>
					<up-image class="codeImg" :src="codeImgSrc" height="66rpx" width="150rpx" mode="aspectFit"></up-image>
				</up-form-item>
			</up-form>
			<up-button @click="submit" class="btn font-red" shape="circle" text="注册"></up-button>
		</view>
	</view>
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue'
	import { getCodeIdAPI, getCodeImgAPI, registerAPI } from '@/api/user.js'
	import Upload from 'luch-request'

	onMounted( async () => {
		await updateCode()
	})
	
	const codeImgSrc = ref('')
	const formData = ref({
		email: '',
		username: '',
		password: '',
		confirmPSW: '',
		value: '',
		captchaId: '',
		avatar: ''
	})
	const avatar = ref([])
	const afterRead = async (event) => {
	  let lists = [].concat(event.file);
	  lists.map((item) => {
	    avatar.value.push({
	      ...item,
	    });
	  });
		formData.value.avatar = avatar.value
	};
	
	// 删除图片
	const deletePic = (event) => {
	  avatar.value.splice(event.index, 1);
	};
	
	const showPSW = ref(true)
	const showComfirmPSW = ref(true)
	
	const rules = {  
		'avatar': [
			{  
				required: true,  
				message: '请上传头像', 
			},  
		],
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
		],
		'confirmPSW': [
			{
				type: 'string',
				required: true,
				message: '请再次输入密码',
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
			{
				validator:  (rule, value, callback) => {
				  if (value !== formData.value.password) {
					 callback(new Error())
				  } else {
					 callback()
				  }
				},
				message: '两次输入的密码不一致',
				trigger: ['blur', 'change'], 
			},
		],
		'value': {
			type: 'string',
			required: true,
			len: 6,
			message: '请输入6位验证码',
			trigger: ['blur', 'change'], 
		},
	}
	
	/**
	 * 获取验证码
	 */
	const updateCode = async()=>{
		/**
		 * 获取验证码id
		 */
		const getCodeID = async ()=>{
			await getCodeIdAPI()
			.then((res)=>{
				formData.value.captchaId = res.captchaId
			})
			.catch((err)=>{
				console.log(err)
			})
		}
		/**
		 * 获取验证码图片
		 */
		const getCodeImg = async ()=>{
			await getCodeImgAPI(formData.value.captchaId)
			.then((res)=>{
				const arrayBuffer = new Uint8Array(res)
				const base64 = "data:image/png;base64," + uni.arrayBufferToBase64(arrayBuffer) //这里需要添加前缀
				codeImgSrc.value = base64 || ''
			})
			.catch((err)=>{
				console.log(err)
			})
		}
		
		await getCodeID()
		await getCodeImg()
	}
	
	/**
	 * 控制密码是否显示
	 */
	const showPSWBtn = (type)=>{
		if(type===1){
			showPSW.value = !showPSW.value
		} else {
			showComfirmPSW.value = !showComfirmPSW.value
		}
	}
	
	/**
	 * 提交注册
	 */
	const submit = ()=>{  
	  formData.value.validate()
		console.log(avatar.value[0])
	  .then(async (valid) => {  
	    if (valid) {
				const params = {
						email: formData.value.email,
						username: formData.value.username,
						password: formData.value.password,
						value: formData.value.value,
						captchaId: formData.value.captchaId
				}
				uni.uploadFile({
					url: 'http://8.138.115.27:8886/signup',
					files: avatar.value[0],
					name: 'avatar',
					formData: params,
					success: (res) => {
						console.log(res)
						res.data = JSON.parse(res.data)
						if(res.data.message === "User signup successfully"){
							uni.setStorageSync('token', res.data.session_token);
							uni.setStorageSync('avatar', res.data.avatar);
							uni.setStorageSync('username', res.data.username);
							uni.reLaunch({
								url:'/pages/home/index'
							})
						}else{
							console.log(res.data.error)
							if(res.data.error==="Email already exists")
								uni.$u.toast('邮箱已存在')
							else if (res.data.error === "Invalid captcha")
								uni.$u.toast('验证码无效')
							else
								uni.$u.toast('注册失败')
						}
					},
					fail: (err)=>{
						console.log(err)
						uni.$u.toast('注册失败')
					}
				});
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
			.codeBox{
				align-items: left;
				.u-input--square{
					border-radius: 0rpx;
				}
			}
			.codeImg{
				background-color: #FFFFFF;
				margin-left: 10rpx;
			}
			.btn{
				margin-top: 20rpx;
				width: 200rpx;
			}
		}
	}
</style>