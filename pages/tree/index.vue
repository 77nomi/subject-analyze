<template>
	<view class="header">
		<up-navbar height="80rpx" title="学习路线&技能树" :placeholder="true" >
			<template #left>
				<up-image src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getCodeIdAPI, getCodeImgAPI, registerAPI } from '@/api/user.js'

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
		captchaId: ''
	})
	
	const showPSW = ref(true)
	const showComfirmPSW = ref(true)
	
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
	  .then(async (valid) => {  
	    if (valid) {  
			const params = {
				email: formData.value.email,
				username: formData.value.username,
				password: formData.value.password,
				value: formData.value.value,
				captchaId: formData.value.captchaId
			}
			await registerAPI(params)
			.then((res)=>{
				if(res.session_token){
					uni.setStorageSync('token', res.session_token);
					uni.reLaunch({
						url:'/pages/home/index'
					})
				}else{
					console.log(res.error)
					if(res.error==="Username already exists")
						uni.$u.toast('用户名已存在')
					else
						uni.$u.toast('注册失败')
				}
			})
			.catch((err)=>{
				console.log(err)
				uni.$u.toast('注册失败')
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
	}
</style>