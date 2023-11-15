import MenuOrderValidation from '../../../src/validation/eventPlannerValidation/MenuOrderValidation';

describe('MenuOrderValidation 모듈 테스트', () => {
	const errorPrefix = '[ERROR]';

	test('checkIsNotBeverageOnly 테스트', () => {
		const beverageOnly = ['제로콜라', '레드와인'];
		const mixed = ['제로콜라', '양송이수프'];
		expect(() => MenuOrderValidation.checkIsNotBeverageOnly(beverageOnly)).toThrow(errorPrefix);
		expect(() => MenuOrderValidation.checkIsNotBeverageOnly(mixed)).not.toThrow();
	});

	test('checkIsBelowMax 테스트', () => {
		const overMaxCount = [3, 7, 11];
		const withinMaxCounts = [3, 7, 10];
		expect(() => MenuOrderValidation.checkIsBelowMax(overMaxCount)).toThrow(errorPrefix);
		expect(() => MenuOrderValidation.checkIsBelowMax(withinMaxCounts)).not.toThrow();
	});
});
