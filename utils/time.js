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
	const timestamp = Date.parse(new Date(time).toString());
	timestamp = timestamp / 1000; //时间戳为10位需除1000，时间戳为13位的话不需除1000
	console.log(time + "的时间戳为：" + timestamp);
	return timestamp;
}

export {
	timestampToTime,
	timeToTimestamp
}