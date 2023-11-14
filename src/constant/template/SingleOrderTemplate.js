import DeepFreeze from '../../util/DeepFreeze';

const MENU = (name, count) => {
	return DeepFreeze({
		name: name,
		count: count
	});
};

export default MENU;
