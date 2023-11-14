import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheetTemplate.js';
import OPTIONS from '../constant/Options.js';
import MENU_DATA from '../constant/data/MenuData.js';
import DeepCopy from './../util/DeepCopy.js';
import GetDayOfWeek from './../util/GetDayOfWeek.js';
import DeepFreeze from './../util/DeepFreeze.js';
import { BENEFIT } from '../constant/template/Templates.js';

const DATE = OPTIONS.date;

class Order {
	/** @type {ORDER_SHEET} */
	#orderSheet = DeepCopy(ORDER_SHEET);

	/**
	 * 주문서(OrderSheet)에 데이터를 작성한다.
	 * @param {string} key - OrderSheet의 Key
	 * @param {*} value - 작성할 데이터
	 */
	writeOrderSheet(key, value) {
		//TODO: try-catch
		this.#orderSheet[key] = value;
		this.#autoCalculcate(key, value);
	}

	/**
	 * 주문서(OrderSheet)의 데이터를 읽어온다.
	 * @param {string} key - OrderSheet의 Key
	 * @returns 읽어온 데이터
	 */
	readOrderSheet(key) {
		return this.#orderSheet[key];
	}

	/**
	 * 주문서를 작성할 떄마다, 계산 가능한 항목에 대한 처리를 수횅한다.
	 * ex) 주문서의 요일이 아직 null이고, 날짜를 입력받았다면, 요일을 계산하여 주문서에 작성한다.
	 * @param {string} key - OrderSheet에 작성한 Key
	 * @param {*} value - OrderSheet에 작성한 데이터
	 */
	#autoCalculcate(key, value) {
		this.#orderSheet.day_of_week ?? (key === KEY.date && this.#calculateDayOfWeek(value));
		this.#orderSheet.total_price ?? (key === KEY.order && this.#calculateTotalPrice(value));
		this.#orderSheet.total_discount ?? (key === KEY.available_events && this.#calculateTotalDiscount(value));
		this.#orderSheet.total_benefits ?? (key === KEY.total_discount && this.#calculateTotalBenefits(value));
		this.#orderSheet.discounted_price ?? (key === KEY.total_discount && this.#calculateDiscountedPrice(value));
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
		this.writeOrderSheet(KEY.total_discount, totalPrice);
	}

	/**
	 * 총 할인 금액을 계산하고, 주문서에 작성한다.
	 * @param {Array<BENEFIT>} events - 적용 가능한 이벤트 목록
	 */
	#calculateTotalDiscount(events) {
		const totalDiscount = events.reduce((totalDiscount, event) => {
			return totalDiscount + event.discount;
		}, 0);
		this.writeOrderSheet(KEY.total_discount, totalDiscount);
	}

	/**
	 * 총 혜택 금액을 계산하고, 주문서에 작성한다.
	 * @param {number} total_discount
	 */
	#calculateTotalBenefits(total_discount) {
		const events = this.readOrderSheet(KEY.available_events);
		const totalBenefits = events.reduce((total, event) => {
			const total_giveaway = event.giveaways.reduce((total, giveaway) => total + giveaway.menu.price, 0);
			return total + total_giveaway;
		}, total_discount);
		this.writeOrderSheet(KEY.total_benefits, totalBenefits);
	}

	/**
	 * 최종 결제 금액을 계산하고, 주문서에 작성한다.
	 * @param {number} total_discount - 총 할인 금액
	 */
	#calculateDiscountedPrice(total_discount) {
		const discountedPrice = this.readOrderSheet(KEY.total_price) - total_discount;
		this.writeOrderSheet(KEY.discounted_price, discountedPrice);
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
