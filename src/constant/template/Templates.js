const MENU_ORDER = (name, count) => {
	return Object.freeze({
		name: name,
		count: count
	});
};

const EVENT_BENEFIT = (name, discount, giveaways) => {
	return Object.freeze({
		name: name,
		discount: discount,
		giveaways: giveaways
	});
};

export { MENU_ORDER, EVENT_BENEFIT };
