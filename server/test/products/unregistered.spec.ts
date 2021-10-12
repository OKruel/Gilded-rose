import { expect } from 'chai';
import { Item, GildedRose } from '../../app/gilded-rose';
import { productNames } from '../../app/constants';

describe('PRODUCT -> UNREGISTERED', function () {
	it('Quality > 0 && SellIn > 0 ===> Quality subtracts -1 -- SellIn subtracts -1', function () {
		const testStoredProduct = [new Item(productNames.unregistered, 1, 51)];
		const testExpectedOutcome = [new Item(productNames.unregistered, 0, 50)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});

	it('Quality > 0 && SellIn < 0 ===> Quality subtracts -2 -- SellIn subtracts -1', function () {
		const testStoredProduct = [new Item(productNames.unregistered, -1, 49)];
		const testExpectedOutcome = [new Item(productNames.unregistered, -2, 47)];

		const gildedRoseShop = new GildedRose(testStoredProduct);
		const items = gildedRoseShop.updateQuality();

		expect(items).deep.equal(testExpectedOutcome);
	});
});
