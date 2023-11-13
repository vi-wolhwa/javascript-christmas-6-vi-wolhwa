import Order from '../domain/Order.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import SIGNS from '../constant/strings/Signs.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
	/** @type {Order} */
	#order;

	// 이벤트 플래너 프로그램을 실행한다.
	async run() {
		this.#displayIntroduce();
		await this.#handleUserInput();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	// Introduce 메시지를 출력한다.
	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	// 사용자입력에 대한 처리를 담당한다.
	async #handleUserInput() {
		const date = await this.#handleDateInput();
		const orders = await this.#handleOrdersInput();
		this.#order = new Order(date, orders);
	}

	/**
	 * 방문날짜(Date)에 대한 처리를 담당한다.
	 * @returns {number} 방문 날짜
	 */
	async #handleDateInput() {
		return this.#preprocessDate(InputView.readDate());
	}

	/**
	 * 주문메뉴(Orders)에 대한 처리를 담당한다.
	 * @returns {Array<object>} 주문 메뉴 목록 {메뉴명, 개수}
	 */
	async #handleOrdersInput() {
		return this.#preprocessOrder(InputView.readOrder());
	}

	/**
	 * 방문날짜(Date)에 대한 전처리를 수행한다.
	 * @param {string} rawDate 방문날짜(UserInput)
	 * @returns {number} 방문 날짜
	 */
	#preprocessDate(rawDate) {
		const newDate = rawDate.trim();
		Validator.validateDate(rawDate);
		return parseInt(newDate, 10);
	}

	/**
	 * 주문메뉴(Orders)에 대한 전처리를 수행한다.
	 * @param {string} rawOrders 주문(UserInput)
	 * @returns {Array<object>} 주문 메뉴 목록 {메뉴명, 개수}
	 */
	#preprocessOrder(rawOrders) {
		const newOrders = rawOrders
			.split(SIGNS.comma)
			.map((item) => item.trim())
			.filter((item) => item !== SIGNS.empty)
			.map((item) => {
				const [name, count] = item.split(SIGNS.hyphen);
				name.replace(SIGNS.space, SIGNS.empty);
				return { name: name, count: parseInt(count, 10) };
			});
		Validator.validateOrder(newOrders);
		return newOrders;
	}

	#displayResultHeader() {}

	#displayResultInOrder() {
		this.#displayOrderMenus();
		this.#displayTotalPrice();
		this.#displayGiveaways();
		this.#displayBenefitDetails();
		this.#displayTotalBenefitAmount();
		this.#displayDiscountedPrice();
		this.#displayEventBadge();
	}

	#displayOrderMenus() {}

	#displayTotalPrice() {}

	#displayGiveaways() {}

	#displayBenefitDetails() {}

	#displayTotalBenefitAmount() {}

	#displayDiscountedPrice() {}

	#displayEventBadge() {}
}

export default EventPlannerController;
