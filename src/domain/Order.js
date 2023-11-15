import { MENU_OPTIONS, DATE_OPTIONS } from '../constant/Options.js';
import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheet.js';
import DeepCopy from '../util/DeepCopy.js';
import GetDayOfWeek from '../util/GetDayOfWeek.js';
import MenuManager from './MenuFinder';

class Order {
	/** @type {ORDER_SHEET} */
	#orderSheet = DeepCopy(ORDER_SHEET);

	/**
	 * 주문서 자동 업데이트 수행 조건
	 */
	#autoUpdateByKey = Object.freeze({
		[KEY.visitDay]: (visitDay) => this.#calculateDayOfWeek(visitDay),
		[KEY.menuOrders]: (menuOrders) => {
			return Object.assign(this.#calculateTotalPrice(menuOrders), this.#calculateOrderCount(menuOrders));
		},
		[KEY.available_events]: (availableEvents) => this.#calculateTotalDiscount(availableEvents),
		[KEY.total_discount]: (totalDiscount) => {
			return Object.assign(
				this.#calculateTotalBenefitAmount(totalDiscount),
				this.#calculateDiscountedPrice(totalDiscount)
			);
		}
	});

	/**
	 * 변경사항을 주문서에 반영하는 함수
	 * @param {object} updatedItems - 주문서 변경사항
	 */
	updateOrderSheet(updatedItems) {
		this.#orderSheet = Object.assign(this.#orderSheet, updatedItems);
		this.#autoUpdateOrderSheet(updatedItems);
	}

	/**
	 * 자동 업데이트 조건을 확인하고, 주문서를 업데이트 하는 함수
	 * @param {object} updatedItems - 주문서 변경사항
	 */
	#autoUpdateOrderSheet(updatedItems) {
		const newUpdatedItems = {};

		Object.keys(updatedItems).forEach((key) => {
			const autoUpdateFunc = this.#autoUpdateByKey[key]?.(this.#orderSheet[key]);

			if (autoUpdateFunc) {
				Object.assign(newUpdatedItems, autoUpdateFunc);
			}
		});

		if (Object.keys(newUpdatedItems).length > 0) {
			this.updateOrderSheet(newUpdatedItems);
		}
	}

	/**
	 * 방문 날짜로부터 요일을 계산하여 주문서 Key로 반환하는 함수
	 * @param {number} visitDay - 방문 날짜
	 * @returns {object} { day_of_week: 요일 }
	 */
	#calculateDayOfWeek(visitDay) {
		const dayOfWeek = GetDayOfWeek(DATE_OPTIONS.year, DATE_OPTIONS.month, visitDay);
		return { [KEY.day_of_week]: dayOfWeek };
	}

	/**
	 * 메뉴주문목록으로부터 총 가격을 계산하여 주문서 Key 반환하는 함수
	 * @param {Array<object>} menuOrders - 메뉴주문목록
	 * @returns {object} { total_price: 총 가격 }
	 */
	#calculateTotalPrice(menuOrders) {
		const totalPrice = menuOrders.reduce((totalPrice, menu) => {
			return totalPrice + MenuManager.findPrice(menu.name) * menu.count;
		}, 0);
		return { [KEY.total_price]: totalPrice };
	}

	/**
	 * '메뉴주문목록'으로부터 '주문 수량'을 계산하여 주문서 Key로 반환하는 함수
	 * @param {Array<object>} menuOrders - 메뉴주문목록
	 * @returns {object} { order_count: 주문 수량 객체 }
	 */
	#calculateOrderCount(menuOrders) {
		const orderCount = {
			[MENU_OPTIONS.category.appetizer]: 0,
			[MENU_OPTIONS.category.main]: 0,
			[MENU_OPTIONS.category.dessert]: 0,
			[MENU_OPTIONS.category.beverage]: 0
		};
		menuOrders.reduce((orderCount, { name, count }) => {
			orderCount[MenuManager.findCategory(name)] += count;
			return orderCount;
		}, orderCount);
		return { [KEY.order_count]: orderCount };
	}

	/**
	 * '참여 대상 이벤트'로부터 '총 할인 금액'을 계산하여 주문서 Key로 반환하는 함수
	 * @param {Array<object>} availablEvents - 참여 대상 이벤트
	 * @returns {object} { total_discount: 총 할인 금액 }
	 */
	#calculateTotalDiscount(availablEvents) {
		const totalDiscount = availablEvents.reduce((totalDiscount, event) => {
			return totalDiscount + event.discount;
		}, 0);
		return { [KEY.total_discount]: totalDiscount };
	}

	/**
	 * '총 할인 금액'으로부터 '총 혜택 금액'을 계산하여 주문서 Key로 반환하는 함수
	 * @param {number} totalDiscount - 총 할인 금액
	 * @returns {object} { total_benefit_amount: 총 혜택 금액 }
	 */
	#calculateTotalBenefitAmount(totalDiscount) {
		const events = this.#orderSheet.available_events;
		const totalBenefitAmount = events.reduce((total, event) => {
			const total_giveaway = event.giveaways.reduce(
				(total, giveaway) => total + MenuManager.findPrice(giveaway.name),
				0
			);
			return total + total_giveaway;
		}, totalDiscount);
		return { [KEY.total_benefit_amount]: totalBenefitAmount };
	}

	/**
	 * '총 할인 금액'으로부터  '할인된 가격'을 계산하여 주문서 Key로 반환하는 함수
	 * @param {number} totalDiscount - 총 할인 금액
	 * @returns {object} { discounted_price: 할인된 가격 }
	 */
	#calculateDiscountedPrice(totalDiscount) {
		const discountedPrice = this.#orderSheet.total_price - totalDiscount;
		return { [KEY.discounted_price]: discountedPrice };
	}

	/**
	 * 주문서를 읽기 전용으로 반환하는 함수
	 * @returns {ORDER_SHEET} 주문서(OrderSheet) 객체
	 */
	getOrderSheetReadOnly() {
		return Object.freeze(DeepCopy(this.#orderSheet));
	}
}

export default Order;
