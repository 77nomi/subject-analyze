// 主页的接口文件
import {
	http
} from '@/utils/http.js'

/**
 * 获取新闻列表
 * @return 新闻列表
 */
export const getNewsListAPI = () => {
	return http.request({
		url: '/news/get-list',
		method: 'GET',
		header: {
			Authorization: uni.getStorageSync('token')
		}
	})
}