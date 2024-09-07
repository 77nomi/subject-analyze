<!--
 * @Description: 性格测试表单组件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-05 16:07:07
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-07 15:13:50
-->
<template>
	<view class="whole">
		<up-form
				labelPosition="top"
				:model="formData"
				:rules="rules"
				labelWidth="100%"
				ref="formRef"
		>
			<up-form-item
				:required="true"
				label="你对以下哪些技术领域最感兴趣？"
				prop="formData.first"
			>
				<up-checkbox-group
					v-model="formData.first"
					placement="column"
					@change="(e)=>handleCheckboxChange(e,1)"
				>
					<up-checkbox
						v-for="(item) in options.first"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
				</up-checkbox-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="你目前掌握或熟悉哪些编程语言/技术工具？"
				prop="formData.second"
			>
				<up-checkbox-group
					v-model="formData.second"
					placement="column"
					@change="(e)=>handleCheckboxChange(e,2)"
				>
					<up-checkbox
					v-for="(item) in options.second"
						:key="item.key"
						:label="item.label"
						:name="item.key"
						activeColor="#ac0404"
						labelColor="#333333"
					>
					</up-checkbox>
				</up-checkbox-group>
			</up-form-item>
			<up-form-item
				:required="true"
				label="在解决问题时，你更倾向于哪种思维方式？"
				prop="formData.third"
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
				label="在自学新技能或知识时，你的动力主要来源于？"
				prop="formData.forth"
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
				label="你如何评价自己在压力下的工作效率和表现？"
				prop="formData.fifth"
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
				label="在团队合作中，你更倾向于哪种描述？"
				prop="formData.sixth"
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
	</view>
</template>
<script setup>  
import { ref } from 'vue';
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
	
	const handleCheckboxChange = (e,num)=>{
		console.log(e,num)
		
	}

</script>

<style lang="scss">
	.whole{
		width: 90%;
		margin: 0 auto;
		padding: 10rpx 30rpx;
	}
	.u-form-item__body__left__content__label{
		font-size: 34rpx !important;
	}
</style>