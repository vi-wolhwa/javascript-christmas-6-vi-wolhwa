/**
 * [date.days_of_week]
 * 개발 중 사용할 가능성이 있는 Date 객체의 정의에 따랐다.
 */

import DeepFreeze from '../util/DeepFreeze.js';

const OPTIONS = DeepFreeze({
	menu: {
		category: {
			appetizer: '애피타이저',
			main: '메인',
			dessert: '디저트',
			beverage: '음료'
		}
	},

	date: {
		year: 2023,
		month: 12,
		first_date: 1,
		last_date: 31,
		days_of_week: {
			0: '일요일',
			1: '월요일',
			2: '화요일',
			3: '수요일',
			4: '목요일',
			5: '금요일',
			6: '토요일'
		}
	}
});

export default OPTIONS;
