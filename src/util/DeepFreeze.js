const DeepFreeze = (obj) => {
	Object.freeze(obj);

	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			DeepFreeze(obj[key]);
		}
	});

	return obj;
};

export default DeepFreeze;
