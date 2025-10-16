const fs = require('fs');
const path = require('path');

function loadData() {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/elsalvador.json'), 'utf8'));
  return data;
}

module.exports = { loadData };
