import { MENU_OPTIONS } from '../Options.js';

const freeze = Object.freeze;
const category = MENU_OPTIONS.category;

const MENU_DATA = freeze({
	양송이수프: freeze({ name: '양송이수프', category: category.appetizer, price: 6000 }),
	타파스: freeze({ name: '타파스', category: category.appetizer, price: 5500 }),
	시저샐러드: freeze({ name: '시저샐러드', category: category.appetizer, price: 8000 }),

	티본스테이크: freeze({ name: '티본스테이크', category: category.main, price: 55000 }),
	바비큐립: freeze({ name: '바비큐립', category: category.main, price: 54000 }),
	해산물파스타: freeze({ name: '해산물파스타', category: category.main, price: 35000 }),
	크리스마스파스타: freeze({ name: '크리스마스파스타', category: category.main, price: 25000 }),

	초코케이크: freeze({ name: '초코케이크', category: category.dessert, price: 15000 }),
	아이스크림: freeze({ name: '아이스크림', category: category.dessert, price: 5000 }),

	제로콜라: freeze({ name: '제로콜라', category: category.beverage, price: 3000 }),
	레드와인: freeze({ name: '레드와인', category: category.beverage, price: 60000 }),
	샴페인: freeze({ name: '샴페인', category: category.beverage, price: 25000 })
});

export default MENU_DATA;
