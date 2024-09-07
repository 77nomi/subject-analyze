/**
 * @Description: 测试表单的rules
 * @Author: yuennchan@163.com
 * @Date: 2024-09-07 14:31:46
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-07 16:32:04
 */
export const rules = {
	'first': [
		{
			type: 'array',
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
	'second': [
		{
			type: 'array',
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
	'third': [
		{
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
	'forth': [
		{
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
	'fifth': [
		{
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
	'sixth': [
		{
			required: true,
			message: '您的回答不完整，请检查并选择所有必要的选项。',
			trigger: ['blur', 'change'], 
		},
	],
}