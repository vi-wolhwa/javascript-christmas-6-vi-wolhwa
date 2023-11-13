import GetDayOfWeek from '../../src/util/GetDayOfWeek.js';

describe('GetDayOfWeek 모듈 테스트', () => {
	test.each([
		[2020, 7, 4, '토요일'],
		[2023, 11, 13, '월요일'],
		[2024, 2, 29, '목요일']
	])('올바른 요일을 반환하는지 테스트', (year, month, day, dayOfWeek) => {
		expect(GetDayOfWeek(year, month, day)).toBe(dayOfWeek);
	});

	test.each([
		[2023, 11, 31],
		[2023, 2, 29],
		[2024, 13, 1]
	])('올바르지 않은 날짜에 대한 예외 발생 테스트', (year, month, day) => {
		expect(() => GetDayOfWeek(year, month, day)).toThrow();
	});
});
