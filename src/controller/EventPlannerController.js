import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventPlannerController {
	run() {
		this.#displayIntroduce();
		this.#handleUserInput();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	#handleUserInput() {
		this.#handleDateInput();
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

	#handleDateInput() {}

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
