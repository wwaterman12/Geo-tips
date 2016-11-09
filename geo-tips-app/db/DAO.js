const db = require('./db');
const newNote = require('./sqlProvider');

class DAO {
  static create({ name, note }) {
    return db.one(newNote.create, [body])
             .then((data) => new Note(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}


export default DAO;
