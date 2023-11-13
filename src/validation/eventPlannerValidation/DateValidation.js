/**
 * [동일한 에러 발생 코드 반복]
 * 지금은 모두 동일한 메시지를 출력하지만,
 * 에러메시지를 구별해야 하는 경우를 고려하여 반복 작성하였다.
 * (MenuCountValidation.js, MenuNameValidation.js 동일)
 */

import ERROR_MESSAGES from '../../constant/strings/ErrorMessages.js';
import OPTIONS from './../../constant/Options.js';
import DeepFreeze from '../../util/DeepFreeze.js';

const DATE = OPTIONS.date;
const ERROR = ERROR_MESSAGES;

const DateValidation = DeepFreeze({
	validate(date) {
		this.checkIsInteger(date);
		this.checkInRange(date, DATE.first_date, DATE.last_date);
	},

	checkIsInteger(date) {
		if (!Number.isInteger(Number(date))) {
			throw new Error(ERROR.invalid_date);
		}
	},

	checkInRange(date, bottom, top) {
		if (!(bottom <= Number(date) && Number(date) <= top)) {
			throw new Error(ERROR.invalid_date);
		}
	}
});

export default DateValidation;
