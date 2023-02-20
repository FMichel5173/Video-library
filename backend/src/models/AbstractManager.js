class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }

  findByEmail(email) {
    return this.connection.query(
      `select admin.*, admin.id from admin where email = ?`,
      [email]
    );
  }
}

module.exports = AbstractManager;
