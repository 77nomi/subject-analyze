/**
 * @Description: 技能树相关接口
 * @Author: yuennchan@163.com
 * @Date: 2024-08-23 17:20:53
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-23 17:25:28
 */

import {
	http
} from '@/utils/http.js'

/**
 * @description: 获取我的学习科目
 * @return
 */
export const GetMyTreeAPI = () => {
	return http.request({
		url: '/study/get-learned-map',
		method: 'GET'
	})
}
