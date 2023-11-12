import { deepFreeze } from "../util/DeepFreeze.js";

const OPTIONS = deepFreeze({
  menu: {
    category: {
      appetizer: '애피타이저',
      main: '메인',
      dessert: '디저트',
      beverage: '음료',
    }
  },
  date: {
    year: 2023,
    month: 12,
    firstDate: 1,
    lastDate: 31,
    anniversary: { christmas: 25 },
  }
});

export { OPTIONS };
