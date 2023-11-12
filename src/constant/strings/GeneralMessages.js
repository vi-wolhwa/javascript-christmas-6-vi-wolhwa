import DeepFreeze from '../../util/DeepFreeze.js';

const amountFormat = (amount) => `${amount.toLocaleString()}`;

const GENERAL_MESSAGES = DeepFreeze({
	greeting: {
		introduce: `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`,
		result_header: (day) => `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
	},

	prompt: {
		order: '주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
		date: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`
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
			order_menu: (name, count) => `${name} ${count}개`,
			total_price: (amount) => `${amountFormat(amount)}원`,
			giveaway: (name, count) => `${name} ${count}개`,
			benefit_details: (name, amount) => `${name}: -${amountFormat(amount)}원`,
			total_benefits: (amount) => `-${amountFormat(amount)}원`,
			discounted_price: (amount) => `${amountFormat(amount)}원`,
			event_badge: (name) => `${name}`
		}
	}
});

export default GENERAL_MESSAGES;
