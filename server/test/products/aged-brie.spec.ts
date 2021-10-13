import { expect } from 'chai';
import { AgedBrie, AgedBrieItem } from '../../app/products/AgedBrie';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> AGED BRIE', function () {
	it('1 - If selling day has passed (SellIn < 0), and Quality = 50 => Quality continue the same and SellIn - 1.', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, -1, 50)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('2 - If selling day has passed (SellIn < 0), and Quality = 49 => Quality + 1 and SellIn - 1.', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, -1, 49)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('3 - If selling day has passed (SellIn < 0), and Quality < 49 => Quality + 2 and SellIn - 1', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, -1, 48)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, -2, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('4 - If selling day has passed (SellIn < 0), and Quality > 50 => Quality continues the same and SellIn continues the same.', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, -2, 51)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, -2, 51)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('5 - If selling day has NOT passed (SellIn > 0), and Quality > 49 => Quality continue the same and SellIn - 1.', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, 2, 50)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, 1, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('6 - If selling day has NOT passed (SellIn > 0), and Quality < 50 => Quality + 1 and SellIn - 1.', function () {
		const testStoredProduct = [new AgedBrieItem(ProductNames.brie, 2, 49)];
		const testExpectedOutcome = [new AgedBrieItem(ProductNames.brie, 1, 50)];

		const gildedRoseShop = new AgedBrie(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
