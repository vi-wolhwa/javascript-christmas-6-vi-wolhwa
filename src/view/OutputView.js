import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import LOOKUP_RESULT_MESSAGES from '../constant/string/LookupResultMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MESSAGES = {
	general: GENERAL_MESSAGES,
	title: LOOKUP_RESULT_MESSAGES.titles,
	content: LOOKUP_RESULT_MESSAGES.contents
};

const OutputView = {
	newLine() {
		Console.print('');
	},

	print(message) {
		Console.print(message);
	},

	// Introduce 메시지를 출력한다.
	printIntroduce() {
		Console.print(MESSAGES.general.introduce);
	},

	// Result-Header 메시지를 출력한다.
	printResultHeader(date) {
		Console.print(MESSAGES.general.event_preview_f(date));
	},

	/**
	 * 주문 메뉴 목록을 출력한다.
	 * @param {Array<object>} orderMenus - 주문 메뉴 목록
	 */
	printOrderMenus(orderMenus) {
		this.newLine();
		Console.print(MESSAGES.title.order_menu);
		orderMenus.forEach((menu) => {
			Console.print(MESSAGES.content.order_menu_f(menu.name, menu.count));
		});
	},

	printTotalPrice(totalPrice) {
		this.newLine();
		Console.print(MESSAGES.title.total_price);
		Console.print(MESSAGES.content.total_price_f(totalPrice));
	},

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

	printBenefitDetails(benefitDetails) {
		this.newLine();
		Console.print(MESSAGES.title.benefit_details);

		if (benefitDetails.length === 0) {
			Console.print('없음');
		}

		benefitDetails.forEach((detail) => {
			Console.print(MESSAGES.content.benefit_details_f(detail.name, detail.amount));
		});
	},

	printTotalBenefitsAmount(totalBenefitAmount) {
		this.newLine();
		Console.print(MESSAGES.title.total_benefit_amount);
		Console.print(MESSAGES.content.total_benefit_amount_f(totalBenefitAmount));
	},

	printDiscountedPrice(discountedPrice) {
		this.newLine();
		Console.print(MESSAGES.title.discounted_price);
		Console.print(MESSAGES.content.discounted_price_f(discountedPrice));
	},

	printEventBadge(eventBadge) {
		this.newLine();
		Console.print(MESSAGES.title.event_badge);
		Console.print(MESSAGES.content.event_badge_f(eventBadge));
	}
};

export default OutputView;
