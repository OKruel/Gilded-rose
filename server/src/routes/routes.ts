import express, { Request, Response } from 'express';
import { AgedBrie, AgedBrieItem } from '../products/AgedBrie';
import { BackstagePass, BackStageItem } from '../products/BackstagePass';
import { Conjured, ConjuredItem } from '../products/Conjured';
import { NormalItem, NormalItems } from '../products/NormalItems';
import { Sulfuras, SulfurasItem } from '../products/Sulfuras';
import { ProductNames } from '../enums/products';

const router = express.Router();

router.route('/products').get((req: Request, res: Response, next) => {
	const agedBrie = [new AgedBrieItem(ProductNames.brie, 5, 40)];
	const backstagePass = [new BackStageItem(ProductNames.backstagePass, 5, 40)];
	const conjured = [new ConjuredItem(ProductNames.conjured, 5, 40)];
	const normalItem = [new NormalItem(ProductNames.normal, 5, 40)];
	const sulfuras = [new SulfurasItem(ProductNames.sulfuras, 5, 40)];

	const agedBrieProduct = new AgedBrie(agedBrie).updateQuality();
	const backstageProduct = new BackstagePass(backstagePass).updateQuality();
	const conjuredProduct = new Conjured(conjured).updateQuality();
	const normalProduct = new NormalItems(normalItem).updateQuality();
	const sulfurasProduct = new Sulfuras(sulfuras).updateQuality();

	res.send([
		...agedBrieProduct,
		...backstageProduct,
		...conjuredProduct,
		...normalProduct,
		...sulfurasProduct,
	]);
});

export { router as productsRoutes };
