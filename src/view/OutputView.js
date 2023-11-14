import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const OutputView = {
	// Introduce 메시지를 출력한다.
	printIntroduce() {
		Console.print(MSG.greeting.introduce);
	},

	printMenu() {
		Console.print('<주문 메뉴>');
		// ...
	},
	// ...
};

export default OutputView;
