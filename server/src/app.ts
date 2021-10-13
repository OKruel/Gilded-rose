import express from 'express';
import cors from 'cors';
import { productsRoutes } from './routes/routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(productsRoutes);

export { app };
