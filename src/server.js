import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { loadData } from './loader.js';
import { buildIndexes } from './build-indexes.js';
import { buildRouter } from './routes.js';


const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.set('trust proxy', 1);
app.use(
rateLimit({
windowMs: 60 * 1000,
limit: 300, // 300 req/min por IP
standardHeaders: 'draft-7',
legacyHeaders: false
})
);


const rows = loadData();
const indexes = buildIndexes(rows);
app.use('/', buildRouter(indexes));


const port = process.env.PORT || 3000;
if (process.env.VERCEL) {
export default app; // para serverless en Vercel
} else {
app.listen(port, () => console.log(`SV Postales 2025 API en http://localhost:${port}`));
}
