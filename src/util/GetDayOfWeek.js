import { DATE_OPTIONS } from '../constant/Options.js';

/**
 * 주어진 날짜 정보로부터 요일을 반환하는 함수
 * @param {number} year - 연도
 * @param {number} month - 월
 * @param {number} day - 일
 * @returns {string} 해당 날짜의 요일
 * @throws {Error} 존재하지 않는 날짜에 대한 예외
 */
const GetDayOfWeek = (year, month, day) => {
	const date = new Date(year, month - 1, day);
	return DATE_OPTIONS.days_of_week[date.getDay()];
};

export default GetDayOfWeek;
