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

  event: {
    type: {
      discount: '할인',
      giveaway: '증정'
    },

  },

  date: {
    year: 2023,
    month: 12,
    first_date: 1,
    last_date: 31,
    days_of_week: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
  }
});

export { OPTIONS };
