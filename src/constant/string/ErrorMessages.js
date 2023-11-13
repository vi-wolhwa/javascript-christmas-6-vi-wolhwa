import DeepFreeze from '../../util/DeepFreeze.js';

const prefix = '[ERROR]';

const ERROR_MESSAGES = DeepFreeze({
	invalid_date: `${prefix} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
	invalid_order: `${prefix} 유효하지 않은 주문입니다. 다시 입력해 주세요.`
});

export default ERROR_MESSAGES;
