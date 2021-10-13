import { expect } from 'chai';
import { Item, GildedRose } from '../../src/classes/gilded-rose';
import { Conjured, ConjuredItem } from '../../src/products/Conjured';
import { ProductNames } from '../../src/enums/products';

describe('PRODUCT -> CONJURED', function () {
	it('1 - If selling day has NOT passed (SellIn > 0) and Quality > 0 ==> Quality - 2 and SellIn - 1', function () {
		const testStoredProduct = [new ConjuredItem(ProductNames.conjured, 1, 51)];
		const testExpectedOutcome = [
			new ConjuredItem(ProductNames.conjured, 0, 49),
		];

		const gildedRoseShop = new Conjured(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('2 - If selling day has passed (SellIn < 0) and Quality > 0 ==> Quality - 4 and SellIn - 1', function () {
		const testStoredProduct = [new ConjuredItem(ProductNames.conjured, -1, 49)];
		const testExpectedOutcome = [
			new ConjuredItem(ProductNames.conjured, -2, 45),
		];

		const gildedRoseShop = new Conjured(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('3 - If selling day has passed (SellIn > 0) and Quality < 0 ==> Quality continues the same and SellIn continues the same', function () {
		const testStoredProduct = [new ConjuredItem(ProductNames.conjured, 1, -49)];
		const testExpectedOutcome = [
			new ConjuredItem(ProductNames.conjured, 1, -49),
		];

		const gildedRoseShop = new Conjured(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
