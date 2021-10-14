import { app } from './app';
import dotEnv from 'dotenv';

dotEnv.config();

const start = async () => {
	const port = process.env.PORT || 5000;

	if (!port) {
		throw new Error('Environment variables not defined in .env file');
	}

	app.listen(port, () => console.log('listening on port 5000'));
};

start();
