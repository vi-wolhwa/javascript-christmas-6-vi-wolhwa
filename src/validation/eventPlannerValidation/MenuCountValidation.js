import ERROR_MESSAGES from '../../constant/strings/ErrorMessages.js';
import SIGNS from '../../constant/strings/Signs.js';
import DeepFreeze from '../../util/DeepFreeze.js';

const ERROR = ERROR_MESSAGES;

const MenuCountValidation = DeepFreeze({
	validate(counts) {
		this.checkIsNotEmpty(counts);
		this.checkIsInteger(counts);
		this.checkIsPositive(counts);
	},

	checkIsNotEmpty(counts) {
		if (counts.length === SIGNS.zero) {
			throw new Error(ERROR.invalid_order);
		}
	},

	checkIsInteger(counts) {
		if (!counts.every((count) => Number.isInteger(count))) {
			throw new Error(ERROR.invalid_order);
		}
	},

	checkIsPositive(counts) {
		if (counts.some((count) => count <= SIGNS.zero)) {
			throw new Error(ERROR.invalid_order);
		}
	}
});

export default MenuCountValidation;
