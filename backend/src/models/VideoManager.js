const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title, cover, synopsis, availability) values (?, ? , ?, ?)`,
      [video.title, video.cover, video.synopsis, video.availability]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ?, cover = ?, synopsis = ?, availability = ?  where id = ?`,
      [video.title, video.cover, video.synopsis, video.availability, video.id]
    );
  }
}

module.exports = VideoManager;
