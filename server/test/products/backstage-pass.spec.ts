import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { productNames } from '../gilded-rose.spec';
describe('PRODUCT BACKSTAGE PASSES', function () {
	it('Quality should be 0 and SellIn droped 1 if SellIn < 0', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, -1, 49)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, -2, 0)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('48 < Quality < 50 && 6 < SellIn < 11 ===> Quality adds +1 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 10, 49)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 9, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('Quality < 49 && 6 < SellIn < 11 ===> Quality adds +2 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 10, 48)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 9, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('48 < Quality < 50 && 0 < SellIn < 6 ===> Quality adds +1 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 1, 49)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 0, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('47 < Quality < 49 && 0 < SellIn < 6 ===> Quality adds +2 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 1, 48)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 0, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('Quality < 48 && 0 < SellIn < 6 ===> Quality adds +3 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 1, 45)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 0, 48)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('Quality < 50 && SellIn > 11 ===> Quality adds +1 -- SellIn subtracs -1 ', function () {
		const testStoredProduct = [new Item(productNames.backstagePass, 12, 45)];
		const testExpectedOutcome = [new Item(productNames.backstagePass, 11, 46)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
