import Request from 'luch-request'

// 创建实例
const http = new Request({
	baseURL: '', // 基地址
	timeout: 1500 // 超时时间
})

// 请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	// 默认请求头(用个对象,方便后续扩展、如果有需要的话)
	const defaultHeader = {}

	// 添加token至请求头的Authorization
	// const token = userStore.token
	// if (token) {
	// 	defaultHeader.Authorization = token
	// }
	config.header = {
		...defaultHeader,
		...config.header
	}
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})

// 响应拦截器
http.interceptors.response.use((response) => {
	// 数据剥离
	return response.data
}, (response) => {
	// 401错误处理，跳转至登录
	if (response.statusCode === 401) {
		// 重定向至登录页
		uni.redirectTo({
			url: '/pages/Login/index'
		})
	} else if (response.statusCode === 404) {
		// 404错误处理
		uni.showToast({
			title: '请求地址不存在...',
			duration: 2000,
		})
	}

	return Promise.reject(response)
})

export default {http}