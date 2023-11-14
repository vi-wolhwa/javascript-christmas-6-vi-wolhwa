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
	}
};

export default OutputView;
