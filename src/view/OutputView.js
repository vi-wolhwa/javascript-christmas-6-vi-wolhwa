import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MESSAGES = GENERAL_MESSAGES;
const TITLE = GENERAL_MESSAGES.result.title;
const CONTENT = GENERAL_MESSAGES.result.content;

const OutputView = {
	newLine() {
		Console.print('');
	},

	print(message) {
		Console.print(message);
	},

	// Introduce 메시지를 출력한다.
	printIntroduce() {
		Console.print(MESSAGES.greeting.introduce);
	},

	// Result-Header 메시지를 출력한다.
	printResultHeader(date) {
		Console.print(MESSAGES.greeting.result_header(date));
	},

	/**
	 * 주문 메뉴 목록을 출력한다.
	 * @param {Array<object>} orderMenus - 주문 메뉴 목록
	 */
	printOrderMenus(orderMenus) {
		this.newLine();
		Console.print(TITLE.order_menu);
		orderMenus.forEach((menu) => {
			Console.print(CONTENT.order_menu(menu.name, menu.count));
		});
	},

	printTotalPrice(totalPrice) {
		this.newLine();
		Console.print(TITLE.total_price);
		Console.print(CONTENT.total_price(totalPrice));
	},

	printGiveaways(giveaways) {
		this.newLine();
		Console.print(TITLE.giveaway);

		if (giveaways.length === 0) {
			Console.print('없음');
		}

		giveaways.forEach((giveaway) => {
			Console.print(CONTENT.giveaway(giveaway.menu.name, giveaway.count));
		});
	},

	printBenefitDetails(benefitDetails) {
		this.newLine();
		Console.print(TITLE.benefit_details);

		if (benefitDetails.length === 0) {
			Console.print('없음');
		}

		benefitDetails.forEach((detail) => {
			Console.print(CONTENT.benefit_details(detail.name, detail.amount));
		});
	},

	printTotalBenefitsAmount(totalBenefitAmount) {
		this.newLine();
		Console.print(TITLE.total_benefits);
		Console.print(CONTENT.total_benefits(totalBenefitAmount));
	},

	printDiscountedPrice(discountedPrice) {
		this.newLine();
		Console.print(TITLE.discounted_price);
		Console.print(CONTENT.discounted_price(discountedPrice));
	},

	printEventBadge(eventBadge) {
		this.newLine();
		Console.print(TITLE.event_badge);
		Console.print(CONTENT.event_badge(eventBadge));
	}
};

export default OutputView;
