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
	},

	/**
	 * 메뉴 개수가 비어있는지 확인하는 함수
	 * @param {number[]} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 메뉴 개수가 비어있는 경우 에러를 throw
	 */
	checkIsNotEmpty(counts) {
		if (counts.length === SIGNS.zero) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 메뉴 개수가 정수인지 확인하는 함수
	 * @param {number[]} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 메뉴 개수가 정수가 아닌 경우 에러를 throw
	 */
	checkIsInteger(counts) {
		if (!counts.every((count) => Number.isInteger(count))) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	},

	/**
	 * 메뉴 개수가 양수인지 확인하는 함수
	 * @param {number[]} counts - 검사할 메뉴 개수 배열
	 * @throws {Error} 메뉴 개수가 양수가 아닌 경우 에러를 throw
	 */
	checkIsPositive(counts) {
		if (counts.some((count) => count <= SIGNS.zero)) {
			throw new Error(ERROR_MESSAGES.invalid_order);
		}
	}
};

export default MenuCountValidation;
