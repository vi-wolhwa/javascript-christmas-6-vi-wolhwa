import MenuNameValidation from '../../../src/validation/eventPlannerValidation/MenuNameValidation';

describe('MenuNameValidation 모듈 테스트', () => {
	const errorPrefix = '[ERROR]';

	test('유효한 배열에 대한 정상 작동 테스트', () => {
		expect(() => {
			MenuNameValidation.validate(['양송이수프', '레드와인', '초코케이크']);
		}).not.toThrow();
	});

	test('중복이 포함된 배열에 대한 예외 발생 테스트 ', () => {
		expect(() => {
			MenuNameValidation.validate(['양송이수프', '양송이수프', '초코케이크']);
		}).toThrow(errorPrefix);
	});

	test('유효하지 않은 값이 포함된 배열에 대한 예외 발생 테스트', () => {
		expect(() => {
			MenuNameValidation.validate(['양송이수프', '토마토스프', '초코케이크']);
		}).toThrow(errorPrefix);
	});
});
