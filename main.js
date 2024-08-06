import App from './App'
import uviewPlus from 'uview-plus'
import {
	createPinia
} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {
	createPersistedState
} from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// #ifdef H5
pinia.use(piniaPluginPersistedstate)
// #endif

// #ifdef MP-WEIXIN
// 自定义 Pinia 插件
pinia.use(
	createPersistedState({
		// 自定义本地存储的逻辑
		storage: {
			setItem(key, value) {
				uni.setStorageSync(key, value)
			},
			getItem(key) {
				return uni.getStorageSync(key)
			},
		},
	})
)
// #endif

import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uviewPlus)
	app.use(pinia)
	return {
		app
	}
}