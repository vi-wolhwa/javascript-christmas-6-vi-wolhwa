/**
 * [ORDER_SHEET_KEYS]
 * Order.js에서 writeOrderSheet(key, value)를 수행할 때 사용된다.
 * key 파라미터에는 ORDER_SHEET_KEYS를 참조하여 입력한다.
 */

import DeepFreeze from '../../util/DeepFreeze.js';

// 객체의 key를 추출하여 object{ key1: 'key1', ... }를 반환한다.
const extractKeys = (sourceObject) => {
	return Object.keys(sourceObject).reduce((result, key) => {
		result[key] = key;
		return result;
	}, {});
};

const ORDER_SHEET = {
	date: null,
	day_of_week: null,
	order: [],
	order_count: null,
	total_price: null,
	available_events: [],
	total_discount: null,
	total_benefits: null,
	discounted_price: null,
	event_badge: null
};

const ORDER_SHEET_KEYS = DeepFreeze(extractKeys(ORDER_SHEET));

export { ORDER_SHEET, ORDER_SHEET_KEYS };
