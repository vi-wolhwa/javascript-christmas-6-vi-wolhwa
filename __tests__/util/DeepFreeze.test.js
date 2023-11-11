import { deepFreeze } from "../../src/util/DeepFreeze.js";

describe('deepFreeze 함수 테스트', () => {
  let obj;

  beforeEach(() => {
    obj = {
      prop1: {
        subprop1: 'value1',
        subprop2: [1, 2, 3],
      },
      prop2: 'value2',
    };

    // beforeEach에서 deepFreeze 함수를 사용하여 객체를 동결
    deepFreeze(obj);
  });

  test('객체를 재귀적으로 동결하는지 확인', () => {
    // 첫 번째 단계 동결 확인
    expect(Object.isFrozen(obj)).toBe(true);

    // 중첩 객체 동결 확인
    expect(Object.isFrozen(obj.prop1)).toBe(true);
    expect(Object.isFrozen(obj.prop1.subprop2)).toBe(true);
  });

  test('동결된 객체 속성 변경 방지', () => {
    // 속성 변경 시도
    expect(() => (obj.prop1 = 'new value')).toThrow();
    expect(() => obj.prop2 = 'new value').toThrow();

    // 변경이 일어나지 않았는지 확인
    expect(obj.prop1).toEqual({ subprop1: 'value1', subprop2: [1, 2, 3] });
    expect(obj.prop2).toBe('value2');
  });
});
