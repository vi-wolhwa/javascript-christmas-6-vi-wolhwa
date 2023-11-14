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
		this.giveaways = eventData.giveaways;
		this.#description = eventData.giveways;
	}
}

export default Event;
