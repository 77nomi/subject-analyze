/**
 * @Description: 新闻接口文件
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:18:15
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-16 10:18:19
 */
import {
	http
} from '@/utils/http.js'

/**
 * 获取学科列表
 * @return list
 */
export const getNewsListAPI = () => {
	return http.request({
		url: '/news/get-list',
		method: 'GET'
	})
}

/**
 * 获取详细新闻
 * @return list
 */
export const getNewsDetailAPI = (query) => {
	return http.request({
		url: '/news/get-detail?' + query,
		method: 'GET'
	})
}