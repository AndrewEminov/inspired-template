function mergeDecls({ rowDecl, columnDecl, areaDecl }) {
	let rowValues = rowDecl.value.split(/\s+(?![^(]*\))/);
	let areasRows = areaDecl.value.match(/"[^"]*"/g);
	let rows = areasRows.map((areasRow, i) => `${areasRow} ${rowValues[i] || ''}`);
	return `${rows.join(' ')} / ${columnDecl.value}`;
}

module.exports = { mergeDecls };
