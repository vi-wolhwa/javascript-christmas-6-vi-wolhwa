import { EVENT_BENEFIT } from '../constant/template/Templates.js';

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

	lookupAvailableEvent(orderSheet) {
		if (this.#isEventTarget(orderSheet)) {
			return EVENT_BENEFIT(this.#name, this.#discount(orderSheet), this.#giveaways);
		}
	}

	#isEventTarget(orderSheet) {
		return this.#condition(orderSheet);
	}
}

export default Event;
