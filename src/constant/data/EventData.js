/**
 * [orderFrom]
 * OrderFrom.js와 의존성을 제거하고자 하였으나, 코드가 매우 복잡해졌다.
 * 따라서 OrderForm을 직접 참조하여 코드를 간결하게 유지하였다.
 * 그러나 constant 데이터가 비즈니스 로직을 수행한다는 문제가 있다.
 * 
 * [starDay]
 * '일요일 + 크리스마스'라고 그룹화 할 수 있으나, 이에 대해 분명히 정의하고 있지 않다.
 * 따라서 다른 날도 starDay가 될 수 있다고 보고, 날짜만으로 초기화하였다.
 * 
 * [weekday, weekend]
 * 일반적인 평일, 주말의 구분과 다르게 정의된다.
 * 따라서 이벤트에 따른 고유한 데이터라고 보았고, 현재 파일에서 선언하였다.
 * 
 * [description]
 * 코드만 보고 이벤트가 어떤 내용인지 알기 어렵기 때문에 추가하였다.
 */

import { OPTIONS } from "../Options.js";
import { MENU_DATA } from "../data/MenuData.js"
import { deepFreeze } from "../../util/DeepFreeze.js";

const type = OPTIONS.event.type;
const dow = OPTIONS.date.days_of_week;
const category = OPTIONS.menu.category;

const christmas = 25;
const starDay = [3, 10, 17, 24, 25, 31];
const weekday = Object.values(dow).slice(0, 5);
const weekend = Object.values(dow).slice(5, 7);

const EVENT_CONDITION = (orderForm) => orderForm.total_price >= 10000;

const EVENT_DATA = deepFreeze([
  {
    name: '크리스마스 디데이 할인',
    condition: (orderForm) => orderForm.day <= christmas,
    discount: (orderForm) => 1000 + (100 * (orderForm.day - 1)),
    giveaway: [],
    description: '크리스마스가 다가올수록 날마다 할인 금액이 1,000원부터 100원씩 증가'
  },
  {
    name: '평일 할인',
    condition: (orderForm) => weekday.includes(orderForm.day_of_week),
    discount: (orderForm) => 2023 * orderForm.count[category.dessert],
    giveaway: [],
    description: '평일에는 디저트 메뉴를 메뉴 1개당 2,023원 할인'
  },
  {
    name: '주말 할인',
    condition: (orderForm) => weekend.includes(orderForm.day_of_week),
    discount: (orderForm) => 2023 * orderForm.count[category.main],
    giveaway: [],
    description: '주말에는 메인 메뉴를 메뉴 1개당 2,023원 할인'
  },
  {
    name: '특별 할인',
    condition: (orderForm) => starDay.includes(orderForm.day),
    discount: () => 1000,
    giveaway: [],
    description: '이벤트 달력에 별이 있으면 총주문 금액에서 1,000원 할인'
  },
  {
    name: '증정 이벤트',
    condition: (orderForm) => orderForm.total_price >= 120000,
    discount: () => 0,
    giveaway: [{ name: MENU_DATA['샴페인'], count: 1 }],
    description: '할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정'
  }
]);

console.log(EVENT_DATA[3].giveaway)

export { EVENT_DATA, EVENT_CONDITION };