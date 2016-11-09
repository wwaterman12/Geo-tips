const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const newNote = {
  create: sql('./new.sql'),
  delete: sql('./delete.sql')
};

module.exports = newNote;
