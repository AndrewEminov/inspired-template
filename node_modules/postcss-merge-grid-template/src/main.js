const optimizeRule = require('./optimize');

module.exports = function () {
	return function (css) {
		const nameMapping = new Map();

		css.walkDecls(/grid-template-/, decl => {
			const rule = decl.parent;
			optimizeRule(rule, nameMapping);
		});

		css.walkDecls('grid-area', decl => {
			// TODO: handle all formats possible for grid-area
			if (nameMapping.has(decl.value)) {
				decl.value = nameMapping.get(decl.value);
			}
		});
	};
};
