import { expect } from 'chai';
import { Item } from '../../src/classes/gilded-rose';
import { NormalItems, NormalItem } from '../../src/products/NormalItems';
import { ProductNames } from '../../src/enums/products';

describe('PRODUCT -> NORMAL ITEMS', function () {
	it('1 - If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 1 and SellIn - 1', function () {
		const testStoredProduct = [new NormalItem(ProductNames.normal, 1, 51)];
		const testExpectedOutcome = [new NormalItem(ProductNames.normal, 0, 50)];

		const gildedRoseShop = new NormalItems(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('2 - If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new NormalItem(ProductNames.normal, -1, 49)];
		const testExpectedOutcome = [new NormalItem(ProductNames.normal, -2, 47)];

		const gildedRoseShop = new NormalItems(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('3 - If selling day has passed (SellIn > 0) and Quality < 0 ==> Quality continues the same and SellIn continues the same', function () {
		const testStoredProduct = [new NormalItem(ProductNames.normal, 1, -49)];
		const testExpectedOutcome = [new NormalItem(ProductNames.normal, 1, -49)];

		const gildedRoseShop = new NormalItems(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
