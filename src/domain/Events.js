import EVENT_DATA from '../constant/data/EventData.js';
import PrintObject from '../util/PrintObject.js';
import Event from './Event.js';

class Events {
	/** @type {Array<Event>} */
	#events = [];

	constructor() {
		this.#events = EVENT_DATA.map((eventData) => new Event(eventData));
	}

	lookupAvailableBenefits(orderSheet) {
		return this.#events.map((event) => event.lookupAvailableBenefit(orderSheet) ?? []).flat();
	}
}

export default Events;
