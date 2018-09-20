function mergeDecls(_ref) {
	var rowDecl = _ref.rowDecl,
	    columnDecl = _ref.columnDecl,
	    areaDecl = _ref.areaDecl;

	var rowValues = rowDecl.value.split(/\s+(?![^(]*\))/);
	var areasRows = areaDecl.value.match(/"[^"]*"/g);
	var rows = areasRows.map(function (areasRow, i) {
		return `${areasRow} ${rowValues[i] || ''}`;
	});
	return `${rows.join(' ')} / ${columnDecl.value}`;
}

module.exports = { mergeDecls };