import { OPTIONS } from "../Options.js";
import { deepFreeze } from "../../util/DeepFreeze.js";

const category = OPTIONS.menu.category;

const MENU_DATA = deepFreeze({

  // 애피타이저
  양송이수프: { name: '양송이수프', category: category.appetizer, price: 6000 },
  타파스: { name: '타파스', category: category.appetizer, price: 5500 },
  시저샐러드: { name: '시저샐러드', category: category.appetizer, price: 8000 },

  // 메인
  티본스테이크: { name: '티본스테이크', category: category.main, price: 55000 },
  바비큐립: { name: '바비큐립', category: category.main, price: 54000 },
  해산물파스타: { name: '해산물파스타', category: category.main, price: 35000 },
  크리스마스파스타: { name: '크리스마스파스타', category: category.main, price: 25000 },

  // 디저트
  초코케이크: { name: '초코케이크', category: category.dessert, price: 15000 },
  아이스크림: { name: '아이스크림', category: category.dessert, price: 5000 },

  // 음료
  제로콜라: { name: '제로콜라', category: category.beverage, price: 3000 },
  레드와인: { name: '레드와인', category: category.beverage, price: 60000 },
  샴페인: { name: '샴페인', category: category.beverage, price: 25000 },
});

export { MENU_DATA };