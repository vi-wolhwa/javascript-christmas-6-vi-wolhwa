import DeepFreeze from '../util/DeepFreeze.js';

const NULL = '없음';

const EVENT_BADGE_KEYS = DeepFreeze(['star', 'tree', 'santa']);

const EVENT_BADGE_NAME = DeepFreeze({
	star: '별',
	tree: '트리',
	santa: '산타'
});

const EVENT_BADGE_CONDITIONS = DeepFreeze({
	star: (value) => value >= 5000 && value < 10000,
	tree: (value) => value >= 10000 && value < 20000,
	santa: (value) => value >= 20000
});

function getEventBadge(totalBenefits) {
	for (const key of EVENT_BADGE_KEYS) {
		if (EVENT_BADGE_CONDITIONS[key](totalBenefits)) {
			return EVENT_BADGE_NAME[key];
		}
	}
	return NULL;
}

export default getEventBadge;
