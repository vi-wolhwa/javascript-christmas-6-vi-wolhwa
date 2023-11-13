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
