import PROMPT_MESSAGES from '../constant/string/PromptMessages';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
	/**
	 * 방문일자 입력 프롬프트를 출력하고, 사용자 입력을 받는다.
	 * @returns {string} 사용자 입력
	 */
	async readDate() {
		return await Console.readLineAsync(PROMPT_MESSAGES.visit_day);
	},

	/**
	 * 주문 메뉴 입력 프롬프트를 출력하고, 사용자 입력을 받는다.
	 * @returns {string} 사용자 입력
	 */
	async readOrder() {
		return await Console.readLineAsync(PROMPT_MESSAGES.order_menu);
	}
};

export default InputView;
