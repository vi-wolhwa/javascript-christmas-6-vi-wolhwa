import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const OutputView = {
	// Introduce 메시지를 출력한다.
	printIntroduce() {
		Console.print(MSG.greeting.introduce);
	},

	// Result-Header 메시지를 출력한다.
	printResultHeader() {
		Console.print(MSG.greeting.result_header);
	}
};

export default OutputView;
