import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import LOOKUP_RESULT_MESSAGES from '../constant/string/LookupResultMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MESSAGES = {
	GENERAL: GENERAL_MESSAGES,
	TITLE: LOOKUP_RESULT_MESSAGES.titles,
	CONTENT: LOOKUP_RESULT_MESSAGES.contents
};

const OutputView = {
	/**
	 * 빈 라인을 출력하는 함수
	 */
	printNewLine() {
		Console.print('');
	},

	/**
	 * '없음'을 출력하는 함수
	 */
	printNothing() {
		Console.print(MESSAGES.CONTENT.nothing);
	},

	/**
	 * introduce 메시지를 출력하는 함수
	 */
	printIntroduce() {
		Console.print(MESSAGES.GENERAL.introduce);
	},

	/**
	 * 이벤트 조회 결과의 머리말을 출력하는 함수
	 * @param {*} visitDay
	 */
	printResultHeader(visitDay) {
		Console.print(MESSAGES.GENERAL.event_preview_f(visitDay));
	},

	/**
	 * '조회결과: 주문 메뉴'을 출력하는 함수
	 * @param {Array<object>} orderMenus - 주문 메뉴 목록
	 */
	printOrderMenus(orderMenus) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.order_menu);
		orderMenus.forEach((menu) => {
			Console.print(MESSAGES.CONTENT.order_menu_f(menu.name, menu.count));
		});
	},

	/**
	 * '조회결과: 할인 전 총주문 금액'을 출력하는 함수
	 * @param {number} totalPrice
	 */
	printTotalPrice(totalPrice) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.total_price);
		Console.print(MESSAGES.CONTENT.total_price_f(totalPrice));
	},

	/**
	 * '조회결과: 증정 메뉴'를 출력하는 함수
	 * @param {*} giveaways
	 */
	printGiveaways(giveaways) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.giveaway);

		if (giveaways.length === 0) {
			this.printNothing();
			return;
		}

		giveaways.forEach((giveaway) => {
			Console.print(MESSAGES.CONTENT.giveaway_f(giveaway.menu.name, giveaway.count));
		});
	},

	/**
	 * '조회결과: 혜택 내역'을 출력하는 함수
	 * @param {Array<object>} availableEvents
	 */
	printBenefitDetails(availableEvents) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.available_events);

		if (availableEvents.length === 0) {
			this.printNothing();
			return;
		}

		availableEvents.forEach((event) => {
			Console.print(MESSAGES.CONTENT.benefit_details_f(event.name, event.amount));
		});
	},

	/**
	 * '조회결과: 총혜택 금액'을 출력하는 함수
	 * @param {number} totalBenefitAmount
	 */
	printTotalBenefitAmount(totalBenefitAmount) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.total_benefit_amount);
		Console.print(MESSAGES.CONTENT.total_benefit_amount_f(totalBenefitAmount));
	},

	/**
	 * '조회결과: 할인 후 예상 결제 금액'을 출력하는 함수
	 * @param {number} discountedPrice
	 */
	printDiscountedPrice(discountedPrice) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.discounted_price);
		Console.print(MESSAGES.CONTENT.discounted_price_f(discountedPrice));
	},

	/**
	 * '조회결과: 12월 이벤트 배지'를 출력하는 함수
	 * @param {string} eventBadge
	 */
	printEventBadge(eventBadge) {
		this.printNewLine();
		Console.print(MESSAGES.TITLE.event_badge);

		if (eventBadge === '') {
			this.printNothing();
			return;
		}

		Console.print(MESSAGES.CONTENT.event_badge_f(eventBadge));
	}
};

export default OutputView;
