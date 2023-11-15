import PROMPT_MESSAGES from '../constant/string/PromptMessages.js';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
	/**
	 * 프롬프트를 출력하고, 방문일자를 입력받는 합수
	 * @returns {Promise<string>} 사용자 입력
	 */
	async readVisitDay() {
		return await Console.readLineAsync(PROMPT_MESSAGES.visit_day);
	},

	/**
	 * 프롬프트를 출력하고, 메뉴주문을 입력받는 합수
	 * @returns {Promise<string>} 사용자 입력
	 */
	async readMenuOrders() {
		return await Console.readLineAsync(PROMPT_MESSAGES.menu_orders);
	}
};

export default InputView;
