/**
 * 깊은 비교를 수행하여 두 값이 동일한지 확인하는 함수
 *
 * @param {Object|Array} a - 비교할 첫 번째 값
 * @param {Object|Array} b - 비교할 두 번째 값
 * @returns {boolean} 두 값이 동일하면 true를, 그렇지 않으면 false를 반환
 */
const DeepEqualityCheck = (a, b) => {
	if (a === b) {
		return true;
	}

	if (typeof a != 'object' || a == null || typeof b != 'object' || b == null) {
		return false;
	}

	const keysA = Object.keys(a),
		keysB = Object.keys(b);

	if (keysA.length != keysB.length) {
		return false;
	}

	for (const key of keysA) {
		if (!keysB.includes(key) || !DeepEqualityCheck(a[key], b[key])) {
			return false;
		}
	}

	return true;
};

export default DeepEqualityCheck;
