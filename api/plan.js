// 学习计划的接口文件
import {
	http
} from '@/utils/http.js'

/**
 * 添加计划
 * @return
 */
export const addPlanAPI = (params) => {
	return http.request({
		url: '/study/add-plan',
		method: 'POST',
		header: {
			Authorization: uni.getStorageSync('token')
		},
		data: params
	})
}