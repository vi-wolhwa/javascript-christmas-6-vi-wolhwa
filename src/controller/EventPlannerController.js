import Order from '../domain/Order.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import SIGNS from '../constant/string/Signs.js';
import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheetTemplate.js';
import { MENU } from '../constant/template/Templates.js';
import Events from './../domain/Events.js';
import ExceptionHandler from './../error/ExceptionHandler.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
	#order = new Order();
	#events = new Events();

	// 이벤트 플래너 프로그램을 실행한다.
	async run() {
		this.#displayIntroduce();
		const { visitDay, menuOrders } = await this.#handleUserInput();
		this.#updateOrderSheet({ [KEY.visitDay]: visitDay, [KEY.menuOrders]: menuOrders });
		this.#lookupEventBenefits();
		this.#displayLookupResult();
	}

	#updateOrderSheet(updatedItems) {
		this.#order.updateOrderSheet(updatedItems);
	}

	// Introduce 메시지를 출력한다.
	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	/**
	 * 방문날짜, 메뉴주문목록에 대한 입력을 처리하고, 결과를 반환한다.
	 * @returns {object} { visitDay: 방문날짜, menuOrders: 주문메뉴목록 }
	 */
	async #handleUserInput() {
		const visitDay = await ExceptionHandler.retryAsyncWithErrorLogging(() => this.#handleVisitDayInput());
		const menuOrders = await ExceptionHandler.retryAsyncWithErrorLogging(() => this.#handleMenuOrdersInput());
		return { visitDay, menuOrders };
	}

	/**
	 * 방문날짜에 대한 입력과 전처리를 담당한다.
	 * @returns {number} 방문날짜
	 */
	async #handleVisitDayInput() {
		return this.#preprocessVisitDay(await InputView.readVisitDay());
	}

	/**
	 * 메뉴주문목록에 대한 입력과 전처리를 담당한다.
	 * @returns {Array<object>} 메뉴주문목록 {메뉴명, 개수}
	 */
	async #handleMenuOrdersInput() {
		return this.#preprocessMenuOrders(await InputView.readMenuOrders());
	}

	/**
	 * 사용자가 입력한 방문날짜에 대한 전처리를 수행한다.
	 * @param {Promise<string>} visitDay - 방문날짜(UserInput)
	 * @returns {number} 방문날짜(Processed)
	 */
	#preprocessVisitDay(visitDay) {
		Validator.validateVisitDay(visitDay.trim());
		return parseInt(visitDay.trim(), 10);
	}

	/**
	 * 사용자가 입력한 메뉴 주문 목록에 대한 전처리를 수행한다.
	 * @param {Promise<string>} menuOrders - 메뉴주문목록(UserInput)
	 * @returns {Array<object>} 메뉴주문목록 {메뉴명, 개수}
	 */
	#preprocessMenuOrders(menuOrders) {
		const preprocessMenu = (menu) => {
			const [name, count] = menu.split(SIGNS.hyphen);
			return MENU(name.replace(SIGNS.space, SIGNS.empty), parseInt(count, 10));
		};

		const newMenuOrders = menuOrders
			.split(SIGNS.comma)
			.map((menu) => menu.trim())
			.filter((menu) => menu !== SIGNS.empty)
			.map(preprocessMenu);

		Validator.validateMenuOrders(newMenuOrders);
		return newMenuOrders;
	}

	/**
	 * 가능한 이벤트 혜택을 조회하고, 주문서에 내용을 추가한다.
	 * @param {number} visitDay
	 * @param {object} menuOrders
	 */
	#lookupEventBenefits() {
		const orderSheet = this.#order.getOrderSheetReadOnly();
		const benefits = this.#events.lookupAvailableBenefits(orderSheet);
		this.#order.updateOrderSheet({ [KEY.available_events]: benefits });
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
	 * 이벤트 조회 결과의 머리말을 출력하는 함수
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

	#displayOrderMenus(orderSheet) {
		OutputView.printOrderMenus(orderSheet.menuOrders);
	}

	#displayTotalPrice(orderSheet) {
		OutputView.printTotalPrice(orderSheet.total_price);
	}

	#displayGiveaways(orderSheet) {
		const giveaways = orderSheet.available_events.flatMap((event) => event.giveaways);
		OutputView.printGiveaways(giveaways);
	}

	#displayBenefitDetails(orderSheet) {
		const benefitDetails = orderSheet.available_events.map((event) => ({
			name: event.name,
			amount: event.giveaways.reduce((total, giveaway) => total + giveaway.menu.price, 0) + event.discount
		}));
		OutputView.printBenefitDetails(benefitDetails);
	}

	#displayTotalBenefitAmount(orderSheet) {
		OutputView.printTotalBenefitsAmount(orderSheet.total_benefits);
	}

	#displayDiscountedPrice(orderSheet) {
		OutputView.printDiscountedPrice(orderSheet.discounted_price);
	}

	#displayEventBadge(orderSheet) {
		OutputView.printEventBadge(orderSheet.event_badge);
	}
}

export default EventPlannerController;
