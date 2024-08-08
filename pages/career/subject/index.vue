<template>
	<view class="header">
		<up-navbar height="80rpx" title="就业规划-学科分类" :placeholder="true" >
			<template #left>
				<up-image src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="main-container">
			<template v-for="(type, typeIndex) in allMajorList" :key="typeIndex">
				<view class="title">
					{{type.major_type}}
				</view>
				<view class="major-box">
					<view class="major" v-for="(major, index) in type.majorList" :key="index">
						<span class="text">{{major.major_name}}</span>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getCodeIdAPI, getCodeImgAPI, registerAPI } from '@/api/user.js'

	onMounted( async () => {
		await updateCode()
	})
	
	const allMajorList = ref([
		{
			major_type: '工程类',
			majorList: [
				{
					major_id: 1,
					major_name: '通信工程'
				},
				{
					major_id: 2,
					major_name: '电子信息工程'
				},
				{
					major_id: 1,
					major_name: '通信工程'
				},
				{
					major_id: 2,
					major_name: '电子信息工程'
				},
			]
		},
		{
			major_type: '信息类',
			majorList: [
				{
					major_id: 3,
					major_name: '计算机科学与技术'
				},
				{
					major_id: 4,
					major_name: '软件工程'
				},
			]
		},
	])
	
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
		width: 100%;
		.main-container{
			width: 90%;
			margin: 0 auto;
			.title{
				margin-top: 20rpx;
				font-size: 38rpx;
				font-weight: 600;
				border-bottom: 5rpx solid #AC0404;
			}
			.major-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
				.major{
					height: 80rpx;
					width: 30%;
					background-color: #ffffff;
					border-radius: 20rpx;
					border: 2rpx solid black;
					text-align: center;
					display: table;
					padding: 2rpx;
					margin: 10rpx 1%;
					font-size: 28rpx;
					.text{
						display: table-cell;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>