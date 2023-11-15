// MenuManager.js
import MENU_DATA from '../data/MenuData';

const MenuManager = {
	/**
	 * 주어진 id 또는 이름이 데이터베이스에 존재하는지 여부를 반환하는 함수
	 * @param {number|string} identifier - 찾을 메뉴의 id 또는 이름
	 * @returns {boolean} - 데이터베이스에 존재하는 경우 true, 존재하지 않는 경우 false를 반환
	 */
	isMenuExist: function (identifier) {
		const menu = Object.values(MENU_DATA).find((menu) => menu.id === identifier || menu.name === identifier);
		return !!menu;
	},

	/**
	 * 주어진 id에 해당하는 메뉴의 이름을 찾아 반환하는 함수
	 * @param {number} id - 찾을 메뉴의 id
	 * @returns {string|null} - 메뉴의 이름. 주어진 id에 해당하는 메뉴가 없을 경우 null을 반환
	 */
	findNameById: function (id) {
		const menu = Object.values(MENU_DATA).find((menu) => menu.id === id);
		return menu ? menu.name : null;
	},

	/**
	 * 주어진 이름에 해당하는 메뉴의 id를 찾아 반환하는 함수
	 * @param {string} name - 찾을 메뉴의 이름
	 * @returns {number|null} - 메뉴의 id. 주어진 이름에 해당하는 메뉴가 없을 경우 null을 반환
	 */
	findIdByName: function (name) {
		const menu = Object.values(MENU_DATA).find((menu) => menu.name === name);
		return menu ? menu.id : null;
	},

	/**
	 * 주어진 id 또는 이름에 해당하는 메뉴의 가격을 찾아 반환하는 함수
	 * @param {number|string} identifier - 찾을 메뉴의 id 또는 이름
	 * @returns {number|null} - 메뉴의 가격. 주어진 id 또는 이름에 해당하는 메뉴가 없을 경우 null을 반환
	 */
	findPrice: function (identifier) {
		const menu = Object.values(MENU_DATA).find((menu) => menu.id === identifier || menu.name === identifier);
		return menu ? menu.price : null;
	},

	/**
	 * 주어진 id 또는 이름에 해당하는 메뉴의 카테고리를 찾아 반환하는 함수.
	 * @param {number|string} identifier - 찾을 메뉴의 id 또는 이름
	 * @returns {string|null} - 메뉴의 카테고리. 주어진 id 또는 이름에 해당하는 메뉴가 없을 경우 null을 반환
	 */
	findCategory: function (identifier) {
		const menu = Object.values(MENU_DATA).find((menu) => menu.id === identifier || menu.name === identifier);
		return menu ? menu.category : null;
	}
};

export default MenuManager;
