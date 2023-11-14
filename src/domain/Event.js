import { BENEFIT } from '../constant/template/Templates.js';

const commonCondition = (orderSheet) => orderSheet.total_price >= 10000;

class Event {
	#name;
	#condition;
	#discount;
	#giveaways;
	#description;

	constructor(eventData) {
		this.#name = eventData.name;
		this.#condition = eventData.condition;
		this.#discount = eventData.discount;
		this.#giveaways = eventData.giveaways;
		this.#description = eventData.description;
	}

	lookupAvailableBenefit(orderSheet) {
		if (this.#isEventTarget(orderSheet)) {
			return BENEFIT(this.#name, this.#discount(orderSheet), this.#giveaways);
		}
	}

	#isEventTarget(orderSheet) {
		return this.#condition(orderSheet);
	}
}

export default Event;
