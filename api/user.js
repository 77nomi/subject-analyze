// 与用户相关的接口文件
import {
	http
} from '@/utils/http.js'

/**
 * 获取验证码id
 * @return 验证码id
 */
export const getCodeIdAPI = () => {
	return http.request({
		url: '/captcha',
		method: 'GET'
	})
}

/**
 * 获取验证码图片
 * @param id codeId
 * @return 验证码图片
 */
export const getCodeImgAPI = (id) => {
	return http.request({
		url: `/captcha/${id}`,
		responseType: 'arraybuffer'
	})
}

/**
 * 注册
 * @param
 * @return session_token
 */
export const registerAPI = (params) => {
	return http.request({
		url: `/signup`,
		method: 'POST',
		data: params
	})
}

/**
 * 登录
 * @param
 * @return session_token
 */
export const loginAPI = (params) => {
	return http.request({
		url: `/login`,
		method: 'POST',
		data: params
	})
}