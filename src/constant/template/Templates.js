import DeepFreeze from '../../util/DeepFreeze';

const MENU = (name, count) => {
	return DeepFreeze({
		name: name,
		count: count
	});
};

const BENEFIT = (name, discount, giveaways) => {
	return DeepFreeze({
		name: name,
		discount: discount,
		giveaways: giveaways
	});
};

export { MENU, BENEFIT };
