import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class NormalItems extends GildedRose {
	constructor(public items: Item[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: Item) => {
			//!Quality
			const qualityMoreThen0 = item.quality > 0;
			//!Days to sell
			const daysToSellLessThen0 = item.sellIn < 0;
			const daysToSellMoreThen0 = item.sellIn > 0;

			//! PRODUCT NORMAL
			if (item.name === ProductNames.normal) {
				if (daysToSellMoreThen0 && qualityMoreThen0) {
					item.sellIn -= 1;
					item.quality -= 1;
					return;
				}
				if (daysToSellLessThen0 && qualityMoreThen0) {
					item.sellIn -= 1;
					item.quality -= 2;
					return;
				}
			}
		});

		return this.items;
	}
}
