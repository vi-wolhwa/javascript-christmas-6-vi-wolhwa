import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import LOOKUP_RESULT_MESSAGES from '../constant/string/LookupResultMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MESSAGES = {
	general: GENERAL_MESSAGES,
	title: LOOKUP_RESULT_MESSAGES.titles,
	content: LOOKUP_RESULT_MESSAGES.contents
};

/**
 * 콘솔 출력을 담당하는 View 모듈
 * @module OutputView
 */
const OutputView = {
	newLine() {
		Console.print('');
	},

	print(message) {
		Console.print(message);
	},

	/**
	 * introduce 메시지를 출력하는 함수
	 */
	printIntroduce() {
		Console.print(MESSAGES.general.introduce);
	},

	/**
	 * 이벤트 조회 결과의 머리말을 출력하는 함수
	 * @param {*} visitDay
	 */
	printResultHeader(visitDay) {
		Console.print(MESSAGES.general.event_preview_f(visitDay));
	},

	/**
	 * '조회결과: 주문 메뉴'을 출력하는 함수
	 * @param {Array<object>} orderMenus - 주문 메뉴 목록
	 */
	printOrderMenus(orderMenus) {
		this.newLine();
		Console.print(MESSAGES.title.order_menu);
		orderMenus.forEach((menu) => {
			Console.print(MESSAGES.content.order_menu_f(menu.name, menu.count));
		});
	},

	/**
	 * '조회결과: 할인 전 총주문 금액'을 출력하는 함수
	 * @param {number} totalPrice
	 */
	printTotalPrice(totalPrice) {
		this.newLine();
		Console.print(MESSAGES.title.total_price);
		Console.print(MESSAGES.content.total_price_f(totalPrice));
	},

	/**
	 * '조회결과: 증정 메뉴'를 출력하는 함수
	 * @param {*} giveaways
	 */
	printGiveaways(giveaways) {
		this.newLine();
		Console.print(MESSAGES.title.giveaway);

		if (giveaways.length === 0) {
			Console.print('없음');
		}

		giveaways.forEach((giveaway) => {
			Console.print(MESSAGES.content.giveaway_f(giveaway.menu.name, giveaway.count));
		});
	},

	/**
	 * '조회결과: 혜택 내역'을 출력하는 함수
	 * @param {Array<object>} availableEvents
	 */
	printBenefitDetails(availableEvents) {
		this.newLine();
		Console.print(MESSAGES.title.available_events);

		if (availableEvents.length === 0) {
			Console.print('없음');
		}

		availableEvents.forEach((event) => {
			Console.print(MESSAGES.content.benefit_details_f(event.name, event.amount));
		});
	},

	/**
	 * '조회결과: 총혜택 금액'을 출력하는 함수
	 * @param {number} totalBenefitAmount
	 */
	printTotalBenefitsAmount(totalBenefitAmount) {
		this.newLine();
		Console.print(MESSAGES.title.total_benefit_amount);
		Console.print(MESSAGES.content.total_benefit_amount_f(totalBenefitAmount));
	},

	/**
	 * '조회결과: 할인 후 예상 결제 금액'을 출력하는 함수
	 * @param {number} discountedPrice
	 */
	printDiscountedPrice(discountedPrice) {
		this.newLine();
		Console.print(MESSAGES.title.discounted_price);
		Console.print(MESSAGES.content.discounted_price_f(discountedPrice));
	},

	/**
	 * '조회결과: 12월 이벤트 배지'를 출력하는 함수
	 * @param {string} eventBadge
	 */
	printEventBadge(eventBadge) {
		this.newLine();
		Console.print(MESSAGES.title.event_badge);
		Console.print(MESSAGES.content.event_badge_f(eventBadge));
	}
};

export default OutputView;
