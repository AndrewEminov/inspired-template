module.exports = function encode(slotNumber) {
	var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var base = characters.length;
	var character = slotNumber % base;
	var result = characters[character];
	var remainder = Math.floor(slotNumber / base);
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