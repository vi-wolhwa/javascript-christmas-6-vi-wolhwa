import DeepEqualityCheck from '../../src/util/DeepEqualityCheck';

describe('DeepEqualityCheck 모듈 테스트', () => {
	test('두 객체가 동일한 경우 true 반환 테스트', () => {
		const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
		const obj2 = { a: 1, b: 2, c: { d: 3, e: 4 } };
		expect(DeepEqualityCheck(obj1, obj2)).toBe(true);
	});

	test('두 객체가 다른 경우 false 반환 테스트', () => {
		const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
		const obj2 = { a: 1, b: 2, c: { d: 3, e: 5 } };
		expect(DeepEqualityCheck(obj1, obj2)).toBe(false);
	});

	test('두 배열이 동일한 경우 true 반환 테스트', () => {
		const arr1 = [1, 2, [3, 4]];
		const arr2 = [1, 2, [3, 4]];
		expect(DeepEqualityCheck(arr1, arr2)).toBe(true);
	});

	test('두 배열이 다른 경우 false 반환 테스트', () => {
		const arr1 = [1, 2, [3, 4]];
		const arr2 = [1, 2, [3, 5]];
		expect(DeepEqualityCheck(arr1, arr2)).toBe(false);
	});
});
