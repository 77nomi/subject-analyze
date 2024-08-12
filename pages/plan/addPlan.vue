<template>
	<view class="header">
		<up-navbar height="80rpx" title="添加记录" :placeholder="true" >
			<template #left>
				<up-image @click="toBack" src="/assets/icon/icon_top_bar_back.png" width="50rpx" height="50rpx"></up-image>	
			</template>
			<template #right>
				<up-image src="/assets/icon/icon_top_bar_list.png" width="50rpx" height="50rpx"></up-image>	
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="form">
			<up-form
				:model="formData"
				ref="formData"
				labelWidth="140rpx"
				:rules="rules"
			>
				<up-form-item
					label="名称"
					prop="plan_name"
				>
					<up-input
						v-model="formData.plan_name"
					></up-input>
				</up-form-item>
				<up-form-item
					label="学科"
					prop="subject_id"
					required
				>
					<up-input
						v-model="formData.subject_id"
						disabled
						@click="showPicker" 
						type="select" 
						:select-open="picker.show"
					></up-input>
				</up-form-item>
				<up-form-item
					label="日期"
					prop="study_time"
					required
				>
					<up-input
						v-model="formData.study_time"
						disabled
						@click="showCalendar" 
						type="select" 
						:select-open="calendar.show"
					></up-input>
				</up-form-item>
				<up-form-item
					label="时长"
					prop="spend_time"
					required
				>
					<up-input
						v-model="formData.spend_time"
					></up-input>
				</up-form-item>
				<up-form-item
					label="备注"
					prop="note"
				>
					<up-textarea 
						v-model="formData.note"
						count
						maxlength="200">
					</up-textarea>
				</up-form-item>
			</up-form>
			<up-button @click="submit" class="btn font-red" shape="circle" text="添加"></up-button>
		</view>
	</view>
	<up-calendar 
		:showTitle="false" 
		:show="calendar.show" 
		color="#AC0404" 
		:closeOnClickOverlay="true"
		:maxDate="calendar.maxDate"
		:minDate="calendar.minDate"
		:monthNum="calendar.monthNum"
		@confirm="timeConfirm"
		@close="calendarClose">
	</up-calendar>
	<up-loading-page loadingText="" :loading="calendar.loading"></up-loading-page>
	<up-picker 
		:show="picker.show" 
		:closeOnClickOverlay="true"
		:columns="picker.columns" 
		keyName="label"
		@confirm="pickerConfirm"
		@close="PickerClose"
		@cancel="PickerClose">
	</up-picker>
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue'
	import { addPlanAPI } from '@/api/plan.js'
	import { timeToTimestamp } from '/utils/time.js'

	onMounted( async () => {
		setTimeLimit()
	})
	
	const formData = ref({
		plan_name: '',
		subject_id: '',
		study_time: '',
		spend_time: '',
		note: ''
	})
	const rules = {   
		'plan_name': [
			{  
				max: 20,
				message: '长度不超过20个字符',  
				trigger: ['blur', 'change'],  
			}
		],
		'subject_id': [
			{  
				type: 'string',  
				required: true,  
				message: '请选择学科',  
				trigger: ['blur', 'change'],  
			}
		],
		'study_time': [
			{  
				type: 'string',  
				required: true,  
				message: '请选择日期',
				trigger: ['blur', 'change'],
			}
		],
		'spend_time': [
			{
				type: 'string',
				required: true,
				message: '请输入时长',
				trigger: ['blur', 'change'], 
			},
			{
				pattern: /^(?!0(\.0*)?$)(\d+(\.\d)?)$/,
				message: '只能为整数或一位小数，且必须为整数',
				trigger: ['blur', 'change'], 
			}
		],
		'note': [
			{  
				max: 200,
				message: '长度不超过200个字符',  
				trigger: ['blur', 'change'],  
			}
		]
	}
	
	
	const calendar = ref({
		show: false,
		minDate: '',
		maxDate: '',
		defaultDate: '',
		monthNum: 7,
		loading: false
	})
	/**
	 * 打开日期选择器
	 */
	const showCalendar = ()=>{
		calendar.value.show = true
	}
	/**
	 * 关闭日期选择器
	 */
	const calendarClose = ()=>{
		calendar.value.show=false
	}
	/**
	 * 确认日期
	 */
	const timeConfirm = (e)=>{
		formData.value.study_time = e[0]
		calendar.value.show = false
	}
	/**
	 * 设置日期限制
	 */
	const setTimeLimit = ()=>{
		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		// 计算六个月前的日期
		let sixMonthsAgo = new Date(date);
		sixMonthsAgo.setMonth(date.getMonth() - 6);

		let minYear = sixMonthsAgo.getFullYear();
		let minMonth = sixMonthsAgo.getMonth() + 1;
		let minDay = sixMonthsAgo.getDate();

		// 格式化月份和日期
		if (month <= 9) {
		  month = '0' + month;
		}
		if (day <= 9) {
		  day = '0' + day;
		}
		if (minMonth <= 9) {
		  minMonth = '0' + minMonth;
		}
		if (minDay <= 9) {
		  minDay = '0' + minDay;
		}

		calendar.value.minDate = minYear + '-' + minMonth + '-' + minDay;
		calendar.value.maxDate = year + '-' + month + '-' + day;
	}
	
	
	const picker = ref({
		show: false,
		columns:[[
			{
				label: 'Java',
				id: 1
			},
			{
				label: 'C语言',
				id: 2
			},
			{
				label: 'Python',
				id: 3
			},
			{
				label: 'C++',
				id: 4
			},
		]]
	})
	/**
	 * 打开学科选择
	 */
	const showPicker = ()=>{
		picker.value.show = true
	}
	/**
	 * 关闭学科选择
	 */
	const PickerClose = ()=>{
		picker.value.show=false
	}
	/**
	 * 确认学科
	 */
	const pickerConfirm = (e)=>{
		console.log(e.value[0].label)
		formData.value.subject_id = e.value[0].label
		picker.value.show=false
	}
	
	
	/**
	 * 提交表单
	 */
	const submit = ()=>{  
	  formData.value.validate()
	  .then(async (valid) => {  
	    if (valid) {  
			formData.value.subject_id = picker.value.columns[0].find(item => item.label === formData.value.subject_id).id
			const time = timeToTimestamp(formData.value.study_time+' T00:00:00Z')
			const params = {
				subject_id: formData.value.subject_id,
				study_time: timeToTimestamp(formData.value.study_time),
				spend_time: Number(formData.value.spend_time),
				plan_name: formData.value.plan_name,
				note: formData.value.note,
				add_time: Math.floor(Date.now() / 1000)
			}
			console.log(params)
			await addPlanAPI(params)
			.then((res)=>{
				if(res.msg === "success"){
					uni.$u.toast('添加成功')
					uni.reLaunch({
						url: '/pages/plan/index'
					})
				}
			})
			.catch((err)=>{
				console.log(err)
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
		.form{
			margin-top: 250rpx;
			width: 75%;
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