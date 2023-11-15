const formatComma = (amount) => `${amount.toLocaleString()}`;
const negate = (number) => parseInt(-number, 10);

const LOOKUP_RESULT_MESSAGES = Object.freeze({
	titles: Object.freeze({
		order_menu: '<주문 메뉴>',
		total_price: '<할인 전 총주문 금액>',
		giveaway: '<증정 메뉴>',
		available_events: '<혜택 내역>',
		total_benefit_amount: '<총혜택 금액>',
		discounted_price: '<할인 후 예상 결제 금액>',
		event_badge: '<12월 이벤트 배지>'
	}),

	contents: Object.freeze({
		nothing: `없음`,
		order_menu_f: (name, count) => `${name} ${count}개`,
		total_price_f: (amount) => `${formatComma(amount)}원`,
		giveaway_f: (name, count) => `${name} ${count}개`,
		benefit_details_f: (name, amount) => `${name}: ${formatComma(negate(amount))}원`,
		total_benefit_amount_f: (amount) => `${formatComma(negate(amount))}원`,
		discounted_price_f: (amount) => `${formatComma(amount)}원`,
		event_badge_f: (name) => `${name}`
	})
});

export default LOOKUP_RESULT_MESSAGES;
