import GENERAL_MESSAGES from '../constant/strings/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const OutputView = {
	printIntroduce() {
		Console.print(MSG.greeting.introduce);
	},

	printMenu() {
		Console.print('<주문 메뉴>');
		// ...
	}
	// ...
};

export default OutputView;
