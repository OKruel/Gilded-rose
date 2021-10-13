import { expect } from 'chai';
import { Item, GildedRose } from '../../app/refactor1';
import { Sulfuras } from '../../app/products/Sulfuras';
import { ProductNames } from '../../app/constants';

describe('PRODUCT -> SULFURAS, HAND OF RAGNAROS', function () {
	it('Suluras should not increase or decrease neither quality or sellIn in any circustance.', function () {
		const testStoredProduct = [
			new Item(ProductNames.sulfuras, -1, 49),
			new Item(ProductNames.sulfuras, 0, 45),
			new Item(ProductNames.sulfuras, 12, 51),
			new Item(ProductNames.sulfuras, 5, 50),
		];
		const testExpectedOutcome = [
			new Item(ProductNames.sulfuras, -1, 49),
			new Item(ProductNames.sulfuras, 0, 45),
			new Item(ProductNames.sulfuras, 12, 51),
			new Item(ProductNames.sulfuras, 5, 50),
		];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If quality is below 0 it should not be changed in any circumstance.', function () {
		const testStoredProduct = [new Item(ProductNames.sulfuras, 5, -80)];
		const testExpectedOutcome = [new Item(ProductNames.sulfuras, 5, -80)];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('If selling day below 0 it should not be changed in any circumstance.', function () {
		const testStoredProduct = [new Item(ProductNames.sulfuras, -5, -80)];
		const testExpectedOutcome = [new Item(ProductNames.sulfuras, -5, -80)];

		const gildedRoseShop = new Sulfuras(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
