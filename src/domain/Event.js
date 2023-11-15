class Event {
	#name;
	#condition;
	#discount;
	#giveaways;
	#description;

	/**
	 * 객체 생성 시 이벤트 정보를 저장하는 함수
	 * @param {object} eventData
	 */
	constructor(eventData) {
		this.#name = eventData.name;
		this.#condition = eventData.condition;
		this.#discount = eventData.discount;
		this.#giveaways = eventData.giveaways;
		this.#description = eventData.description;
	}

	/**
	 * 이벤트 참여 대상인지 검사하고, 수혜 가능한 혜택을 반환하는 함수
	 * @param {object} orderSheet - 주문서
	 * @returns {object} 이벤트 정보 {name, discount, giveaways[]}
	 */
	lookupAvailableEvent(orderSheet) {
		if (this.#isEventTarget(orderSheet)) {
			return { name: this.#name, discount: this.#discount(orderSheet), giveaways: this.#giveaways };
		}
	}

	/**
	 * 이벤트 참여 대상인지 검사하는 함수
	 * @param {object} orderSheet
	 * @returns {boolean} 참여 대상 여부
	 */
	#isEventTarget(orderSheet) {
		return this.#condition(orderSheet);
	}
}

export default Event;
