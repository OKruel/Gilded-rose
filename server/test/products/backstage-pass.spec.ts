import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { BackstagePass } from '../../app/products/BackstagePass';
import { ProductNames } from '../../app/constants';
describe('PRODUCT -> BACKSTAGE PASSES', function () {
	it('If selling day has passed (SellIn < 0) => Quality = 0 and SellIn - 1.', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, -1, 49)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, -2, 0)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days between 6 and 11 (6 < SellIn < 11) and Quality = 49  ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 10, 49)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 9, 50)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days between 6 and 11 (6 < SellIn < 11) and Quality < 49 ==> Quality + 2 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 10, -1)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 9, 1)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days between 0 and 6 (0 < SellIn < 6) and Quality = 49  ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 1, 49)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 0, 50)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days between 0 and 6 (0 < SellIn < 6) and Quality = 48 ==> Quality + 2 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 1, 48)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 0, 50)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days between 0 and 6 (0 < SellIn < 6) and Quality < 48 ==> Quality + 3 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 1, 45)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 0, 48)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling days more then 11 (SellIn > 11) and Quality < 50 ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 12, 45)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 11, 46)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('Quality = 50 ==> Quality + 0 and SellIn - 1 ', function () {
		const testStoredProduct = [new Item(ProductNames.backstagePass, 12, 50)];
		const testExpectedOutcome = [new Item(ProductNames.backstagePass, 11, 50)];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
