<!--
 * @Description: 添加、编辑、查看记录页面
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:20:12
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-24 19:20:32
-->
<template>
	<view class="header">
		<up-navbar height="80rpx" :title="plan_id==0?'添加记录':'编辑记录'" :placeholder="true" >
			<template #left>
				<image @click="toBack" src="/assets/icon/icon_top_bar_back.png" style="width: 50rpx; height: 50rpx"></image>	
			</template>
			<template #right>
				<image src="/assets/icon/icon_top_bar_list.png" style="width: 50rpx; height: 50rpx"></image>
			</template>
		</up-navbar>
	</view>
	<view class="container">
		<view class="form">
			<up-form
				:model="formData"
				ref="formRef"
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
					prop="choosedSubject"
					required
				>
					<up-input
						v-model="formData.choosedSubject"
						disabled
						@click="openPicker" 
						type="select" 
						:select-open="showPicker"
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
					>
						<template #suffix>
							<up-icon name="calendar" size="24"></up-icon>
						</template>
					</up-input>
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
				<up-form-item
					label="标签"
					prop="tags"
				>
					<uni-data-checkbox max="3" mode="tag" multiple v-model="formData.tags" :localdata="tags" selectedColor="#2C2C2C"></uni-data-checkbox>
				</up-form-item>
			</up-form>
			<up-button @click="submit" class="btn font-red" shape="circle" :text="plan_id==0?'添加':'保存'"></up-button>
		</view>
	</view>
	<up-calendar 
		title="选择日期"
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
	<up-picker title="选择学科" :show="showPicker" ref="uPickerRef" :columns="columns" @confirm="confirm" @change="changeHandler" @cancel="closePicker"></up-picker>
</template>

<script setup>
	import { ref, onMounted, getCurrentInstance } from 'vue'
	import { addPlanAPI, GetPlanDetailAPI, ChangePlanAPI, GetSubjectMapAPI } from '@/api/plan.js'
	import { timeToTimestamp, timestampToDate } from '/utils/time.js'
	onMounted( async () => {
		const options = getCurrentInstance()
		if(options.attrs.plan_id)
			plan_id.value = options.attrs.plan_id
		else if(options.attrs.__pageInstance)
			plan_id.value = options.attrs.__pageInstance.options.plan_id
		setTimeLimit()
		await initForm()
		await getMajorList()
	})
	const plan_id = ref(0)
	const formRef = ref(null)
	const formData = ref({
		plan_name: '',
		choosedSubject: '',
		study_time: '',
		spend_time: '',
		note: '',
		tags: []
	})
	const rules = {   
		'plan_name': [
			{  
				max: 20,
				message: '长度不超过20个字符',  
				trigger: ['blur', 'change'],  
			}
		],
		'choosedSubject': [
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
	const tags = ref([
		{
			text: '有问题',
			value: 1
		},
		{
			text: '新知识',
			value: 2
		},
		{
			text: '待总结',
			value: 3
		},
		{
			text: '没看懂',
			value: 4
		},
		{
			text: '有点问题',
			value: 5
		},
		{
			text: '其他',
			value: 6
		},
	])
	
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
	
	
	const allMajorList = ref([])
	const columns = ref([]);
	const showPicker = ref(false);
	const uPickerRef = ref(null)
	const nowChoose = ref(null)
	const majorData = ref({})
	const subject_cat_key = ref('')
  const subject_sub_key = ref('')
  const subject_key = ref('')
	
	
	/**
	 * @description: 更改选择
	 * @param {*} e
	 * @return
	 */
	const changeHandler = (e) => {
		const {
			columnIndex,
			value,
			values,
			index,
			indexs,
		} = e;
	
		if (columnIndex === 0) {
			uPickerRef.value.setColumnValues(1, allMajorList.value[index].secondColumn);
			uPickerRef.value.setColumnValues(2, allMajorList.value[index].childList[0].thirdColumn);
		}else if (columnIndex === 1){
			uPickerRef.value.setColumnValues(2, allMajorList.value[indexs[0]].childList[indexs[1]].thirdColumn);
		}
	};
	
	/**
	 * @description: 确认选择
	 * @param {*} e
	 * @return
	 */
	const confirm = (e) => {
		console.log(e)
		const first = e.indexs[0]
		const second = e.indexs[1]
		const third = e.indexs[2]
		subject_cat_key.value = e.value[0]
		subject_sub_key.value = e.value[1]
		subject_key.value = e.value[2]
		formData.value.choosedSubject = e.value[2]
		showPicker.value = false;
	};
	
	/**
	 * @description: 关闭选择器
	 * @return
	 */
	const closePicker = ()=>{
		showPicker.value = false;
	}
	
	/**
	 * @description: 打开选择器
	 * @return
	 */
	const openPicker = ()=>{
		showPicker.value=true
	}
	
	/**
	 * @description: 获取学科列表
	 * @return
	 */
	const getMajorList = async()=>{
		let majorList = []
		let firstColumn = []
		const buildTree = (dataList)=>{
			for(const key in dataList){
				let stmpTree = {
					label: key
				}
				firstColumn.push(key)
				let secondColumn = []
				const item = dataList[key]
				let childTreeList = []
				for(const secondKey in item){
					let secondTree = {
						label: secondKey,
						thirdColumn: item[secondKey]
					}
					secondColumn.push(secondKey)
					childTreeList.push(secondTree)
				}
				stmpTree.childList = childTreeList
				stmpTree.secondColumn = secondColumn
				majorList.push(stmpTree)
			}
			columns.value.push(firstColumn)
			columns.value.push(majorList[0].secondColumn)
			columns.value.push(majorList[0].childList[0].thirdColumn)
			allMajorList.value = majorList
		}
		
		await GetSubjectMapAPI()
		.then((res)=>{
			buildTree(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	

	/**
	 * 编辑时候的初始化表单
	 */
	const initForm = async()=>{
		function setData(data) {
			subject_cat_key.value = data.subject_cat_key
			subject_sub_key.value = data.subject_sub_key
			subject_key.value = data.subject_key
			
			// const choosedSubject = [subject_cat_key.value,subject_sub_key.value,subject_key.value].join(', ')
			formData.value = {
				plan_name: data.plan_name,
				choosedSubject: subject_key.value,
				study_time: timestampToDate(data.study_time),
				spend_time: String(data.spend_time),
				note: data.note,
				tags: data.tags
			}
		}
		if(plan_id.value!=0){
			const query = "plan_id="+plan_id.value
			await GetPlanDetailAPI(query)
			.then((res)=>{
				setData(res)
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
	
	
	/**
	 * 提交表单
	 */
	const submit = ()=>{  
		console.log(formData.value)
		formRef.value.validate()
		.then(async (valid) => {  
			if (valid) {  
				const time = timeToTimestamp(formData.value.study_time+' T00:00:00Z')
				const params = {
					plan_name: formData.value.plan_name,
					subject_cat_key: subject_cat_key.value,
					subject_sub_key: subject_sub_key.value,
					subject_key: subject_key.value,
					study_time: timeToTimestamp(formData.value.study_time),
					spend_time: Number(formData.value.spend_time),
					add_time: Math.floor(Date.now() / 1000),
					note: formData.value.note,
					tags: formData.value.tags,
				}
				console.log(params)
				if(plan_id.value==0){
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
				}else{
					params.plan_id = plan_id.value
					await ChangePlanAPI(params)
					.then((res)=>{
						if(res.msg === "success"){
							uni.$u.toast('修改成功')
							uni.reLaunch({
								url: '/pages/plan/index'
							})
						}
					})
					.catch((err)=>{
						console.log(err)
					})
				}
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
	.is--tag{
		margin-right: 7rpx !important;
	}
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
			margin-top: 150rpx;
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