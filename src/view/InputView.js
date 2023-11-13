import GENERAL_MESSAGES from '../constant/strings/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const InputView = {
	async readDate() {
		return await Console.readLineAsync(MSG.prompt.date);
	},

	async readOrder() {
		return await Console.readLineAsync(MSG.prompt.order);
	}
};

export default InputView;
