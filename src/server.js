const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { loadData } = require('./loader');
const { buildIndexes } = require('./build-indexes');
const { buildRouter } = require('./routes');

const app = express();
app.use(cors());
app.use(morgan('tiny'));

app.use(rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
}));

const rows = loadData();
const indexes = buildIndexes(rows);
app.use('/', buildRouter(indexes));

if (process.env.VERCEL) {
  module.exports = app;
} else {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));
}
