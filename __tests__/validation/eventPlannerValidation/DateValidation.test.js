import VisitDayValidation from '../../../src/validation/eventPlannerValidation/VisitDayValidation.js';
import { DATE_OPTIONS } from '../../../src/constant/Options.js';

describe('VisitDayValidation 모듈 테스트', () => {
	describe('checkInRange 함수 테스트', () => {
		const firstDate = DATE_OPTIONS.first_date;
		const lastDate = DATE_OPTIONS.last_date;

		test.each([
			[firstDate - 1, firstDate, lastDate],
			[lastDate + 1, firstDate, lastDate]
		])('가능한 범위 밖의 날짜를 입력한 경우 에러 발생', (day, top, bottom) => {
			expect(() => VisitDayValidation.checkInRange(day, top, bottom)).toThrow();
		});

		test.each([
			[firstDate, firstDate, lastDate],
			[lastDate, firstDate, lastDate]
		])('가능한 범위 내의 날짜를 입력한 경우 정상 처리', (day, top, bottom) => {
			expect(() => VisitDayValidation.checkInRange(day, top, bottom)).not.toThrow();
		});
	});

	describe('checkIsInteger 함수 테스트', () => {
		test.each([[1.1], ['a']])('날짜가 정수가 아닌 경우 에러 발생', (day) => {
			expect(() => VisitDayValidation.checkIsInteger(day)).toThrow();
		});

		test.each([[1]])('날짜가 정수인 경우 정상 처리', (day) => {
			expect(() => VisitDayValidation.checkIsInteger(day)).not.toThrow();
		});
	});
});
