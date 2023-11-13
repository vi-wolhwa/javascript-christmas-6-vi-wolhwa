import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import SIGNS from '../constant/strings/Signs.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
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
		await this.#handleDateInput();
		await this.#handleOrdersInput();
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

	async #handleDateInput() {
		const rawDate = await InputView.readDate();
		const date = this.#preprocessDate(rawDate);
		//TODO: date 저장, 에러 발생 시 재입력
	}

	async #handleOrdersInput() {
		const rawOrders = await InputView.readOrder();
		const orders = this.#preprocessOrder(rawOrders);
		//TODO: order 저장, 에러 발생 시 재입력
	}

	#preprocessDate(rawDate) {
		const newDate = rawDate.trim();
		Validator.validateDate(rawDate);
		return parseInt(newDate, 10);
	}

	#preprocessOrder(rawOrders) {
		const newOrders = rawOrders
			.split(SIGNS.comma)
			.map((order) => order.trim())
			.filter((order) => order !== SIGNS.empty)
			.map((order) => {
				const [name, count] = order.split(SIGNS.hyphen);
				name.replace(SIGNS.space, SIGNS.empty);
				return { name: name, count: parseInt(count, 10) };
			});
		Validator.validateOrder(newOrders);
		return newOrders;
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
