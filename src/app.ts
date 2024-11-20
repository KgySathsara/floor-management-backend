import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import tableRoutes from './routes/tableRoutes';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/tables', tableRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Backend is running!');
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
