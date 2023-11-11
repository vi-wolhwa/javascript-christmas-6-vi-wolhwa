import { deepFreeze } from "../util/DeepFreeze.js";

const OPTIONS = deepFreeze({
  date: {
    year: 2023,
    month: 12,
    firstDate: 1,
    lastDate: 31,
    anniversary: { christmas: 25 }
  }
});

export { OPTIONS };
