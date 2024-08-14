// 就业规划接口文件
import {
	http
} from '@/utils/http.js'

/**
 * 获取学科列表
 * @return list
 */
export const getMajorListAPI = () => {
	return http.request({
		url: '/major/get-list',
		method: 'GET'
	})
}

/**
 * 获取详细专业信息
 * @return list
 */
export const getMajorDetailAPI = (query) => {
	return http.request({
		url: '/major/get-detail?' + query,
		method: 'GET'
	})
}