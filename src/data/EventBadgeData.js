const EVENT_BADGE_DATA = Object.freeze([
	Object.freeze({
		name: '별',
		condition: (totalBenefitAmount) => totalBenefitAmount >= 5000 && totalBenefitAmount < 10000
	}),
	Object.freeze({
		name: '트리',
		condition: (totalBenefitAmount) => totalBenefitAmount >= 10000 && totalBenefitAmount < 20000
	}),
	Object.freeze({
		name: '산타',
		condition: (totalBenefitAmount) => totalBenefitAmount >= 20000
	})
]);

export default EVENT_BADGE_DATA;
