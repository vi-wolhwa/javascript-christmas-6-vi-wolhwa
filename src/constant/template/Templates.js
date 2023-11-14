import DeepFreeze from '../../util/DeepFreeze';

const MENU = (name, count) => {
	return DeepFreeze({
		name: name,
		count: count
	});
};

const BENEFIT = (name, discount, giveways) => {
	return DeepFreeze({
		name: name,
		discount: discount,
		giveways: giveways
	});
};

export { MENU, BENEFIT };
