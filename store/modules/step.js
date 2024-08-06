import {
	defineStore
} from 'pinia'
import {
	computed,
	ref
} from 'vue'

const useStepStore = defineStore('step', () => {
	// 当前步骤
	const step = ref(0)

	// 当前页面标题
	const titleList = ['劳动纠纷', '诉讼准备', '立案指导', 'AI评估', '结案归档']

	// 当前页面标题
	const currentTitle = computed(() => {
		return titleList[step.value]
	})

	// 步骤加一
	const addStep = () => {
		step.value++
	}
	// 步骤减一
	const decresStep = () => {
		step.value--
	}

	return {
		step,
		addStep,
		decresStep,
		currentTitle
	}
})

export default useStepStore