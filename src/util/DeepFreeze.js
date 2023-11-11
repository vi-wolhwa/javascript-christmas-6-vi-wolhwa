function deepFreeze(obj) {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });

  return obj;
}

export { deepFreeze };
