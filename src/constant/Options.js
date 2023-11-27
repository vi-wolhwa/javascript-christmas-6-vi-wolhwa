const freeze = Object.freeze;

const ORDER_OPTIONS = freeze({
	order_count_max: 20
});

const MENU_OPTIONS = freeze({
	category: freeze({
		appetizer: '애피타이저',
		main: '메인',
		dessert: '디저트',
		beverage: '음료'
	})
});

const DATE_OPTIONS = freeze({
	year: 2023,
	month: 12,
	first_date: 1,
	last_date: 31,
	days_of_week: freeze({
		0: '일요일',
		1: '월요일',
		2: '화요일',
		3: '수요일',
		4: '목요일',
		5: '금요일',
		6: '토요일'
	})
});

const EVENT_OPTIONS = freeze({
	christmas: 25,
	starDays: [3, 10, 17, 24, 25, 31],
	weekday: Object.values(DATE_OPTIONS.days_of_week).splice(0, 5),
	weekend: Object.values(DATE_OPTIONS.days_of_week).splice(5, 7)
});

export { ORDER_OPTIONS, MENU_OPTIONS, DATE_OPTIONS, EVENT_OPTIONS };
