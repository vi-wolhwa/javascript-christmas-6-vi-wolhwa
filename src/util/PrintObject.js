function PrintObject(obj, depth = 0) {
	const indent = '    '.repeat(depth);

	if (Array.isArray(obj)) {
		console.log(indent + '[');
		for (let i = 0; i < obj.length; i++) {
			PrintObject(obj[i], depth + 1);
		}
		console.log(indent + ']');
	} else if (typeof obj === 'object' && obj !== null) {
		console.log(indent + '{');
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				console.log(indent + `    ${key}:`);
				PrintObject(obj[key], depth + 2);
			}
		}
		console.log(indent + '}');
	} else {
		console.log(indent + obj);
	}
}

export default PrintObject;
