import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;
const TITLE = GENERAL_MESSAGES.result.title;
const CONTENT = GENERAL_MESSAGES.result.content;

const OutputView = {
	// Introduce 메시지를 출력한다.
	printIntroduce() {
		Console.print(MSG.greeting.introduce);
	},

	// Result-Header 메시지를 출력한다.
	printResultHeader() {
		Console.print(MSG.greeting.result_header);
	},

	/**
	 * 주문 메뉴 목록을 출력한다.
	 * @param {Array<object>} orderMenus - 주문 메뉴 목록
	 */
	printOrderMenus(orderMenus) {
		Console.print(TITLE.order_menu);
		orderMenus.forEach((menu) => {
			Console.print(CONTENT.order_menu(menu.name, menu.count));
		});
	},

	printTotalPrice(totalPrice) {
		Console.print(TITLE.total_price);
		Console.print(CONTENT.total_price(totalPrice));
	},

	printGiveaways(giveaways) {
		Console.print(TITLE.giveaway);
		giveaways.forEach((giveaway) => {
			Console.print(CONTENT.giveaway(giveaway.menu.name, giveaway.count));
		});
	},

	printBenefitDetails(benefitDetails) {
		Console.print(TITLE.benefit_details);
		benefitDetails.forEach((detail) => {
			Console.print(CONTENT.benefit_details(detail.name, detail.amount));
		});
	},

	printTotalBenefitsAmount(totalBenefitAmount) {
		Console.print(TITLE.total_benefits);
		Console.print(CONTENT.total_benefits(totalBenefitAmount));
	},

	printDiscountedPrice(discountedPrice) {
		Console.print(TITLE.discounted_price);
		Console.print(CONTENT.discounted_prince(discountedPrice));
	},

	printEventBadge(eventBadge) {
		Console.print(TITLE.event_badge);
		Console.print(CONTENT.event_badge(eventBadge));
	}
};

export default OutputView;
