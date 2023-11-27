import { DATE_OPTIONS } from '../../constant/Options.js';
import ERROR_MESSAGES from '../../constant/string/ErrorMessages.js';

const VisitDayValidation = {
	/**
	 * 방문 일자에 대하여 유효성 검사를 수행하는 함수
	 * @param {string} day - 검사할 방문 일자
	 * @throws {Error} 유효하지 않은 날짜일 경우 에러 발생
	 */
	validate(day) {
		this.checkIsInteger(day);
		this.checkInRange(day, DATE_OPTIONS.first_date, DATE_OPTIONS.last_date);
	},

	/**
	 * 방문 일자가 정수인지 확인하는 함수
	 * @param {string} day - 검사할 방문 일자
	 * @throws {Error} 방문 일자가 정수가 아닌 경우 에러 발생
	 */
	checkIsInteger(day) {
		if (!Number.isInteger(Number(day))) {
			throw new Error(ERROR_MESSAGES.invalid_date);
		}
	},

	/**
	 * 방문 일자가 유효한 범위 내에 있는지 확인하는 함수
	 * @param {string} day - 검사할 방문 일자
	 * @param {string} bottom - 유효한 최소 일자
	 * @param {string} top - 유효한 최대 일자
	 * @throws {Error} 방문 일자가 유효한 범위를 벗어난 경우 에러 발생
	 */
	checkInRange(day, bottom, top) {
		if (!(bottom <= Number(day) && Number(day) <= top)) {
			throw new Error(ERROR_MESSAGES.invalid_date);
		}
	}
};

export default VisitDayValidation;
