import { DATE_OPTIONS } from '../constant/Options';

/**
 * 주어진 날짜 정보로부터 요일을 반환한다.
 * @param {number} year - 연도 (ex. 2023)
 * @param {number} month - 월 (1부터 12까지의 숫자)
 * @param {number} day - 일 (1부터 31까지의 숫자)
 * @returns {string} 해당 날짜의 요일 (ex. '월요일')
 * @throws {Error} 존재하지 않는 날짜에 대한 예외
 */
const GetDayOfWeek = (year, month, day) => {
	const date = new Date(year, month - 1, day);
	if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
		throw new Error('잘못된 날짜를 입력하였습니다.');
	}

	return DATE_OPTIONS.days_of_week[date.getDay()];
};

export default GetDayOfWeek;
