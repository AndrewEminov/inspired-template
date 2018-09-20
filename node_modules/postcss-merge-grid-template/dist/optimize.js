var _require = require('./merge'),
    mergeDecls = _require.mergeDecls;

var _require2 = require('./identifiers'),
    getIdentifiers = _require2.getIdentifiers,
    renameIdentifiers = _require2.renameIdentifiers,
    replaceIdentifiers = _require2.replaceIdentifiers;

module.exports = function optimizeRule(rule, nameMapping) {

	var areaDecl = rule.nodes.find(function (decl) {
		return decl.prop === 'grid-template-areas';
	});
	var columnDecl = rule.nodes.find(function (decl) {
		return decl.prop === 'grid-template-columns';
	});
	var rowDecl = rule.nodes.find(function (decl) {
		return decl.prop === 'grid-template-rows';
	});

	// <'grid-template-rows'> / <'grid-template-columns'>
	if (columnDecl && rowDecl && !areaDecl) {
		rule.append({
			prop: 'grid-template',
			value: `${rowDecl.value} / ${columnDecl.value}`
		});
		rule.removeChild(rowDecl);
		rule.removeChild(columnDecl);
	} else if (areaDecl) {
		var identifiers = getIdentifiers(areaDecl.value);
		if (identifiers) {
			renameIdentifiers(identifiers, nameMapping);
		}
		areaDecl.value = replaceIdentifiers(areaDecl.value, nameMapping);

		if (columnDecl && rowDecl) {
			// [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <track-list> ]?
			rule.append({
				prop: 'grid-template',
				value: mergeDecls({ rowDecl, columnDecl, areaDecl })
			});
			rule.removeChild(areaDecl);
			rule.removeChild(rowDecl);
			rule.removeChild(columnDecl);
		}
	}
};