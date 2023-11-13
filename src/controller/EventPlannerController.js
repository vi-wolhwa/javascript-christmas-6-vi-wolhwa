import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
	async run() {
		this.#displayIntroduce();
		await this.#handleUserInput();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	async #handleUserInput() {
		await this.#handleDateInput();
		this.#handleOrderInput();
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

	#handleOrderInput() {}

	#displayOrderMenus() {}

	#displayTotalPrice() {}

	#displayGiveaways() {}

	#displayBenefitDetails() {}

	#displayTotalBenefitAmount() {}

	#displayDiscountedPrice() {}

	#displayEventBadge() {}
}

export default EventPlannerController;
