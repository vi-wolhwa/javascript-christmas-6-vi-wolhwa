import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheet.js';
import OPTIONS from '../constant/Options.js';
import MENU_DATA from '../constant/data/MenuData.js';
import DeepCopy from './../util/DeepCopy.js';
import GetDayOfWeek from './../util/GetDayOfWeek.js';
import DeepFreeze from './../util/DeepFreeze.js';

const DATE = OPTIONS.date;

class Order {
	/** @type {ORDER_SHEET} */
	#orderSheet = DeepCopy(ORDER_SHEET);

	/**
	 * 주문서(orderSheet)에 데이터를 작성한다.
	 * @param {string} key
	 * @param {*} value
	 */
	writeOrderSheet(key, value) {
		//TODO: try-catch
		this.#orderSheet[key] = value;
		this.#autoCalculcate(key, value);
	}

	/**
	 * 주문서를 작성할 떄마다, 계산 가능한 항목에 대한 처리를 수횅한다.
	 * ex) 주문서의 요일이 아직 null이고, 날짜를 입력받았다면, 요일을 계산하여 주문서에 작성한다.
	 * @param {string} key
	 * @param {*} value
	 */
	#autoCalculcate(key, value) {
		this.#orderSheet.day_of_week ?? (key === KEY.date && this.#calculateDayOfWeek(value));
		this.#orderSheet.total_price ?? (key === KEY.order && this.#calculateTotalPrice(value));
	}

	/**
	 * 방문 날짜에 해당하는 요일을 계산하고, 주문서에 작성한다.
	 * @param {number} date - 방문 날짜
	 */
	#calculateDayOfWeek(date) {
		const dayOfWeek = GetDayOfWeek(DATE.year, DATE.month, date);
		this.writeOrderSheet(KEY.day_of_week, dayOfWeek);
	}

	/**
	 * 주문에 대한 총 주문금액을 계산하고, 주문서에 작성한다.
	 * @param {Array<object>} order - 주문 정보 배열 [{name: 메뉴명, count: 개수}, ...]
	 */
	#calculateTotalPrice(order) {
		const totalPrice = order.reduce((totalPrice, menu) => {
			return totalPrice + MENU_DATA[menu.name].price * menu.count;
		}, 0);
		this.writeOrderSheet(KEY.total_price, totalPrice);
	}

	/**
	 * 주문서를 ReadOnly로 반환한다.
	 * @returns {ORDER_SHEET} 주문서(OrderSheet) 객체
	 */
	getOrderSheet() {
		return DeepFreeze(DeepCopy(this.#orderSheet));
	}
}

export default Order;
