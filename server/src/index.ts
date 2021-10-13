import mongoose from 'mongoose';
import { app } from './app';
import dotEnv from 'dotenv';

dotEnv.config();

const start = async () => {
	const url = process.env.MONGODB_URI;
	const port = process.env.PORT;

	if (!url || !port) {
		throw new Error('Environment variables not defined in .env file');
	}

	mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then((connection) => {
			console.log('MongoDB connected');
		})
		.catch((error) => {
			console.log('MongoDB failed to connect', error);
		});

	app.listen(port, () => console.log('listening on port 5000'));
};

start();
