import DeepFreeze from '../../util/DeepFreeze.js';

const amountFormat = (amount) => `${amount.toLocaleString()}`;
const negate = (number) => parseInt(-number, 10);

const GENERAL_MESSAGES = DeepFreeze({
	greeting: {
		introduce: `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`,
		result_header: (day) => `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
	},

	result: {
		title: {
			order_menu: '<주문 메뉴>',
			total_price: '<할인 전 총주문 금액>',
			giveaway: '<증정 메뉴>',
			benefit_details: '<혜택 내역>',
			total_benefits: '<총혜택 금액>',
			discounted_price: '<할인 후 예상 결제 금액>',
			event_badge: '<12월 이벤트 배지>'
		},
		content: {
			nothing: `없음`,
			order_menu: (name, count) => `${name} ${count}개`,
			total_price: (amount) => `${amountFormat(amount)}원`,
			giveaway: (name, count) => `${name} ${count}개`,
			benefit_details: (name, amount) => `${name}: ${amountFormat(negate(amount))}원`,
			total_benefits: (amount) => `${amountFormat(negate(amount))}원`,
			discounted_price: (amount) => `${amountFormat(amount)}원`,
			event_badge: (name) => `${name}`
		}
	}
});

export default GENERAL_MESSAGES;
