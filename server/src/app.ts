import express from 'express';
import cors from 'cors';
import { productsRoutes } from './routes/routes';

const app = express();
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(productsRoutes);

export { app };
