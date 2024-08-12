// 时间戳转换

/**
 * 时间戳转换为时间
 */
const timestampToTime = (timestamp) => {
	timestamp = timestamp ? timestamp : null;
	const date = new Date(timestamp*1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	const Y = date.getFullYear() + '-';
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
}

/**
 * 时间转换为时间戳
 */
const timeToTimestamp = (time)=>{
	const date = new Date(time + 'T00:00:00Z'); // 加上时间部分和时区
	const timestamp = Math.floor(date.getTime() / 1000); // 转换为秒
	return timestamp;
}

export {
	timestampToTime,
	timeToTimestamp
}