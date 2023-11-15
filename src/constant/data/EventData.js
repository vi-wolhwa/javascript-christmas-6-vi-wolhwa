/**
 * [starDay]
 * '일요일 + 크리스마스'라고 그룹화 할 수 있으나, 이에 대해 분명히 정의하고 있지 않다.
 * 따라서 다른 날도 starDay가 될 수 있다고 보고, 날짜만으로 초기화하였다.
 *
 * [weekday, weekend]
 * 일반적인 평일, 주말의 구분과 다르게 정의된다.
 * 따라서 이벤트에 따른 고유한 데이터라고 보았고, 현재 파일에서 선언하였다.
 *
 * [description]
 * 코드만 보고 이벤트가 어떤 내용인지 알기 어렵기 때문에 추가하였다.
 */

import { MENU_OPTIONS, EVENT_OPTIONS } from '../Options.js';
import MENU_DATA from '../data/MenuData.js';

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
		giveaways: [{ menu: MENU_DATA['샴페인'], count: 1 }],
		description: '할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정'
	})
]);

export default EVENT_DATA;
