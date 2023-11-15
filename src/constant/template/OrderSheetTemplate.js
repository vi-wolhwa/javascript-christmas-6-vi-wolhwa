/**
 * [ORDER_SHEET_KEYS]
 * Order.js에서 writeOrderSheet(key, value)를 수행할 때 사용된다.
 * key 파라미터에는 ORDER_SHEET_KEYS를 참조하여 입력한다.
 */

const ORDER_SHEET_KEYS = {
	visitDay: 'visitDay',
	day_of_week: 'day_of_week',
	menuOrders: 'menuOrders',
	order_count: 'order_count',
	total_price: 'total_price',
	available_events: 'available_events',
	total_discount: 'total_discount',
	total_benefits: 'total_benefits',
	discounted_price: 'discounted_price',
	event_badge: 'event_badge'
};

const ORDER_SHEET = {
	visitDay: null,
	day_of_week: null,
	menuOrders: [],
	order_count: null,
	total_price: null,
	available_events: [],
	total_discount: null,
	total_benefits: null,
	discounted_price: null,
	event_badge: null
};

export { ORDER_SHEET, ORDER_SHEET_KEYS };
