import { EVENT_DATA } from "../../src/constant/EventData.js";
import { MENU_DATA } from "../../src/constant/MenuData.js";

describe("EVENT_DATA 객체 테스트", () => {
  test("크리스마스 디데이 할인", () => {
    const christmasEvent = EVENT_DATA[0];
    const christmas = 25

    // 이벤트 조건 경계값 테스트
    expect(christmasEvent.condition(christmas)).toBeTruthy();
    expect(christmasEvent.condition(christmas + 1)).toBeFalsy();

    // 할인 금액 확인
    expect(christmasEvent.benefits(christmas)).toBe(3400);
  });

  test("평일 할인", () => {
    const weekdayDiscountEvent = EVENT_DATA[1];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const weekend = ['Friday', 'Saturday'];

    // 이벤트 조건 테스트 (평일)
    weekday.forEach((day) => {
      expect(weekdayDiscountEvent.condition(day)).toBeTruthy();
    });

    // 이벤트 조건 테스트 (주말)
    weekend.forEach((day) => {
      expect(weekdayDiscountEvent.condition(day)).toBeFalsy();
    });
  });

  test("주말 할인", () => {
    const weekendDiscountEvent = EVENT_DATA[2];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const weekend = ['Friday', 'Saturday'];

    // 이벤트 조건 테스트 (주말)
    weekend.forEach((day) => {
      expect(weekendDiscountEvent.condition(day)).toBeTruthy();
    });

    // 이벤트 조건 테스트 (평일)
    weekday.forEach((day) => {
      expect(weekendDiscountEvent.condition(day)).toBeFalsy();
    });
  });

  test("특별 할인", () => {
    const specialDiscountEvent = EVENT_DATA[3];
    const starDay = [3, 10, 17, 24, 25, 31];

    // 이벤트 조건 테스트
    starDay.forEach((day) => {
      expect(specialDiscountEvent.condition(day)).toBeTruthy();
      expect(specialDiscountEvent.condition(day + 2)).toBeFalsy();
    });
  });

  test("증정 이벤트", () => {
    const giveawayEvent = EVENT_DATA[4];

    // 이벤트 조건 경계값 테스트
    expect(giveawayEvent.condition(120000)).toBeTruthy();
    expect(giveawayEvent.condition(119999)).toBeFalsy();

    // 증정 메뉴 확인
    expect(giveawayEvent.benefits()).toEqual([MENU_DATA['샴페인']]);
  });
});
