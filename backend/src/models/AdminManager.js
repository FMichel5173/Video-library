const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, password) values (?, ? , ?, ?)`,
      [admin.firstname, admin.lastname, admin.email, admin.password]
    );
  }

  update(admin) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?  where id = ?`,
      [admin.firstname, admin.lastname, admin.email, admin.password, admin.id]
    );
  }
}

module.exports = AdminManager;
