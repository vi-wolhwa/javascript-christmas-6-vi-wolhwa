import MENU_DATA from '../../data/MenuData.js';
import { MENU_OPTIONS, ORDER_OPTIONS } from '../../constant/Options.js';
import ERROR_MESSAGES from '../../constant/string/ErrorMessages.js';

const MenuOrderValidation = {
	/**
	 * 주문에 대하여 유효성 검사를 수행하는 함수
	 * @param {Array<string>} names - 검사할 메뉴 이름 배열
	 * @param {Array<number>} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 유효하지 않은 주문일 경우 에러 발생
	 */
	validate(names, counts) {
		this.checkIsNotBeverageOnly(names);
		this.checkIsBelowMax(counts);
	},

	/**
	 * 음료만 주문하지는 않았는지 확인하는 함수
	 * @param {Array<string>} names - 검사할 메뉴 이름 배열
	 * @throws {Error} 모든 주문 메뉴가 음료인 경우 에러 발생
	 */
	checkIsNotBeverageOnly(names) {
		if (names.every((name) => MENU_DATA[name].category === MENU_OPTIONS.category.beverage)) {
			throw new Error(ERROR_MESSAGES.exceeded_max_order);
		}
	},

	/**
	 * 총 주문 수량이 제한 수량을 초과하지 않는지 확인하는 함수
	 * @param {Array<number>} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 최대 주문 수량을 초과한 경우 에러 발생
	 */
	checkIsBelowMax(counts) {
		if (counts.reduce((total, count) => total + count, 0) > ORDER_OPTIONS.order_count_max) {
			throw new Error(ERROR_MESSAGES.exceeded_max_order);
		}
	}
};

export default MenuOrderValidation;
