import { ORDER_SHEET, ORDER_SHEET_KEYS as KEY } from '../constant/template/OrderSheetTemplate.js';
import { MENU_OPTIONS, DATE_OPTIONS } from '../constant/Options.js';
import MENU_DATA from '../constant/data/MenuData.js';
import DeepCopy from './../util/DeepCopy.js';
import GetDayOfWeek from './../util/GetDayOfWeek.js';
import getEventBadge from '../constant/EventBadges.js';

class Order {
	/** @type {ORDER_SHEET} */
	#orderSheet = DeepCopy(ORDER_SHEET);

	#autoUpdateByKey = {
		[KEY.visitDay]: (visitDay) => this.#calculateDayOfWeek(visitDay),
		[KEY.menuOrders]: (menuOrders) => {
			return Object.assign(this.#calculateTotalPrice(menuOrders), this.#calculateOrderCount(menuOrders));
		},
		[KEY.available_events]: (availableEvents) => this.#calculateTotalDiscount(availableEvents),
		[KEY.total_discount]: (totalDiscount) => {
			return Object.assign(this.#calculateTotalBenefits(totalDiscount), this.#calculateDiscountedPrice(totalDiscount));
		},
		[KEY.total_benefits]: (totalBenefits) => this.#calculateEventBadge(totalBenefits)
	};

	/**
	 * 변경사항을 주문서에 반영하는 함수
	 * @param {object} updatedItems - 주문서 변경사항
	 */
	updateOrderSheet(updatedItems) {
		this.#orderSheet = Object.assign(this.#orderSheet, updatedItems);
		this.#autoUpdateOrderSheet(updatedItems);
	}

	/**
	 * 업데이트된 주문서에서 추가로 계산 가능한 항목을 자동으로 업데이트 하는 함수
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
	 * 방문 날짜에 해당하는 요일을 계산하고, 주문서에 작성한다.
	 */
	#calculateDayOfWeek(visitDay) {
		const dayOfWeek = GetDayOfWeek(DATE_OPTIONS.year, DATE_OPTIONS.month, visitDay);
		return { [KEY.day_of_week]: dayOfWeek };
	}

	/**
	 * 주문에 대한 총 주문금액을 계산하고, 주문서에 작성한다.
	 */
	#calculateTotalPrice(menuOrders) {
		const totalPrice = menuOrders.reduce((totalPrice, menu) => {
			return totalPrice + MENU_DATA[menu.name].price * menu.count;
		}, 0);
		return { [KEY.total_price]: totalPrice };
	}

	/**
	 * 주문에 대해 메뉴 카테고리 별 주문 수량을 계산하고, 주문서에 작성한다.
	 */
	#calculateOrderCount(menuOrders) {
		const orderCount = {
			[MENU_OPTIONS.category.appetizer]: 0,
			[MENU_OPTIONS.category.main]: 0,
			[MENU_OPTIONS.category.dessert]: 0,
			[MENU_OPTIONS.category.beverage]: 0
		};
		menuOrders.reduce((orderCount, { name, count }) => {
			orderCount[MENU_DATA[name].category] += count;
			return orderCount;
		}, orderCount);
		return { [KEY.order_count]: orderCount };
	}

	/**
	 * 총 할인 금액을 계산하고, 주문서에 작성한다.
	 */
	#calculateTotalDiscount(availablEvents) {
		const totalDiscount = availablEvents.reduce((totalDiscount, event) => {
			return totalDiscount + event.discount;
		}, 0);
		return { [KEY.total_discount]: totalDiscount };
	}

	/**
	 * 총 혜택 금액을 계산하고, 주문서에 작성한다.
	 */
	#calculateTotalBenefits(totalDiscount) {
		const events = this.#orderSheet.available_events;
		const totalBenefits = events.reduce((total, event) => {
			const total_giveaway = event.giveaways.reduce((total, giveaway) => total + giveaway.menu.price, 0);
			return total + total_giveaway;
		}, totalDiscount);
		return { [KEY.total_benefits]: totalBenefits };
	}

	/**
	 * 최종 결제 금액을 계산하고, 주문서에 작성한다.
	 */
	#calculateDiscountedPrice(totalDiscount) {
		const discountedPrice = this.#orderSheet.total_price - totalDiscount;
		return { [KEY.discounted_price]: discountedPrice };
	}

	#calculateEventBadge(totalBenefits) {
		const eventBadge = getEventBadge(totalBenefits);
		return { [KEY.event_badge]: eventBadge };
	}

	/**
	 * 주문서를 ReadOnly로 반환한다.
	 * @returns {ORDER_SHEET} 주문서(OrderSheet) 객체
	 */
	getOrderSheetReadOnly() {
		return Object.freeze(DeepCopy(this.#orderSheet));
	}
}

export default Order;
