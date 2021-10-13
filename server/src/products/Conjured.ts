import { GildedRose, Item } from '../classes/gilded-rose';
import { ProductNames } from '../enums/products';

export class ConjuredItem extends Item {
	constructor(
		public name: ProductNames.conjured,
		public sellIn: number,
		public quality: number
	) {
		super(name, sellIn, quality);
	}
}
export class Conjured extends GildedRose {
	constructor(public items: ConjuredItem[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: ConjuredItem) => {
			//!Quality
			const qualityMoreThen0 = item.quality > 0;
			//!Days to sell
			const daysToSellLessThen0 = item.sellIn < 0;
			const daysToSellMoreThen0 = item.sellIn > 0;

			//! PRODUCT CONJURED
			if (daysToSellMoreThen0 && qualityMoreThen0) {
				item.sellIn -= 1;
				item.quality -= 2;
				return;
			}
			if (daysToSellLessThen0 && qualityMoreThen0) {
				item.sellIn -= 1;
				item.quality -= 4;
				return;
			}
		});

		return this.items;
	}
}
