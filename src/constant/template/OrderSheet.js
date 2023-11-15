/**
 * Q. Key 객체를 선언한 이유
 *   : 개발 편의성을 위하여 선언하였다.
 *     객체를 Key로 참조할 때, Key 이름에 오타가 발생하는 경우를 예방하였다.
 *     ex) Order.js > Order > updateOrderSheet({ key, value })
 */

const ORDER_SHEET_KEYS = {
	visitDay: 'visitDay',
	day_of_week: 'day_of_week',
	menuOrders: 'menuOrders',
	order_count: 'order_count',
	total_price: 'total_price',
	available_events: 'available_events',
	total_discount: 'total_discount',
	total_benefit_amount: 'total_benefit_amount',
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
	total_benefit_amount: null,
	discounted_price: null,
	event_badge: null
};

export { ORDER_SHEET, ORDER_SHEET_KEYS };
