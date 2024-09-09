<!--
 * @Description: 选择岗位表单组件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-09 17:42:44
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-09 17:52:28
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
				label="请选择你感兴趣的岗位"
				prop="jobs"
			>
				<up-checkbox-group
					v-model="formData.jobs"
					placement="column"
				>
					<up-checkbox
						v-for="(item) in options"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
				</up-checkbox-group>
			</up-form-item>
		</up-form>
		<up-button @click="submit" class="btn" color="#0055ff" shape="circle" text="确认"></up-button>
	</view>
</template>
<script setup>  
import { ref, defineEmits } from 'vue';
import { options } from './jobOptions.js'
import { rules } from './jobRules.js'

	const formData = ref({
		jobs: []
	})
	const formRef = ref()

	const emit = defineEmits();
	const submit = ()=>{
		formRef.value.validate()
		.then(async (valid) => {
			if(valid){
				const params = {
					is_test: 0,
					data: formData.value.jobs
				}
				console.log(params)
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
</style>