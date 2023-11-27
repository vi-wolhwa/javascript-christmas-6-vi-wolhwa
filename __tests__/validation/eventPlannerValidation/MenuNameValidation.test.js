import MenuNameValidation from '../../../src/validation/eventPlannerValidation/MenuNameValidation';

describe('MenuNameValidation 모듈 테스트', () => {
	describe('checkAreUnique 함수 테스트', () => {
		test('중복된 메뉴를 주문한 경우 에러 발생', () => {
			const names = ['양송이수프', '시저샐러드', '양송이수프'];
			expect(() => MenuNameValidation.checkAreUnique(names)).toThrow();
		});

		test('중복된 메뉴를 주문하지 않은 경우 정상 처리', () => {
			const names = ['양송이수프', '시저샐러드', '초코케이크'];
			expect(() => MenuNameValidation.checkAreUnique(names)).not.toThrow();
		});
	});

	describe('checkInMenuData 함수 테스트', () => {
		test('메뉴판에 없는 메뉴를 주문한 경우 에러 발생', () => {
			const names = ['양송이수프', '야채수프'];
			expect(() => MenuNameValidation.checkInMenuData(names)).toThrow();
		});

		test('메뉴판에 있는 메뉴를 주문한 경우 정상 처리', () => {
			const names = ['양송이수프', '시저샐러드'];
			expect(() => MenuNameValidation.checkInMenuData(names)).not.toThrow();
		});
	});
});
