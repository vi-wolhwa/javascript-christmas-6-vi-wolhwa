/**
 * Q. 사용하지 않는 description을 추가한 이유
 *   : 코드만 보고 이벤트가 어떤 내용인지 알기 어렵기 때문에 추가하였다.
 */

import { MENU_OPTIONS, EVENT_OPTIONS } from '../constant/Options.js';

const commonCondition = (orderSheet) => orderSheet.total_price >= 10000;

const EVENT_DATA = Object.freeze([
	Object.freeze({
		name: '크리스마스 디데이 할인',
		condition: (orderSheet) => orderSheet.visitDay <= EVENT_OPTIONS.christmas && commonCondition(orderSheet),
		discount: (orderSheet) => 1000 + 100 * (orderSheet.visitDay - 1),
		giveaways: [],
		description: '크리스마스가 다가올수록 날마다 할인 금액이 1,000원부터 100원씩 증가'
	}),
	Object.freeze({
		name: '평일 할인',
		condition: (orderSheet) => EVENT_OPTIONS.weekday.includes(orderSheet.day_of_week) && commonCondition(orderSheet),
		discount: (orderSheet) => 2023 * orderSheet.order_count[MENU_OPTIONS.category.dessert],
		giveaways: [],
		description: '평일에는 디저트 메뉴를 메뉴 1개당 2,023원 할인'
	}),
	Object.freeze({
		name: '주말 할인',
		condition: (orderSheet) => EVENT_OPTIONS.weekend.includes(orderSheet.day_of_week) && commonCondition(orderSheet),
		discount: (orderSheet) => 2023 * orderSheet.order_count[MENU_OPTIONS.category.main],
		giveaways: [],
		description: '주말에는 메인 메뉴를 메뉴 1개당 2,023원 할인'
	}),
	Object.freeze({
		name: '특별 할인',
		condition: (orderSheet) => EVENT_OPTIONS.starDays.includes(orderSheet.visitDay) && commonCondition(orderSheet),
		discount: () => 1000,
		giveaways: [],
		description: '이벤트 달력에 별이 있으면 총주문 금액에서 1,000원 할인'
	}),
	Object.freeze({
		name: '증정 이벤트',
		condition: (orderSheet) => orderSheet.total_price >= 120000 && commonCondition(orderSheet),
		discount: () => 0,
		giveaways: [{ name: '샴페인', count: 1 }],
		description: '할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정'
	})
]);

export default EVENT_DATA;
