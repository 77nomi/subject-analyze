/**
 * @Description: 选择岗位的rules文件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-09 17:48:27
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-09 17:48:57
 */

export const rules = {
	'jobs': [
		{
			type: 'array',
			required: true,
			message: '请选择您感兴趣的岗位',
			trigger: ['blur', 'change'], 
		},
	]
}