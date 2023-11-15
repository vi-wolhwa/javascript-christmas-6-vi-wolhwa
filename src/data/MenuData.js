import { MENU_OPTIONS } from '../constant/Options.js';

const freeze = Object.freeze;
const category = MENU_OPTIONS.category;

// const MENU_DATA = freeze({
// 	양송이수프: freeze({ name: '양송이수프', category: category.appetizer, price: 6000 }),
// 	타파스: freeze({ name: '타파스', category: category.appetizer, price: 5500 }),
// 	시저샐러드: freeze({ name: '시저샐러드', category: category.appetizer, price: 8000 }),

// 	티본스테이크: freeze({ name: '티본스테이크', category: category.main, price: 55000 }),
// 	바비큐립: freeze({ name: '바비큐립', category: category.main, price: 54000 }),
// 	해산물파스타: freeze({ name: '해산물파스타', category: category.main, price: 35000 }),
// 	크리스마스파스타: freeze({ name: '크리스마스파스타', category: category.main, price: 25000 }),

// 	초코케이크: freeze({ name: '초코케이크', category: category.dessert, price: 15000 }),
// 	아이스크림: freeze({ name: '아이스크림', category: category.dessert, price: 5000 }),

// 	제로콜라: freeze({ name: '제로콜라', category: category.beverage, price: 3000 }),
// 	레드와인: freeze({ name: '레드와인', category: category.beverage, price: 60000 }),
// 	샴페인: freeze({ name: '샴페인', category: category.beverage, price: 25000 })
// });

const MENU_DATA = freeze({
	0: freeze({ id: 0, name: '양송이수프', category: category.appetizer, price: 6000 }),
	1: freeze({ id: 1, name: '타파스', category: category.appetizer, price: 5500 }),
	2: freeze({ id: 2, name: '시저샐러드', category: category.appetizer, price: 8000 }),

	3: freeze({ id: 3, name: '티본스테이크', category: category.main, price: 55000 }),
	4: freeze({ id: 4, name: '바비큐립', category: category.main, price: 54000 }),
	5: freeze({ id: 5, name: '해산물파스타', category: category.main, price: 35000 }),
	6: freeze({ id: 6, name: '크리스마스파스타', category: category.main, price: 25000 }),

	7: freeze({ id: 7, name: '초코케이크', category: category.dessert, price: 15000 }),
	8: freeze({ id: 8, name: '아이스크림', category: category.dessert, price: 5000 }),

	9: freeze({ id: 9, name: '제로콜라', category: category.beverage, price: 3000 }),
	10: freeze({ id: 10, name: '레드와인', category: category.beverage, price: 60000 }),
	11: freeze({ id: 11, name: '샴페인', category: category.beverage, price: 25000 })
});

export default MENU_DATA;
