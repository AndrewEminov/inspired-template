module.exports = function encode(slotNumber) {
	let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let base = characters.length;
	let character = slotNumber % base;
	let result = characters[character];
	let remainder = Math.floor(slotNumber / base);
	if (remainder) {
		base = 64;
		characters += '0123456789-_';
		while (remainder) {
			character = remainder % base;
			remainder = Math.floor(remainder / base);
			result += characters[character];
		}
	}
	return result;
};
