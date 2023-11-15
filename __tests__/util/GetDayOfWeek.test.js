import GetDayOfWeek from '../../src/util/GetDayOfWeek.js';

describe('GetDayOfWeek 모듈 테스트', () => {
	test.each([
		[2020, 7, 4, '토요일'],
		[2023, 11, 13, '월요일'],
		[2024, 2, 29, '목요일']
	])('올바른 요일을 반환하는지 테스트', (year, month, day, dayOfWeek) => {
		expect(GetDayOfWeek(year, month, day)).toBe(dayOfWeek);
	});
});
