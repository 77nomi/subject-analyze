import { defineStore } from 'pinia'
import { ref } from 'vue'

const useRecomendJob = defineStore('step', () => {

	const recomendJob = ref({})

	const setRecomendJob = (value) => {
		recomendJob.value = value
	}

	return {
		recomendJob,
		setRecomendJob
	}
})

export default useRecomendJob