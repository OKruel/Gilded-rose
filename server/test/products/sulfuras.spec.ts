import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { productNames } from '../gilded-rose.spec';

describe('PRODUCT -> SULFURAS, HAND OF RAGNAROS', function () {
	it('Should not increase or decrease neither quality or sellIn in any circustance.', function () {
		const testStoredProduct = [
			new Item(productNames.sulfuras, -1, 49),
			new Item(productNames.sulfuras, 0, 45),
			new Item(productNames.sulfuras, 12, 51),
			new Item(productNames.sulfuras, 5, 50),
		];
		const testExpectedOutcome = [
			new Item(productNames.sulfuras, -1, 49),
			new Item(productNames.sulfuras, 0, 45),
			new Item(productNames.sulfuras, 12, 51),
			new Item(productNames.sulfuras, 5, 50),
		];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
