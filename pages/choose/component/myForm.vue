<!--
 * @Description: 性格测试表单组件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-05 16:07:07
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-08 14:10:52
-->
<template>
	<view class="whole">
		<up-form
				labelPosition="top"
				:model="formData"
				:rules="rules"
				labelWidth="100%"
				ref="formRef"
				errorType="toast"
		>
			<up-form-item
				:required="true"
				label="1. 你对以下哪些技术领域最感兴趣？"
				prop="first"
			>
				<up-checkbox-group
					v-model="formData.first"
					placement="column"
					@change="(e)=>handleCheckboxChange(e,0)"
				>
					<up-checkbox
						v-for="(item) in options.first"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						:disabled="disabled[0]"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
					<up-checkbox
						key="NONE"
						label="无"
						name="NONE"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
				</up-checkbox-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="2. 你目前掌握或熟悉哪些编程语言/技术工具？"
				prop="second"
			>
				<up-checkbox-group
					v-model="formData.second"
					placement="column"
					@change="(e)=>handleCheckboxChange(e,1)"
				>
					<up-checkbox
					v-for="(item) in options.second"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						:disabled="disabled[1]"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
					<up-checkbox
						key="NONE"
						label="无"
						name="NONE"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
				</up-checkbox-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="3. 在解决问题时，你更倾向于哪种思维方式？"
				prop="third"
			>
				<up-radio-group
					v-model="formData.third"
					placement="column"
				>
					<up-radio
						v-for="(item) in options.third"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-radio>
				</up-radio-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="4. 在自学新技能或知识时，你的动力主要来源于？"
				prop="forth"
			>
				<up-radio-group
					v-model="formData.forth"
					placement="column"
				>
					<up-radio
						v-for="(item) in options.forth"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-radio>
				</up-radio-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="5. 你如何评价自己在压力下的工作效率和表现？"
				prop="fifth"
			>
				<up-radio-group
					v-model="formData.fifth"
					placement="column"
				>
					<up-radio
						v-for="(item) in options.fifth"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-radio>
				</up-radio-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="6. 在团队合作中，你更倾向于哪种描述？"
				prop="sixth"
			>
				<up-radio-group
					v-model="formData.sixth"
					placement="column"
				>
					<up-radio
						v-for="(item) in options.sixth"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-radio>
				</up-radio-group>
			</up-form-item>
		</up-form>
		<up-button @click="submit" class="btn" color="#0055ff" shape="circle" text="提交"></up-button>
	</view>
</template>
<script setup>  
import { ref, defineEmits } from 'vue';
import { options } from './options.js'
import { rules } from './rules.js'

	const formData = ref({
		first: [],
		second: [],
		third: '',
		forth: '',
		fifth: '',
		sixth: '',
	})
	const formRef = ref(null)
	const disabled = ref([false,false])
	
	const handleCheckboxChange = (e,index)=>{
		let flag = 0
		e.forEach((item)=>{
			if(item==="NONE"){
				flag = 1
				disabled.value[index]=true
			}
		})
		if(flag === 0){
			disabled.value[index] = false
		}
	}
	
	const emit = defineEmits();
	const submit = ()=>{
		formRef.value.validate()
		.then(async (valid) => {
			if(valid){
				const params = {
					is_test: 1,
					data:[]
				}
				if(formData.value.first[formData.value.first.length-1]==='NONE'){
					formData.value.first = []
				}
				if(formData.value.second[formData.value.second.length-1]==='NONE'){
					formData.value.second = []
				}
				params.data.push(formData.value.first)
				params.data.push(formData.value.second)
				params.data.push(formData.value.third)
				params.data.push(formData.value.forth)
				params.data.push(formData.value.fifth)
				params.data.push(formData.value.sixth)
				emit('submit', params)
			}
		})
		.catch(() => {
		});  
	}

</script>

<style lang="scss">
	.whole{
		padding: 10rpx 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
	}
	.u-form-item__body__left__content__label{
		font-size: 32rpx !important;
	}
	.btn{
		width: 350rpx !important;
		margin: 10rpx auto;
	}
</style>