import DateValidation from '../../../src/validation/eventPlannerValidation/DateValidation.js';
import OPTIONS from '../../../src/constant/Options.js';

describe('DateValidation 모듈 테스트', () => {
	const firstDate = OPTIONS.date.first_date;
	const lastDate = OPTIONS.date.last_date;
	const errorPrefix = '[ERROR]';

	test.each([['abc'], ['12a'], ['1 2']])('정수가 아닌 값에 대한 예외 발생 테스트', (day) => {
		expect(() => {
			DateValidation.validate();
		}).toThrow(errorPrefix);
	});

	test.each([[firstDate - 1], [lastDate + 1]])('범위 외의 날짜에 대한 예외 발생 테스트', (day) => {
		expect(() => {
			DateValidation.validate(day);
		}).toThrow(errorPrefix);
	});

	test.each([[firstDate], [lastDate]])('범위 내의 날짜에 대한 정상 처리 테스트', (day) => {
		expect(() => {
			DateValidation.validate(day);
		}).not.toThrow();
	});
});
