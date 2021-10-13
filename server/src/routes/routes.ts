import express, { Request, Response } from 'express';
// import { body } from 'express-validator';
// import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.route('/products').get((req: Request, res: Response, next) => {
	res.send('products route');
});

export { router as productsRoutes };
