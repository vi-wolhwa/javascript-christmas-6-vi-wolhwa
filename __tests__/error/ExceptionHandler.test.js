import ExceptionHandler from '../../src/error/ExceptionHandler.js';

describe('ExceptionHandler 모듈 테스트', () => {
	test('동기 함수 예외 처리 및 종료 테스트', () => {
		const errorFunc = () => {
			throw new Error('Test Error');
		};
		let errorOccurred = false;
		try {
			ExceptionHandler.handleSyncExceptionAndExit(errorFunc);
		} catch (e) {
			errorOccurred = true;
		}
		expect(errorOccurred).toBe(true);
	});

	test('비동기 함수 예외 처리 및 종료 테스트', async () => {
		const errorAsyncFunc = async () => {
			throw new Error('Test Error');
		};
		let errorOccurred = false;
		try {
			await ExceptionHandler.handleAsyncExceptionAndExit(errorAsyncFunc);
		} catch (e) {
			errorOccurred = true;
		}
		expect(errorOccurred).toBe(true);
	});

	test('동기 함수 예외 처리 및 재시도 테스트', () => {
		let counter = 0;
		const errorFunc = () => {
			counter++;
			if (counter < 3) throw new Error('Test Error');
		};
		ExceptionHandler.handleSyncExceptionAndRetry(errorFunc, 3);
		expect(counter).toBe(3);
	});

	test('비동기 함수 예외 처리 및 재시도 테스트', async () => {
		let counter = 0;
		const errorAsyncFunc = async () => {
			counter++;
			if (counter < 3) throw new Error('Test Error');
		};
		await ExceptionHandler.handleAsyncExceptionAndRetry(errorAsyncFunc, 3);
		expect(counter).toBe(3);
	});
});
