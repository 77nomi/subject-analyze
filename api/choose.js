/**
 * @Description: 选择岗位和测评的接口文件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-11 21:33:41
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-11 22:13:37
 */

import {
	http
} from '@/utils/http.js'


/**
 * 提交测试表单
 * @return 
 */
export const submitAPI = (params) => {
	return http.request({
		url: '/question/submit',
		method: 'POST',
		data: params
	})
}


/**
 * 获取推荐岗位
 * @return 
 */
export const getJobAPI = () => {
	return http.request({
		url: '/job/get-recomment',
		method: 'GET'
	})
}
