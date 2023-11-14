import EVENT_DATA from '../../../src/constant/data/EventData.js';
import { ORDER_SHEET } from '../../../src/constant/template/OrderSheetTemplate.js';
import MENU_DATA from '../../../src/constant/data/MenuData.js';
import DeepCopy from './../../../src/util/DeepCopy.js';
import OPTIONS from '../../../src/constant/Options.js';

describe('EVENT_DATA 모듈 테스트', () => {
	let orderSheet;
	const category = OPTIONS.menu.category;

	beforeEach(() => {
		orderSheet = DeepCopy(ORDER_SHEET);
		orderSheet.total_price = 10000;
	});
	test("'크리스마스 디데이 할인' 테스트", () => {
		const event = EVENT_DATA[0];

		// 이벤트 조건 경계값 테스트
		orderSheet.day = 25;
		expect(event.condition(orderSheet)).toBeTruthy();
		orderSheet.day = 26;
		expect(event.condition(orderSheet)).toBeFalsy();

		// 공통 조건 테스트
		orderSheet.total_price = 9999;
		expect(event.condition(orderSheet)).toBeFalsy();

		// 할인 금액 테스트
		orderSheet.day = 25;
		expect(event.discount(orderSheet)).toBe(3400);
	});

	test("'평일 할인' 테스트", () => {
		const event = EVENT_DATA[1];
		const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
		const weekend = ['Friday', 'Saturday'];

		// 이벤트 조건 테스트 (주말)
		weekend.forEach((dayOfWeek) => {
			orderSheet.day_of_week = dayOfWeek;
			expect(event.condition(orderSheet)).toBeFalsy();
		});

		// 이벤트 조건 테스트 (평일)
		weekday.forEach((dayOfWeek) => {
			orderSheet.day_of_week = dayOfWeek;
			expect(event.condition(orderSheet)).toBeTruthy();
		});

		// 공통 조건 테스트
		orderSheet.total_price = 9999;
		expect(event.condition(orderSheet)).toBeFalsy();

		// 할인 금액 테스트
		orderSheet.order_count = { [category.dessert]: 2 };
		expect(event.discount(orderSheet)).toBe(4046);
	});

	test("'주말 할인' 테스트", () => {
		const event = EVENT_DATA[2];
		const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
		const weekend = ['Friday', 'Saturday'];

		// 이벤트 조건 테스트 (평일)
		weekday.forEach((dayOfWeek) => {
			orderSheet.day_of_week = dayOfWeek;
			expect(event.condition(orderSheet)).toBeFalsy();
		});

		// 이벤트 조건 테스트 (주말)
		weekend.forEach((dayOfWeek) => {
			orderSheet.day_of_week = dayOfWeek;
			expect(event.condition(orderSheet)).toBeTruthy();
		});

		// 공통 조건 테스트
		orderSheet.total_price = 9999;
		expect(event.condition(orderSheet)).toBeFalsy();

		// 할인 금액 테스트
		orderSheet.order_count = { [category.main]: 2 };
		expect(event.discount(orderSheet)).toBe(4046);
	});

	test("'특별 할인' 테스트", () => {
		const event = EVENT_DATA[3];
		const starDay = [3, 10, 17, 24, 25, 31];

		// 이벤트 조건 테스트
		orderSheet.day = 26;
		expect(event.condition(orderSheet)).toBeFalsy();

		starDay.forEach((day) => {
			orderSheet.day = day;
			expect(event.condition(orderSheet)).toBeTruthy();
		});

		// 공통 조건 테스트
		orderSheet.total_price = 9999;
		expect(event.condition(orderSheet)).toBeFalsy();
	});

	test("'증정 이벤트' 테스트", () => {
		const event = EVENT_DATA[4];

		// 이벤트 조건 경계값 테스트
		orderSheet.total_price = 119999;
		expect(event.condition(orderSheet)).toBeFalsy();
		orderSheet.total_price = 120000;
		expect(event.condition(orderSheet)).toBeTruthy();

		// 증정 메뉴 확인
		event.giveaways.forEach((giveaway) => {
			expect(Object.keys(MENU_DATA)).toContain(giveaway.menu.name);
		});
	});
});
