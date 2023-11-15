import MENU_DATA from '../../constant/data/MenuData.js';
import ERROR_MESSAGES from '../../constant/string/ErrorMessages.js';

const MenuNameValidation = {
	/**
	 * 메뉴 이름에 대하여 유효성 검사를 수행하는 함수
	 * @param {Array<string>} names - 검사할 메뉴 이름 배열
	 * @throws {Error} 유효하지 않은 주문일 경우 에러 발생
	 */
	validate(names) {
		this.checkAreUnique(names);
		this.checkInMenuData(names);
	},

	/**
	 * 메뉴 이름이 고유한지 확인하는 함수
	 * @param {Array<string>} names - 검사할 메뉴 이름 배열
	 * @throws {Error} 메뉴 이름이 중복된 경우 에러 발생
	 */
	checkAreUnique(names) {
		if (new Set(names).size !== names.length) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 메뉴 이름이 MENU_DATA에 존재하는지 확인하는 함수
	 * @param {Array<string>} names - 검사할 메뉴 이름 배열
	 * @throws {Error} MENU_DATA에 존재하지 않는 메뉴 이름인 경우 에러 발생
	 */
	checkInMenuData(names) {
		if (!names.every((name) => Object.keys(MENU_DATA).includes(name))) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	}
};

export default MenuNameValidation;
