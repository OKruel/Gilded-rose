import { expect } from 'chai';
import { Item } from '../../app/gilded-rose';
import { NormalItems } from '../../app/products/NormalItems';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> NORMAL', function () {
	it('If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 1 and SellIn - 1', function () {
		const testStoredProduct = [new Item(ProductNames.normal, 1, 51)];
		const testExpectedOutcome = [new Item(ProductNames.normal, 0, 50)];

		const gildedRoseShop = new NormalItems(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new Item(ProductNames.normal, -1, 49)];
		const testExpectedOutcome = [new Item(ProductNames.normal, -2, 47)];

		const gildedRoseShop = new NormalItems(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
