import DeepFreeze from '../../util/DeepFreeze';

const Benefits = (name, discount, giveways) => {
	return DeepFreeze({
		name: name,
		discount: discount,
		giveways: giveways
	});
};

export default Benefits;
