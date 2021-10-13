import { expect } from 'chai';
import { Sulfuras, SulfurasItem } from '../../app/products/Sulfuras';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> SULFURAS, HAND OF RAGNAROS', function () {
	it('1 - Suluras should not increase or decrease neither quality or sellIn in any circustance.', function () {
		const testStoredProduct = [
			new SulfurasItem(ProductNames.sulfuras, -1, 49),
			new SulfurasItem(ProductNames.sulfuras, 0, 45),
			new SulfurasItem(ProductNames.sulfuras, 12, 51),
			new SulfurasItem(ProductNames.sulfuras, 5, 50),
		];
		const testExpectedOutcome = [
			new SulfurasItem(ProductNames.sulfuras, -1, 49),
			new SulfurasItem(ProductNames.sulfuras, 0, 45),
			new SulfurasItem(ProductNames.sulfuras, 12, 51),
			new SulfurasItem(ProductNames.sulfuras, 5, 50),
		];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('2 - If quality is below 0 it should not be changed in any circumstance.', function () {
		const testStoredProduct = [new SulfurasItem(ProductNames.sulfuras, 5, -80)];
		const testExpectedOutcome = [
			new SulfurasItem(ProductNames.sulfuras, 5, -80),
		];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('3 - If selling day below 0 it should not be changed in any circumstance.', function () {
		const testStoredProduct = [
			new SulfurasItem(ProductNames.sulfuras, -5, -80),
		];
		const testExpectedOutcome = [
			new SulfurasItem(ProductNames.sulfuras, -5, -80),
		];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
