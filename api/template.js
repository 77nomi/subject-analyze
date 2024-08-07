// 与用户相关的接口文件
import {
	http
} from '@/utils/http.js'

/**
 * @return 用户表单登录
 */
export const postLoginAPI = (data) => {
	return http.request({
		url: '/user/user/login',
		method: 'POST',
		data
	})
}

/**
 * @param id 用户id
 * @return 返回用户信息
 */
export const getUserInfoAPI = (id) => {
	return http.request({
		url: `/user/user/${id}`
	})
}