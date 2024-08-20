/**
 * @Description: 数据分析相关接口
 * @Author: yuennchan@163.com
 * @Date: 2024-08-20 17:35:25
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-08-20 17:39:10
 */

import {
	http
} from '@/utils/http.js'


 /**
  * @description: 获取数据分析详细数据
  * @param {*} query
  * @return
  */
export const getDetailAPI = (query) => {
	return http.request({
		url: '/data/get-detail?'+query,
		method: 'GET'
	})
}
