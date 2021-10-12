import { expect } from 'chai';
import { Item, GildedRose } from '../../app/refactor';
import { productNames } from '../../app/constants';

describe('PRODUCT -> CONJURED', function () {
	it('If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new Item(productNames.conjured, 1, 51)];
		const testExpectedOutcome = [new Item(productNames.conjured, 0, 49)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 4 and SellIn - 1', function () {
		const testStoredProduct = [new Item(productNames.conjured, -1, 49)];
		const testExpectedOutcome = [new Item(productNames.conjured, -2, 45)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
