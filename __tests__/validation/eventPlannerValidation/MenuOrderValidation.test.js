import MenuOrderValidation from '../../../src/validation/eventPlannerValidation/MenuOrderValidation';

describe('MenuOrderValidation 모듈 테스트', () => {
	describe('checkIsNotBeverageOnly 함수 테스트', () => {
		test('음료수만 주문한 경우 에러 발생', () => {
			const names = ['제로콜라', '레드와인'];
			expect(() => MenuOrderValidation.checkIsNotBeverageOnly(names)).toThrow();
		});

		test('음료수가 아닌 메뉴도 주문한 경우 정상 처리', () => {
			const names = ['제로콜라', '양송이수프'];
			expect(() => MenuOrderValidation.checkIsNotBeverageOnly(names)).not.toThrow();
		});
	});

	describe('checkIsBelowMax 함수 테스트', () => {
		test('최대 주문 수량을 초과한 경우 에러 발생', () => {
			const counts = [1, 2, 4, 6, 8];
			expect(() => MenuOrderValidation.checkIsBelowMax(counts)).toThrow();
		});

		test('최대 주문 수량을 초과하지 않은 경우 정상 처리', () => {
			const counts = [2, 4, 6, 8];
			expect(() => MenuOrderValidation.checkIsBelowMax(counts)).not.toThrow();
		});
	});
});
