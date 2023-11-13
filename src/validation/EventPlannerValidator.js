import DateValidation from './eventPlannerValidation/DateValidation.js';
import MenuNameValidation from './eventPlannerValidation/MenuNameValidation.js';
import MenuCountValidation from './eventPlannerValidation/MenuCountValidation.js';
import DeepFreeze from '../util/DeepFreeze.js';

/** EventPlanner 내에서 유효성검사를 담당하는 Validator */
const EventPlannerValidator = DeepFreeze({
	/**
	 * 방문일자(UserInput)에 대하여 유효성검사를 수행한다.
	 * @param {string} date 방문일자
	 */
	validateDate(date) {
		DateValidation.validate(date);
	},

	/**
	 * 주문(UserInput)에 대하여 유효성검사를 수행한다.
	 * @param {Array<object>} orders 주문
	 */
	validateOrders(orders) {
		MenuNameValidation.validate(orders.map((order) => order.name));
		MenuCountValidation.validate(orders.map((order) => order.count));
	}
});

export default EventPlannerValidator;
