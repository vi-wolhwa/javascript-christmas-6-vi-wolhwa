import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import GENERAL_MESSAGES from '../constant/strings/GeneralMessages.js';

const MSG = GENERAL_MESSAGES;

class EventPlannerController {
	run() {
		this.#displayIntroduce();
		this.#handleUserInput();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	#displayIntroduce() {
		OutputView.print(MSG.greeting.introduce);
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
