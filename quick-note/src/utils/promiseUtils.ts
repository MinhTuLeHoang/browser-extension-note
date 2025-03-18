export const TIME_OUT_CODE = -888;
export const MIN_TIME_ERROR = -976;

export const promiseUtilsDelay = async (time: number = 1000) => {
	return new Promise(resolve => {
		setTimeout(() => resolve(TIME_OUT_CODE), time);
	});
};

export const promiseUtilsTimeout = async (promiseFn: Promise<any>, time: number = 1000) => {
	return Promise.race([promiseFn, new Promise(resolve => setTimeout(resolve, time))]);
};

export const promiseUtilsMinTime = async (promiseFn: Promise<any>, time: number = 1000) => {
	try {
		const rs = await Promise.all([promiseFn, promiseUtilsDelay(time)]);
		return rs[0];
	} catch (error) {
		return MIN_TIME_ERROR;
	}
};
