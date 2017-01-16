const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

	let users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Mike',
			room: 'Node Course'
		},
		{
			id: '2',
			name: 'Bob',
			room: 'React Course'
		},
		{
			id: '3',
			name: 'Jane',
			room: 'Node Course'
		}];
	})

	it('should add new user', () => {
		var users = new Users()
		const user = {
			id: '123',
			name: 'Alec',
			room: 'Test Room'
		};

		const res = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should return names for node course', () => {
		const userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Mike', 'Jane']);
	});

	it('should return names for react course', () => {
		const userList = users.getUserList('React Course');

		expect(userList).toEqual(['Bob']);
	});

	it('should remove a user', () => {
		const id = '1';
		const res = users.removeUser(id);

		expect(res.id).toBe(id);
		expect(users.users.length).toBe(2);
	});

	it('should NOT remove user', () => {
		const id = '10';
		const res = users.removeUser(id);

		expect(res).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		const id = '1';
		const res = users.getUser(id);
		expect(res.id).toBe(id);
	});

	it('should NOT find user', () => {
		const id = '10';
		const res = users.getUser(id);
		expect(res).toNotExist();
	});

});