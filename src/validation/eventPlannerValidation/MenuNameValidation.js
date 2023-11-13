import ERROR_MESSAGES from '../../constant/string/ErrorMessages.js';
import MENU_DATA from '../../constant/data/MenuData.js';
import DeepFreeze from '../../util/DeepFreeze.js';

const ERROR = ERROR_MESSAGES;

const MenuNameValidation = DeepFreeze({
	validate(names) {
		this.checkAreUnique(names);
		this.checkInMenuData(names);
	},

	checkAreUnique(names) {
		if (new Set(names).size !== names.length) {
			throw new Error(ERROR.invalid_order);
		}
	},

	checkInMenuData(names) {
		if (!names.every((name) => Object.keys(MENU_DATA).includes(name))) {
			throw new Error(ERROR.invalid_order);
		}
	}
});

export default MenuNameValidation;
