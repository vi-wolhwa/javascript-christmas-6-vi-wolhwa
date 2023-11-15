import EVENT_DATA from '../constant/data/EventData.js';
import Event from './Event.js';

class Events {
	/** @type {Array<Event>} */
	#events = [];

	/**
	 * 객체 생성 시 이벤트 객체 리스트를 생성하는 함수
	 */
	constructor() {
		this.#events = EVENT_DATA.map((eventData) => new Event(eventData));
	}

	/**
	 * 이벤트 참여 대상인지 검사하고, 수혜 가능한 이벤트와 혜택을 반환하는 함수
	 * @param {object} orderSheet - 주문서
	 * @returns {object} 참여 대상 이벤트 배열 [{name, discount, giveaways[]}]
	 */
	lookupAvailableEvents(orderSheet) {
		return this.#events.map((event) => event.lookupAvailableEvent(orderSheet) ?? []).flat();
	}
}

export default Events;
