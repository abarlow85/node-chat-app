const expect = require('expect');

const {generateMessage} = require('./message');


describe('generateMessage', () => {

	it('should generate the correct message object', () => {

		const from = 'User';
		const text = 'User test message'

		const res = generateMessage(from, text);

		expect(res).toInclude({from, text});
		expect(res.createdAt).toBeA('number');

	});

});