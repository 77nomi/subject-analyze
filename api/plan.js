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
		data: params
	})
}

/**
 * 修改计划
 * @return
 */
export const ChangePlanAPI = (params) => {
	return http.request({
		url: '/study/change-plan',
		method: 'POST',
		data: params
	})
}
/**
 * 获取折线图记录
 * @return
 */
export const getPlanAPI = () => {
	return http.request({
		url: '/study/get-data',
		method: 'GET'
	})
}

/**
 * 获取学习记录列表
 * @return
 */
export const GetPlanListAPI = (params) => {
	return http.request({
		url: '/study/get-plan-list',
		method: 'GET',
		data: params
	})
}

/**
 * 获取详细学习记录
 * @return
 */
export const GetPlanDetailAPI = (query) => {
	return http.request({
		url: '/study/get-plan-detail?'+query,
		method: 'GET'
	})
}