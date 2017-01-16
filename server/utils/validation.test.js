const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString util', () => {
	it('should reject non-string values', () => {
		const res = isRealString(12312);
		expect(res).toBe(false);
	});

	it('should reject string with only spaces', () => {
		const res = isRealString('     ');
		expect(res).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		const res = isRealString('  asdfv  td   ');
		expect(res).toBe(true);
	});
});