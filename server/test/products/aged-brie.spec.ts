import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { productNames } from '../gilded-rose.spec';

describe('PRODUCT AGED BRIE', function () {
	it('should increase 1 point in quality and subtract 1 point in SellIn if SellIn < 0 and 50 > Quality > 48', function () {
		const testStoredProduct = [
			new Item(productNames.brie, -1, 49),
			new Item(productNames.brie, -1, 50),
		];
		const testExpectedOutcome = [
			new Item(productNames.brie, -2, 50),
			new Item(productNames.brie, -2, 50),
		];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('should increase 2 point in quality and subtract 1 point in SellIn if SellIn < 0 and 49 > Quality', function () {
		const testStoredProduct = [new Item(productNames.brie, -1, 48)];
		const testExpectedOutcome = [new Item(productNames.brie, -2, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('should increase 0 point in quality and subtract 1 point in SellIn if SellIn > 0 and 50 > Quality', function () {
		const testStoredProduct = [new Item(productNames.brie, -1, 50)];
		const testExpectedOutcome = [new Item(productNames.brie, -2, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
