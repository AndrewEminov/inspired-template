var optimizeRule = require('./optimize');

module.exports = function () {
	return function (css) {
		var nameMapping = new Map();

		css.walkDecls(/grid-template-/, function (decl) {
			var rule = decl.parent;
			optimizeRule(rule, nameMapping);
		});

		css.walkDecls('grid-area', function (decl) {
			// TODO: handle all formats possible for grid-area
			if (nameMapping.has(decl.value)) {
				decl.value = nameMapping.get(decl.value);
			}
		});
	};
};