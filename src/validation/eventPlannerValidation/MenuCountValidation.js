import { ORDER_OPTIONS } from '../../constant/Options.js';
import ERROR_MESSAGES from '../../constant/string/ErrorMessages.js';
import SIGNS from '../../constant/string/Signs.js';

const MenuCountValidation = {
	/**
	 * 메뉴 개수에 대하여 유효성 검사를 수행하는 함수
	 * @param {number[]} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 유효하지 않은 주문일 경우 에러를 throw
	 */
	validate(counts) {
		this.checkIsNotEmpty(counts);
		this.checkIsInteger(counts);
		this.checkIsPositive(counts);
		this.checkIsBelowMax(counts);
	},

	/**
	 * 주문 수량이 비어있는지 확인하는 함수
	 * @param {Array<number>} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 주문 수량이 비어있는 경우 에러를 throw
	 */
	checkIsNotEmpty(counts) {
		if (counts.length === SIGNS.zero) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 주문 수량이 정수인지 확인하는 함수
	 * @param {Array<number>} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 주문 수량이 정수가 아닌 경우 에러를 throw
	 */
	checkIsInteger(counts) {
		if (!counts.every((count) => Number.isInteger(count))) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 주문 수량이 양수인지 확인하는 함수
	 * @param {Array<number>} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 주문 수량이 양수가 아닌 경우 에러를 throw
	 */
	checkIsPositive(counts) {
		if (counts.some((count) => count <= SIGNS.zero)) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 총 주문 수량이 제한 수량을 초과하지 않는지 확인하는 함수
	 * @param {Array<number>} counts
	 * @throws {Error} 최대 주문 수량을 초과한 경우 에러를 throw
	 */
	checkIsBelowMax(counts) {
		if (counts.reduce((total, count) => total + count, 0) > ORDER_OPTIONS.order_count_max) {
			throw new Error(ERROR_MESSAGES.exceeded_max_order);
		}
	}
};

export default MenuCountValidation;
