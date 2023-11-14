import Order from '../domain/Order.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import EventPlannerValidator from '../validation/EventPlannerValidator.js';
import SIGNS from '../constant/string/Signs.js';
import { ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheetTemplate.js';
import { MENU } from '../constant/template/Templates.js';

const Validator = EventPlannerValidator;

class EventPlannerController {
	/** @type {Order} */
	#order = new Order();
	#events = new Events();

	// 이벤트 플래너 프로그램을 실행한다.
	async run() {
		this.#displayIntroduce();
		await this.#handleUserInput();
		this.#processEventBenefits();
		this.#displayResultHeader();
		this.#displayResultInOrder();
	}

	// Introduce 메시지를 출력한다.
	#displayIntroduce() {
		OutputView.printIntroduce();
	}

	// 사용자 입력을 처리하고, 주문서(OrderSheet)를 작성한다.
	async #handleUserInput() {
		const date = await this.#handleDateInput();
		const order = await this.#handleOrderInput();
		this.#order.writeOrderSheet(KEY.date, date);
		this.#order.writeOrderSheet(KEY.order, order);
	}

	/**
	 * 방문날짜(Date)에 대한 처리를 담당한다.
	 * @returns {number} 방문 날짜
	 */
	async #handleDateInput() {
		return this.#preprocessDate(InputView.readDate());
	}

	/**
	 * 주문메뉴(Order)에 대한 처리를 담당한다.
	 * @returns {Array<object>} 주문 메뉴 목록 {메뉴명, 개수}
	 */
	async #handleOrderInput() {
		return this.#preprocessOrder(InputView.readOrder());
	}

	/**
	 * 방문날짜(Date)에 대한 전처리를 수행한다.
	 * @param {Promise<string>} rawDate 방문날짜(UserInput)
	 * @returns {number} 방문 날짜
	 */
	#preprocessDate(rawDate) {
		const newDate = rawDate.trim();
		Validator.validateDate(rawDate);
		return parseInt(newDate, 10);
	}

	/**
	 * 주문메뉴(Order)에 대한 전처리를 수행한다.
	 * @param {Promise<string>} rawOrder 주문(UserInput)
	 * @returns {Array<object>} 주문 메뉴 목록 {메뉴명, 개수}
	 */
	#preprocessOrder(rawOrder) {
		const newOrder = rawOrder
			.split(SIGNS.comma)
			.map((menu) => menu.trim())
			.filter((menu) => menu !== SIGNS.empty)
			.map((menu) => {
				const [name, count] = menu.split(SIGNS.hyphen);
				name = name.replace(SIGNS.space, SIGNS.empty);
				return MENU(name, parseInt(count, 10));
			});
		Validator.validateOrder(newOrder);
		return newOrder;
	}

	// 가능한 이벤트 혜택을 조회하고, 주문서(OrderSheet)에 내용을 추가한다.
	#processEventBenefits() {
		const orderSheet = this.#order.getOrderSheet();
		const benefits = this.#events.lookupAvailableBenefits(orderSheet);
		this.#order.writeOrderSheet(KEY.available_events, benefits);
	}

	#displayResultHeader() {
		OutputView.printResultHeader();
	}

	#displayResultInOrder() {
		this.#displayOrderMenus();
		this.#displayTotalPrice();
		this.#displayGiveaways();
		this.#displayBenefitDetails();
		this.#displayTotalBenefitAmount();
		this.#displayDiscountedPrice();
		this.#displayEventBadge();
	}

	#displayOrderMenus() {
		const orderMenus = this.#order.readOrderSheet(KEY.order);
		OutputView.printOrderMenus(orderMenus);
	}

	#displayTotalPrice() {
		const totalPrice = this.#order.readOrderSheet(KEY.total_price);
		OutputView.printTotalPrice(totalPrice);
	}

	#displayGiveaways() {
		const giveaways = this.#order.readOrderSheet(KEY.available_events).reduce((giveaways, event) => {
			return giveaways.concat(event.giveaways);
		}, []);
		OutputView.printGiveaways(giveaways);
	}

	#displayBenefitDetails() {
		const benefitDetails = this.#order.readOrderSheet(KEY.available_events).map((event) => {
			const amount = event.giveaways.reduce((total, giveaway) => total + giveaway.menu.price, event.discount);
			return { name: event.name, amount: amount };
		});
		OutputView.printBenefitDetails(benefitDetails);
	}

	#displayTotalBenefitAmount() {
		const totalBenefitAmount = this.#order.readOrderSheet(KEY.total_benefits);
		OutputView.printTotalBenefitsAmount(totalBenefitAmount);
	}

	#displayDiscountedPrice() {
		const discountedPrice = this.#order.readOrderSheet(KEY.discounted_price);
		OutputView.printDiscountedPrice(discountedPrice);
	}

	#displayEventBadge() {
		const eventBadge = this.#order.readOrderSheet(KEY.event_badge);
		OutputView.printEventBadge(eventBadge);
	}
}

export default EventPlannerController;
