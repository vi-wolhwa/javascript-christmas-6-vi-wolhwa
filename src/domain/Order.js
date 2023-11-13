import { OrderSheet, OrderSheetKeys as Keys } from '../constant/template/OrderSheet.js';
import DeepCopy from './../util/DeepCopy.js';

class Order {
	/** @type {OrderSheet} */
	#orderSheet = DeepCopy(OrderSheet);
}

export default Order;
