import { expect } from 'chai';
import { Item, GildedRose } from '../../app/refactor';
import { productNames } from '../../app/constants';

describe('PRODUCT -> UNREGISTERED', function () {
	it('If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 1 and SellIn - 1', function () {
		const testStoredProduct = [new Item(productNames.unregistered, 1, 51)];
		const testExpectedOutcome = [new Item(productNames.unregistered, 0, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new Item(productNames.unregistered, -1, 49)];
		const testExpectedOutcome = [new Item(productNames.unregistered, -2, 47)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
