const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users.set('1', { id: '1', name: 'Mike', room: 'Node Course' });
    users.users.set('2', { id: '2', name: 'Jen', room: 'React Course' });
    users.users.set('3', { id: '3', name: 'Julie', room: 'Node Course' });
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };

    const addedUser = users.addUser(user.id, user.name, user.room);
    const retrievedUser = users.users.get(user.id);
    expect(retrievedUser).toEqual(addedUser);
  });

  it('should return names for node course', () => {
    console.log(users);
    const userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    console.log(users);
    const userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    users.removeUser('1');
    expect(users.users.has(1)).toBe(false);
  });

  it('should find a user', () => {
    const user1 = users.getUser('1');
    expect(user1).toEqual({ id: '1', name: 'Mike', room: 'Node Course' });
  });

});
