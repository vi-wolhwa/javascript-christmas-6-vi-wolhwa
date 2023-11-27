import MenuCountValidation from '../../../src/validation/eventPlannerValidation/MenuCountValidation';

describe('MenuCountValidation 모듈 테스트', () => {
	describe('checkIsInteger 함수 테스트', () => {
		test.each([[['1'], [1.1]]])('정수가 아닌 값이 포함된 경우 에러 발생', (counts) => {
			expect(() => MenuCountValidation.checkIsInteger(counts)).toThrow();
		});

		test.each([[[1, 2]]])('정수가 아닌 값이 포함되지 않은 경우 정상 처리', (counts) => {
			expect(() => MenuCountValidation.checkIsInteger(counts)).not.toThrow();
		});
	});

	describe('checkIsNotEmpty 함수 테스트', () => {
		test.each([[[]]])('배열이 비어있는 경우 에러 발생', (counts) => {
			expect(() => MenuCountValidation.checkIsNotEmpty(counts)).toThrow();
		});

		test.each([[[1]]])('배열이 비어있지 않은 경우 정상 처리', (counts) => {
			expect(() => MenuCountValidation.checkIsNotEmpty(counts)).not.toThrow();
		});
	});

	describe('checkIsPositive 함수 테스트', () => {
		test.each([[[-1]], [[0]]])('양수가 아닌 경우 에러 발생', (counts) => {
			expect(() => MenuCountValidation.checkIsPositive(counts)).toThrow();
		});
		test.each([[[1]]])('양수인 경우 정상 처리', (counts) => {
			expect(() => MenuCountValidation.checkIsPositive(counts)).not.toThrow();
		});
	});
});
