import VisitDayValidation from './eventPlannerValidation/VisitDayValidation.js';
import MenuNameValidation from './eventPlannerValidation/MenuNameValidation.js';
import MenuCountValidation from './eventPlannerValidation/MenuCountValidation.js';

/** EventPlanner 내에서 유효성검사를 담당하는 Validator */
const EventPlannerValidator = {
	/**
	 * 방문일자(UserInput)에 대하여 유효성검사를 수행한다.
	 * @param {string} visitDay 방문일자
	 */
	validateVisitDay(visitDay) {
		VisitDayValidation.validate(visitDay);
	},

	/**
	 * 주문(UserInput)에 대하여 유효성검사를 수행한다.
	 * @param {Array<object>} menuOrders 메뉴주문목록
	 */
	validateMenuOrders(menuOrders) {
		MenuNameValidation.validate(menuOrders.map((menu) => menu.name));
		MenuCountValidation.validate(menuOrders.map((menu) => menu.count));
	}
};

export default EventPlannerValidator;
