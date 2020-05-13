import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'Dashboard page' });
});

app.listen(process.env.API_PORT, () => {
  console.log(`Test api listening at http://localhost:${process.env.API_PORT}`);
});
