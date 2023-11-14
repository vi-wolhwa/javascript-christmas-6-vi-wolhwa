import GENERAL_MESSAGES from '../constant/string/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const InputView = {
	/**
	 * 방문일자 입력 프롬프트를 출력하고, 사용자 입력을 받는다.
	 * @returns {string} 사용자 입력
	 */
	async readDate() {
		// TEST:
		//return '45';
		return await Console.readLineAsync(MSG.prompt.date);
	},

	/**
	 * 주문 메뉴 입력 프롬프트를 출력하고, 사용자 입력을 받는다.
	 * @returns {string} 사용자 입력
	 */
	async readOrder() {
		// TEST:
		//return '타파스-1,제로콜라-1 ';
		return await Console.readLineAsync(MSG.prompt.order);
	}
};

export default InputView;
