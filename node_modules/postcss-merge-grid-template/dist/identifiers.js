var encode = require('./encode');

var holeRegex = /^\.+$/g;

function getIdentifiers() {
	var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var match = input.match(/"[^"]*"/g);
	if (!match) return null;

	return match.map(function (row) {
		return row.slice(1, -1);
	}) // remove quotes
	.map(function (row) {
		return row.split(/\s+/);
	}) // split by whitespace
	.reduce(function (accu, ids) {
		return accu.concat(ids);
	}, []) // flatten array
	.filter(function (id) {
		return !holeRegex.test(id);
	}) // remove holes
	.filter(function (item, index, array) {
		return array.indexOf(item) === index;
	}); // remove duplicates
}

function renameIdentifiers(identifiers, map) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = identifiers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var id = _step.value;

			if (!map.has(id)) {
				map.set(id, encode(map.size));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return map;
}

function replaceIdentifiers(input, map) {
	var output = input.replace(/\.{2,}/g, '.'); // reduce holes to a single dot identifier
	output = output.split(/\b/).map(function (word) {
		return map.get(word) || word;
	}).join(''); // rename identifiers
	var rows = output.match(/"[^"]*"/g);
	if (rows) {
		output = output.match(/"[^"]*"/g).join(' '); // join rows with a single whitespace
	}
	output = output.replace(/\s{2,}/g, ' '); // merge whitespaces
	return output;
}

module.exports = { getIdentifiers, renameIdentifiers, replaceIdentifiers };