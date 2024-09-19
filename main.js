import App from './App'
import uviewPlus from 'uview-plus'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import headerComponent from './components/header.vue'

const pinia = createPinia()

// #ifdef H5
pinia.use(piniaPluginPersistedstate)
// #endif

// #ifdef MP-WEIXIN
pinia.use(
	createPersistedState({
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

import { createSSRApp } from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(uviewPlus)
	app.use(pinia)

	// 全局注册组件
	app.component('headerComponent', headerComponent)

	return {
		app
	}
}