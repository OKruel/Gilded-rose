import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { AgedBrie } from '../../app/products/AgedBrie';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> AGED BRIE', function () {
	it('If selling day has passed (SellIn < 0), and Quality = 50 => Quality continue the same and SellIn - 1.', function () {
		const testStoredProduct = [new Item(ProductNames.brie, -1, 50)];
		const testExpectedOutcome = [new Item(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0), and Quality = 49 => Quality + 1 and SellIn - 1.', function () {
		const testStoredProduct = [new Item(ProductNames.brie, -1, 49)];
		const testExpectedOutcome = [new Item(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has passed (SellIn < 0), and Quality < 49 => Quality + 2 and SellIn - 1', function () {
		const testStoredProduct = [new Item(ProductNames.brie, -1, 48)];
		const testExpectedOutcome = [new Item(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has NOT passed (SellIn > 0), and Quality > 49 => Quality continue the same and SellIn - 1.', function () {
		const testStoredProduct = [new Item(ProductNames.brie, 2, 50)];
		const testExpectedOutcome = [new Item(ProductNames.brie, 1, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day has NOT passed (SellIn > 0), and Quality < 50 => Quality + 1 and SellIn - 1.', function () {
		const testStoredProduct = [
			new Item(ProductNames.brie, 2, 49),
			new Item(ProductNames.brie, 2, -49),
		];
		const testExpectedOutcome = [
			new Item(ProductNames.brie, 1, 50),
			new Item(ProductNames.brie, 1, -48),
		];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
