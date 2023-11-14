import EVENT_DATA from '../constant/data/EventData.js';
import Event from './Event.js-+';

class Events {
	/** @type {Array<Event>} */
	#events = [];

	constructor() {
		this.#events = EVENT_DATA.map((eventData) => new Event(eventData));
	}
}

export default Events;
