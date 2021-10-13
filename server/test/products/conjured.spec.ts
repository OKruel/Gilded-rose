import { expect } from 'chai';
import { Item, GildedRose } from '../../app/refactor1';
import { Conjured } from '../../app/products/Conjured';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> CONJURED', function () {
	it('If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new Item(ProductNames.conjured, 1, 51)];
		const testExpectedOutcome = [new Item(ProductNames.conjured, 0, 49)];

		const gildedRoseShop = new Conjured(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 4 and SellIn - 1', function () {
		const testStoredProduct = [new Item(ProductNames.conjured, -1, 49)];
		const testExpectedOutcome = [new Item(ProductNames.conjured, -2, 45)];

		const gildedRoseShop = new Conjured(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
