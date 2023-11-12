import { EVENT_DATA, EVENT_CONDITION } from '../constant/data/EventData.js'

class Event {
  #name
  #type
  #condition
  #discount
  #giveaway
  #description

  /**
   * 생성자: 이벤트 데이터를 필드에 저장한다.
   * @param {EVENT_DATA} eventData 이벤트 데이터
   */
  constructor(eventData) {
    this.#name = eventData.name;
    this.#type = eventData.type;
    this.#discount = eventData.discount;
    this.#giveaway = eventData.giveaway;
    this.#description = eventData.description;

    // 공통 조건과 개별 조건을 병합한다.
    this.#condition = (orderForm) => {
      return EVENT_CONDITION(orderForm) && eventData.condition(orderForm);
    }
  }

  /**
   * 이벤트 대상 여부를 조회한다.
   * @param {object} orderForm 주문서
   * @returns {boolean} 이벤트 대상 여부
   */
  isEventTarget(orderForm) {
    return this.#condition(orderForm);
  }

  /**
   * 수령 가능한 할인 금액을 조회한다.
   * @param {object} orderForm 주문서
   * @returns 할인 금액
   */
  getDiscount(orderForm) {
    if (!this.isEventTarget(orderForm)) return 0;
    return this.#discount(orderForm);
  }

  /**
   * 수령 가능한 증정품을 조회한다.
   * @param {object} orderForm 
   * @returns 증정품
   */
  getGiveaway(orderForm) {
    if (!this.isEventTarget(orderForm)) return [];
    return this.#giveaway;

  }
}

export { Event };
