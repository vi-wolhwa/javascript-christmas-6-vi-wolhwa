import { MENU_OPTIONS } from '../../src/constant/Options';
import MenuManager from '../../src/domain/MenuManager.js';

const category = MENU_OPTIONS.category;

describe('MenuManager 모듈 테스트', () => {
	describe('isMenuExist 함수 테스트', () => {
		test.each([[11], ['타파스']])('메뉴가 존재할 경우 true 반환', (identifier) => {
			expect(MenuManager.isMenuExist(identifier)).toBe(true);
		});

		test.each([[12], '보드카'])('메뉴가 존재하지 않을 경우 false 반환', (identifier) => {
			expect(MenuManager.isMenuExist(identifier)).toBe(false);
		});
	});

	describe('findNameById함수 테스트', () => {
		test.each([[11, '샴페인']])('메뉴가 존재할 경우 메뉴 이름 반환', (id, name) => {
			expect(MenuManager.findNameById(id)).toBe(name);
		});

		test.each([[12]])('메뉴가 존재하지 않을 경우 null 반환', (id) => {
			expect(MenuManager.findNameById(id)).toBe(null);
		});
	});

	describe('findIdByName함수 테스트', () => {
		test.each([['샴페인', 11]])('메뉴가 존재할 경우 메뉴 id 반환', (name, id) => {
			expect(MenuManager.findIdByName(name)).toBe(id);
		});

		test.each([['보드카']])('메뉴가 존재하지 않을 경우 null', (name) => {
			expect(MenuManager.findIdByName(name)).toBe(null);
		});
	});

	describe('findPrice함수 테스트', () => {
		test.each([
			[0, 6000],
			['초코케이크', 15000]
		])('메뉴가 존재할 경우 메뉴 가격 반환', (identifier, price) => {
			expect(MenuManager.findPrice(identifier)).toBe(price);
		});

		test.each([[12], ['보드카']])('메뉴가 존재하지 않을 경우 null 반환', (identifier) => {
			expect(MenuManager.findPrice(identifier)).toBe(null);
		});
	});

	describe('findCategory함수 테스트', () => {
		test.each([
			[0, category.appetizer],
			[3, category.main],
			['초코케이크', category.dessert],
			['제로콜라', category.beverage]
		])('메뉴가 존재할 경우 메뉴 카테고리 반환', (identifier, category) => {
			expect(MenuManager.findCategory(identifier)).toBe(category);
		});

		test.each([[12], ['보드카']])('메뉴가 존재하지 않을 경우 null 반환', (identifier) => {
			expect(MenuManager.findCategory(identifier)).toBe(null);
		});
	});
});
