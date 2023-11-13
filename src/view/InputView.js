import GENERAL_MESSAGES from '../constant/strings/GeneralMessages.js';
import { Console } from '@woowacourse/mission-utils';

const MSG = GENERAL_MESSAGES;

const InputView = {
	async readDate() {
		return await Console.readLineAsync(MSG.prompt.date);
	}
};

export default InputView;
