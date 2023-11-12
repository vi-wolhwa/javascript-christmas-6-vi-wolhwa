import { OPTIONS } from './Options.js'

const category = OPTIONS.menu.category;

/**
 * day : 예약 일자
 * menus : 주문 메뉴 [{name: menu1, count: 2}, ...]
 * count: 메뉴 카테고리별 주문 수량
 * total_price : 할인 전 가격
 * active_events : 적용된 이벤트
 * giveaways : 증정 메뉴 [menu1, ...]
 * total_discount : 총 할인 금액
 * total_benefits : 총 혜택 금액
 * discount_price : 할인 후 가격
 */
const ORDER_FORM = (day = null, menus = []) => {
  return {
    // 사용자 입력 데이터
    day: day,
    menus: menus,

    // 주문 접수 후 할당되는 데이터
    count: {
      [category.appetizer]: null,
      [category.main]: null,
      [category.dessert]: null,
      [category.beverage]: null
    },
    total_price: null,

    // 이벤트 적용 후 할당되는 데이터
    active_events: [],
    giveaways: [],
    total_discount: null,
    total_benefits: null,
    discount_price: null,
  }
};


export { ORDER_FORM };
