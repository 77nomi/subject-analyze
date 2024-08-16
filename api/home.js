/**
 * @Description: 主页的接口文件
 * @Author: yuennchan@163.com
 * @Date: 2024-08-16 10:18:08
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-16 10:18:12
 */
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
		method: 'GET'
	})
}