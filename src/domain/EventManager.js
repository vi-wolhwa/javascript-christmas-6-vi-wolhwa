import EVENT_DATA from '../data/EventData.js';
import EVENT_BADGE_DATA from '../data/EventBadgeData.js';
import Event from './Event.js';
import EventBadge from './EventBadge.js';

class EventManager {
	#events;
	#eventBadge;

	/**
	 * 객체 생성 시, 이벤트 정보를 로드
	 */
	constructor() {
		this.#events = EVENT_DATA.map((data) => new Event(data));
		this.#eventBadge = new EventBadge(EVENT_BADGE_DATA);
	}

	/**
	 * 이벤트 참여 대상인지 검사하고, 수혜 가능한 이벤트와 혜택을 반환하는 함수
	 * @param {object} orderSheet - 주문서
	 * @returns {object} 참여 대상 이벤트 배열 [{name, discount, giveaways[]}]
	 */
	lookupAvailableEvents(orderSheet) {
		return this.#events.map((event) => event.lookupAvailableEvent(orderSheet) ?? []).flat();
	}

	/**
	 * 주문서에 따른 이벤트 뱃지를 조회한다.
	 * @param {object} orderSheet - 주문서
	 * @returns {string} 이벤트 뱃지
	 */
	lookupEventBadge(orderSheet) {
		return this.#eventBadge.lookupEventBadge(orderSheet);
	}
}

export default EventManager;
