import Order from '../domain/Order.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import SIGNS from '../constant/strings/Signs.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
	/** @type {Order} */
	#order;

	/** 이벤트 플래너 프로그램을 실행한다. */
	async run() {
		this.#displayIntroduce();
		await this.#handleUserInput();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	/** Introduce 메시지를 출력한다. */
	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	async #handleUserInput() {
		const date = await this.#handleDateInput();
		const orders = await this.#handleOrdersInput();
		this.#order = new Order(date, orders);
	}

	async #handleDateInput() {
		return this.#preprocessDate(InputView.readDate());
	}

	async #handleOrdersInput() {
		return this.#preprocessOrder(InputView.readOrder());
	}

	#preprocessDate(rawDate) {
		const newDate = rawDate.trim();
		Validator.validateDate(rawDate);
		return parseInt(newDate, 10);
	}

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
