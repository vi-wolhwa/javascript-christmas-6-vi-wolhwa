const DeepCopy = (obj) => {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}

	return Array.isArray(obj)
		? obj.map(DeepCopy)
		: Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, DeepCopy(value)]));
};

export default DeepCopy;
