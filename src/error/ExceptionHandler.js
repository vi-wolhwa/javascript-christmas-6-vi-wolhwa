import { Console } from '@woowacourse/mission-utils';

/**
 * 예외 처리를 담당하는 모듈
 * @module ExceptionHandler
 */
const ExceptionHandler = {
	/**
	 * @method handleSyncExceptionAndExit
	 * @description 동기 함수에 대하여 예외메시지를 출력하고 프로그램을 종료하는 함수
	 * @param {Function} func - 예외를 처리할 동기 함수
	 */
	handleSyncExceptionAndExit: (func) => {
		try {
			return func();
		} catch (error) {
			Console.print(error.message);
			throw error;
		}
	},

	/**
	 * @method handleAsyncExceptionAndExit
	 * @description 비동기 함수에 대하여 예외 발생 시 예외메시지를 출력하고 프로그램을 종료하는 함수
	 * @param {Function} asyncFunc - 예외를 처리할 비동기 함수
	 */
	handleAsyncExceptionAndExit: async (asyncFunc) => {
		try {
			return await asyncFunc();
		} catch (error) {
			Console.print(error.message);
			throw error;
		}
	},

	/**
	 * @method handleSyncExceptionAndRetry
	 * @description 동기 함수에 대하여 예외메시지를 출력하고 함수를 재실행하는 함수
	 * @param {Function} func - 예외를 처리할 동기 함수
	 * @param {number} [maxRetries=Infinity] - 최대 재시도 횟수
	 */
	handleSyncExceptionAndRetry: (func, maxRetries = Infinity) => {
		let retries = 0;
		while (retries <= maxRetries) {
			try {
				return func();
			} catch (error) {
				Console.print(error.message);
				retries++;
			}
		}
	},

	/**
	 * @method handleAsyncExceptionAndRetry
	 * @description 비동기 함수에 대하여 예외 발생 시 예외메시지를 출력하고 함수를 재실행하는 함수
	 * @param {Function} asyncFunc - 예외를 처리할 비동기 함수
	 * @param {number} [maxRetries=Infinity] - 최대 재시도 횟수
	 */
	handleAsyncExceptionAndRetry: async (asyncFunc, maxRetries = Infinity) => {
		let retries = 0;
		while (retries <= maxRetries) {
			try {
				return await asyncFunc();
			} catch (error) {
				Console.print(error.message);
				retries++;
			}
		}
	}
};

export default ExceptionHandler;
