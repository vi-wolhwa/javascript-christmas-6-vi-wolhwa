import MenuCountValidation from '../../../src/validation/eventPlannerValidation/MenuCountValidation';

describe('MenuCountValidation 모듈 테스트', () => {
	const errorPrefix = '[ERROR]';

	test('유효한 배열에 대한 정상 작동 테스트 ', () => {
		expect(() => {
			MenuCountValidation.validate([1, 2, 3]);
		}).not.toThrow();
	});

	test.each([[[]], [[1, 2, NaN]], [[1, 2, '3']], [[1, 2, 3.1]], [[1, 2, 0]]])(
		'유효하지 않은 값이 포함된 배열에 대한 예외 발생 테스트',
		(counts) => {
			expect(() => {
				MenuCountValidation.validate(counts);
			}).toThrow(errorPrefix);
		}
	);
});
