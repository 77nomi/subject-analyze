<!--
 * @Description: 性格测试表单组件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-05 16:07:07
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-06 22:06:22
-->
<template>
	<view class="whole">
		<up-form
				labelPosition="left"
				:model="formData"
				:rules="rules"
				labelWidth="100%"
				ref="formRef"
		>
			<up-form-item
				:required="true"
				label="你喜欢的工作类型是什么"
				prop="formData.first"
			>
				<up-radio-group
					v-model="formData.first"
					placement="column"
				>
					<up-radio
						v-for="(item) in firstOptions"
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
import { ref, reactive } from 'vue';

	const formData = ref({
		first: ''
	})
	const firstOptions = [
		{
			key: 'A',
			label: '编程'
		},
		{
			key: 'B',
			label: '数据整理'
		}
	]
	const rules = {
		'first': [
			{
				type: 'string',
				required: true,
				message: '请选择',
				trigger: ['blur', 'change'], 
			},
		]
	}
		
	const formRef = ref(null)

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
	.u-form-item__body{
		flex-direction: column !important;
	}
</style>