const prefix = '[ERROR]';

const ERROR_MESSAGES = Object.freeze({
	invalid_date: `${prefix} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
	invalid_order: `${prefix} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
	exceeded_max_order: `${prefix} 최대 주문 수량을 초과하였습니다. 다시 입력해 주세요.`
});

export default ERROR_MESSAGES;
