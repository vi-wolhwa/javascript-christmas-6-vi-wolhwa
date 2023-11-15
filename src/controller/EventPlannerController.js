import SIGNS from '../constant/string/Signs.js';
import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheet.js';
import Order from '../domain/Order.js';
import Events from '../domain/Events.js';
import ExceptionHandler from '../error/ExceptionHandler.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
	#order = new Order();
	#events = new Events();

	// 이벤트플래너 프로그램을 실행하는 함수
	async run() {
		this.#displayIntroduce();
		const { visitDay, menuOrders } = await this.#handleUserInput();
		this.#updateOrderSheet({ [KEY.visitDay]: visitDay, [KEY.menuOrders]: menuOrders });
		const availableEvents = this.#lookupAvailableEvents();
		this.#updateOrderSheet({ [KEY.available_events]: availableEvents });
		this.#displayLookupResult();
	}

	/**
	 * 주문서를 업데이트하는 함수
	 * @param {Array<object>} updatedItems - 업데이트 항목
	 */
	#updateOrderSheet(updatedItems) {
		this.#order.updateOrderSheet(updatedItems);
	}

	/**
	 * Introduce 메시지를 출력하는 함수
	 */
	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	/**
	 * 방문날짜, 메뉴주문에 대한 입력을 처리하고, 결과를 반환하는 함수
	 * @returns {object} { visitDay: 방문날짜, menuOrders: 주문메뉴 리스트 }
	 */
	async #handleUserInput() {
		const visitDay = await ExceptionHandler.retryAsyncWithErrorLogging(() => this.#handleVisitDayInput());
		const menuOrders = await ExceptionHandler.retryAsyncWithErrorLogging(() => this.#handleMenuOrdersInput());
		return { visitDay, menuOrders };
	}

	/**
	 * 방문날짜에 대한 입력을 처리하고 결과를 반환하는 함수
	 * @returns {number} 방문날짜
	 */
	async #handleVisitDayInput() {
		return this.#preprocessVisitDay(await InputView.readVisitDay());
	}

	/**
	 * 메뉴주문에 대한 입력을 처리하고 결과를 반환하는 함수
	 * @returns {Array<MENU>} 주문메뉴 리스트
	 */
	async #handleMenuOrdersInput() {
		return this.#preprocessMenuOrders(await InputView.readMenuOrders());
	}

	/**
	 * 방문날짜(RawData)에 대하여 전처리, 유효성검사를 수행하고 결과를 반환하는 함수
	 * @param {Promise<string>} visitDay - 방문날짜(RawData)
	 * @returns {number} 방문날짜
	 */
	#preprocessVisitDay(visitDay) {
		Validator.validateVisitDay(visitDay.trim());
		return parseInt(visitDay.trim(), 10);
	}

	/**
	 * 메뉴주문(RawData)에 대하여 전처리, 유효성검사를 수행하고 결과를 반환하는 함수
	 * @method #preprocessMenuOrders
	 * @param {Promise<string>} menuOrders - 메뉴주문(RawData)
	 * @returns {Array<MENU>} 주문 메뉴 리스트
	 */
	#preprocessMenuOrders(menuOrders) {
		const preprocessMenu = (menuOrder) => {
			const [name, count] = menuOrder.split(SIGNS.hyphen);
			return { name: name.replace(SIGNS.space, SIGNS.empty), count: parseInt(count, 10) };
		};

		const newMenuOrders = menuOrders
			.split(SIGNS.comma)
			.map((menuOrder) => menuOrder.trim())
			.filter((menuOrder) => menuOrder !== SIGNS.empty)
			.map(preprocessMenu);

		Validator.validateMenuOrders(newMenuOrders);

		return newMenuOrders;
	}

	/**
	 * 참여 가능한 이벤트들의 혜택을 조회하는 함수
	 * @returns {Array<object>} 참여 가능한 이벤트 혜택 리스트
	 */
	#lookupAvailableEvents() {
		const orderSheet = this.#order.getOrderSheetReadOnly();
		const availableEvents = this.#events.lookupAvailableEvents(orderSheet);
		return availableEvents;
	}

	/**
	 * 이벤트 조회 결과를 출력하는 함수
	 */
	#displayLookupResult() {
		const orderSheet = this.#order.getOrderSheetReadOnly();
		this.#displayResultHeader(orderSheet);
		this.#displayResultInOrder(orderSheet);
	}

	/**
	 * 이벤트 조회 결과의 머리말을 출력하는 함수입니다.
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayResultHeader(orderSheet) {
		OutputView.printResultHeader(orderSheet.visitDay);
	}

	/**
	 * 이벤트 조회 결과를 순서대로 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayResultInOrder(orderSheet) {
		this.#displayOrderMenus(orderSheet);
		this.#displayTotalPrice(orderSheet);
		this.#displayGiveaways(orderSheet);
		this.#displayBenefitDetails(orderSheet);
		this.#displayTotalBenefitAmount(orderSheet);
		this.#displayDiscountedPrice(orderSheet);
		this.#displayEventBadge(orderSheet);
	}

	/**
	 * '결과-주문 메뉴'을 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayOrderMenus(orderSheet) {
		OutputView.printOrderMenus(orderSheet.menuOrders);
	}

	/**
	 * '결과-할인 전 총주문 금액'을 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayTotalPrice(orderSheet) {
		OutputView.printTotalPrice(orderSheet.total_price);
	}

	/**
	 * '결과-증정 메뉴'를 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayGiveaways(orderSheet) {
		const giveaways = orderSheet.available_events.flatMap((event) => event.giveaways);
		OutputView.printGiveaways(giveaways);
	}

	/**
	 * '결과-혜택 내역'을 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayBenefitDetails(orderSheet) {
		const benefitDetails = orderSheet.available_events.map((event) => ({
			name: event.name,
			amount: event.giveaways.reduce((total, giveaway) => total + giveaway.menu.price, 0) + event.discount
		}));
		OutputView.printBenefitDetails(benefitDetails);
	}

	/**
	 * '결과-총혜택 금액'을 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayTotalBenefitAmount(orderSheet) {
		OutputView.printTotalBenefitsAmount(orderSheet.total_benefit_amount);
	}

	/**
	 * '결과-할인 후 예상 결제 금액'을 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayDiscountedPrice(orderSheet) {
		OutputView.printDiscountedPrice(orderSheet.discounted_price);
	}

	/**
	 * '결과-12월 이벤트 배지'를 출력하는 함수
	 * @param {ORDER_SHEET} orderSheet
	 */
	#displayEventBadge(orderSheet) {
		OutputView.printEventBadge(orderSheet.event_badge);
	}
}

export default EventPlannerController;
