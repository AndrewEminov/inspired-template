const { mergeDecls } = require('./merge');
const { getIdentifiers, renameIdentifiers, replaceIdentifiers } = require('./identifiers');

module.exports = function optimizeRule(rule, nameMapping) {

	const areaDecl = rule.nodes.find(decl => decl.prop === 'grid-template-areas');
	const columnDecl = rule.nodes.find(decl => decl.prop === 'grid-template-columns');
	const rowDecl    = rule.nodes.find(decl => decl.prop === 'grid-template-rows');

	// <'grid-template-rows'> / <'grid-template-columns'>
	if (columnDecl && rowDecl && !areaDecl) {
		rule.append({
			prop: 'grid-template',
			value: `${rowDecl.value} / ${columnDecl.value}`
		});
		rule.removeChild(rowDecl);
		rule.removeChild(columnDecl);
	} else if (areaDecl) {
		const identifiers = getIdentifiers(areaDecl.value);
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
