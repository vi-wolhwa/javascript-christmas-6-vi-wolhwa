import VisitDayValidation from '../../../src/validation/eventPlannerValidation/VisitDayValidation.js';
import { DATE_OPTIONS } from '../../../src/constant/Options.js';

describe('VisitDayValidation 모듈 테스트', () => {
	const firstDate = DATE_OPTIONS.first_date;
	const lastDate = DATE_OPTIONS.last_date;
	const errorPrefix = '[ERROR]';

	test.each([['abc'], ['12a'], ['1 2']])('정수가 아닌 값에 대한 예외 발생 테스트', (date) => {
		expect(() => {
			VisitDayValidation.validate(date);
		}).toThrow(errorPrefix);
	});

	test.each([[firstDate - 1], [lastDate + 1]])('범위 외의 날짜에 대한 예외 발생 테스트', (date) => {
		expect(() => {
			VisitDayValidation.validate(date);
		}).toThrow(errorPrefix);
	});

	test.each([[firstDate], [lastDate]])('범위 내의 날짜에 대한 정상 처리 테스트', (date) => {
		expect(() => {
			VisitDayValidation.validate(date);
		}).not.toThrow();
	});
});
