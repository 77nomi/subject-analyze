/**
 * @Description: 获取岗位选项的文件
 * @Author: yuennchan@163.com
 * @Date: 2024-09-09 17:44:13
 * @LastEditor: yuennchan@163.com
 * @LastEditTime: 2024-09-09 17:54:56
 */
import { getJobListAPI } from '@/api/career.js'

export async function getOptions() {
	let options =[]
	const formatData = (dataList)=>{
		dataList.forEach((item)=>{
			let option = {
				key:item.job_id,
				label:item.job_name
			}
			options.push(option)
		})
	}
	
	await getJobListAPI()
	.then((res)=>{
		console.log(res)
		formatData(res)
	})
	.catch((err)=>{
		console.log(err)
	})
	return options;
}