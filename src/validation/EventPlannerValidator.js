import MenuCountValidation from './eventPlannerValidation/MenuCountValidation.js';
import MenuNameValidation from './eventPlannerValidation/MenuNameValidation.js';
import VisitDayValidation from './eventPlannerValidation/VisitDayValidation.js';

const EventPlannerValidator = {
	/**
	 * 방문 일자에 대하여 유효성 검사를 수행하는 함수
	 * @param {string} visitDay - 검사할 방문 일자
	 * @throws {Error} 유효하지 않은 날짜일 경우 에러를 throw
	 */
	validateVisitDay(visitDay) {
		VisitDayValidation.validate(visitDay);
	},

	/**
	 * 메뉴 주문에 대하여 유효성 검사를 수행하는 함수
	 * @param {Object[]} menuOrders - 검사할 메뉴 주문 배열
	 * @throws {Error} 유효하지 않은 주문일 경우 에러를 throw
	 */
	validateMenuOrders(menuOrders) {
		MenuNameValidation.validate(menuOrders.map((menu) => menu.name));
		MenuCountValidation.validate(menuOrders.map((menu) => menu.count));
	}
};

export default EventPlannerValidator;
