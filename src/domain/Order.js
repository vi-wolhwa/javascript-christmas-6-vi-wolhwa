import { ORDER_SHEET } from '../constant/template/OrderSheet.js';
import DeepCopy from './../util/DeepCopy.js';

class Order {
	/** @type {ORDER_SHEET} */
	#orderSheet = DeepCopy(ORDER_SHEET);

	/**
	 * 주문서(orderSheet)에 데이터를 작성한다.
	 * @param {string} key
	 * @param {*} value
	 */
	writeOrderSheet(key, value) {
		//TODO: try-catch
		this.#orderSheet[key] = value;
	}
}

export default Order;
