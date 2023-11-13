import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

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
		await this.#handleOrderInput();
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
		const date = await InputView.readDate();
	}

	async #handleOrderInput() {
		const order = await InputView.readOrder();
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
