import { EVENT_DATA } from "../../../src/constant/data/EventData.js";
import { ORDER_FORM } from "../../../src/constant/form/OrderForm.js";
import { MENU_DATA } from "../../../src/constant/data/MenuData.js";

describe("EVENT_DATA 객체 테스트", () => {
  let orderForm;

  beforeEach(() => {
    orderForm = ORDER_FORM();
  });
  test("크리스마스 디데이 할인", () => {
    const event = EVENT_DATA[0];

    // 이벤트 조건 경계값 테스트
    orderForm.day = 25;
    expect(event.condition(orderForm)).toBeTruthy();
    orderForm.day = 26;
    expect(event.condition(orderForm)).toBeFalsy();

    // 할인 금액 확인
    orderForm.day = 25;
    expect(event.benefits(orderForm)).toBe(3400);
  });

  test("평일 할인", () => {
    const event = EVENT_DATA[1];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const weekend = ['Friday', 'Saturday'];

    // 이벤트 조건 테스트 (평일)
    weekday.forEach((dayOfWeek) => {
      orderForm.day_of_week = dayOfWeek;
      expect(event.condition(orderForm)).toBeTruthy();
    });

    // 이벤트 조건 테스트 (주말)
    weekend.forEach((dayOfWeek) => {
      orderForm.day_of_week = dayOfWeek;
      expect(event.condition(orderForm)).toBeFalsy();
    });
  });

  test("주말 할인", () => {
    const event = EVENT_DATA[2];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const weekend = ['Friday', 'Saturday'];

    // 이벤트 조건 테스트 (주말)
    weekend.forEach((dayOfWeek) => {
      orderForm.day_of_week = dayOfWeek;
      expect(event.condition(orderForm)).toBeTruthy();
    });

    // 이벤트 조건 테스트 (평일)
    weekday.forEach((dayOfWeek) => {
      orderForm.day_of_week = dayOfWeek;
      expect(event.condition(orderForm)).toBeFalsy();
    });
  });

  test("특별 할인", () => {
    const event = EVENT_DATA[3];
    const starDay = [3, 10, 17, 24, 25, 31];

    // 이벤트 조건 테스트
    starDay.forEach((day) => {
      orderForm.day = day;
      expect(event.condition(orderForm)).toBeTruthy();
    });

    orderForm.day = 26;
    expect(event.condition(orderForm)).toBeFalsy();
  });

  test("증정 이벤트", () => {
    const event = EVENT_DATA[4];

    // 이벤트 조건 경계값 테스트
    orderForm.total_price = 120000;
    expect(event.condition(orderForm)).toBeTruthy();
    orderForm.total_price = 119999;
    expect(event.condition(orderForm)).toBeFalsy();

    // 증정 메뉴 확인
    event.benefits().forEach((giveaway) => {
      expect(Object.keys(MENU_DATA)).toContain(giveaway);
    });
  });
});