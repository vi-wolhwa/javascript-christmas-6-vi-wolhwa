class EventBadge {
	#eventBadgeData;

	/**
	 * 객체 생성 시, 이벤트 뱃지 데이터를 저장
	 * @param {Array<object>} data
	 */
	constructor(data) {
		this.#eventBadgeData = data;
	}

	/**
	 * 주문서에 따른 이벤트 뱃지를 조회한다.
	 * @param {object} orderSheet - 주문서
	 * @returns {string} 이벤트 뱃지
	 */
	lookupEventBadge(orderSheet) {
		const totalBenefitAmount = orderSheet.total_benefit_amount;
		return this.#eventBadgeData.find((item) => item.condition(totalBenefitAmount))?.name || '';
	}
}

export default EventBadge;
