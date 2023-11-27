import DeepCopy from '../../src/util/DeepCopy';

describe('DeepCopy 모듈 테스트', () => {
	test('원시 타입의 값이 들어있는 경우, 동일한 값 반환', () => {
		const original = 42;
		const copied = DeepCopy(original);
		expect(copied).toBe(original);
	});

	test('객체에 대하여 깊은 복사를 수행하는지 테스트', () => {
		const original = {
			name: 'vi-wolhwa',
			age: 24,
			address: {
				city: 'New York',
				zip: '10001'
			}
		};

		const copied = DeepCopy(original);

		expect(copied).toEqual(original);
		expect(copied).not.toBe(original);
		expect(copied.address).not.toBe(original.address);
	});

	test('배열에 대하여 깊은 복사를 수행하는지 테스트', () => {
		const original = [1, 2, [3, 4]];
		const copied = DeepCopy(original);

		expect(copied).toEqual(original);
		expect(copied).not.toBe(original);
		expect(copied[2]).not.toBe(original[2]);
	});

	test('null 또는 undefined인 경우, 동일한 값 반환 테스트', () => {
		const originalNull = null;
		const copiedNull = DeepCopy(originalNull);
		expect(copiedNull).toBe(originalNull);

		const originalUndefined = undefined;
		const copiedUndefined = DeepCopy(originalUndefined);
		expect(copiedUndefined).toBe(originalUndefined);
	});
});
