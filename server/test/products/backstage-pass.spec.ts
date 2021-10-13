import { expect } from 'chai';
import { BackstagePass, BackStageItem } from '../../app/products/BackstagePass';
import { ProductNames } from '../../app/constants';
describe('PRODUCT -> BACKSTAGE PASSES', function () {
	it('1 - If selling day has passed (SellIn < 0) => Quality = 0 and SellIn - 1.', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, -1, 49),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, -2, 0),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('2 - If selling days between 6 and 11 (6 < SellIn < 11) and Quality = 49  ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 10, 49),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 9, 50),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('3 - If selling days between 6 and 11 (6 < SellIn < 11) and Quality < 49 ==> Quality + 2 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 10, -1),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 9, 1),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('4 - If selling days between 0 and 6 (0 < SellIn < 6) and Quality = 49  ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 1, 49),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 0, 50),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('5 - If selling days between 0 and 6 (0 < SellIn < 6) and Quality = 48 ==> Quality + 2 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 1, 48),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 0, 50),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('6 - If selling days between 0 and 6 (0 < SellIn < 6) and Quality < 48 ==> Quality + 3 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 1, 45),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 0, 48),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('7 - If selling days more then 11 (SellIn > 11) and Quality < 50 ==> Quality + 1 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 12, 45),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 11, 46),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('8 - Quality = 50 ==> Quality + 0 and SellIn - 1 ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 12, 50),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 11, 50),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('9 - If selling days more then 0 (SellIn > 0) and Quality > 50 ==> Quality continues the same and SellIn continues the same ', function () {
		const testStoredProduct = [
			new BackStageItem(ProductNames.backstagePass, 12, 51),
		];
		const testExpectedOutcome = [
			new BackStageItem(ProductNames.backstagePass, 12, 51),
		];

		const gildedRoseShop = new BackstagePass(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
