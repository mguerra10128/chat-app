class Users {
  constructor() {
    this.users = new Map();
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.set(id, user);
    return user;
  }
  removeUser(id) {
    // return user that was removed
    let removedUser;
    if (this.users.has(id)) {
      removedUser = this.users.get(id);
      this.users.delete(id);
    }
    return removedUser;
  }
  getUser(id) {
    return this.users.get(id);
  }

  getUserList(room) {
    const names = [];
    console.log(this.users.values());
    for (let user of this.users.values()) {
      if (user.room === room) {
        names.push(user.name);
      }
    }

    return names;
  }
}

module.exports = { Users };
