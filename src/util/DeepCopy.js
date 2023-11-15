/**
 * 주어진 객체에 대하여 깊은 복사를 수행한 객체를 반환하는 함수
 * @param {object} obj 복사할 객체
 * @returns {object} 복사된 객체
 */
const DeepCopy = (obj) => {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}

	return Array.isArray(obj)
		? obj.map(DeepCopy)
		: Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, DeepCopy(value)]));
};

export default DeepCopy;
