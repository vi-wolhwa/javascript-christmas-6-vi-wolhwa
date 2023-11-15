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
			return { name: this.#name, discount: this.#discount(orderSheet), giveaways: this.#giveaways };
		}
	}

	#isEventTarget(orderSheet) {
		return this.#condition(orderSheet);
	}
}

export default Event;
