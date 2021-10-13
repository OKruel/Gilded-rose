import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class AgedBrie extends GildedRose {
	constructor(public items: Item[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: Item) => {
			//!Quality
			const qualityEquals50 = item.quality === 50;
			const qualityEquals49 = item.quality === 49;
			const qualityLessThen50 = item.quality < 50;
			const qualityLessThen49 = item.quality < 49;
			const qualityMoreThen49 = item.quality > 49;
			//!Days to sell
			const daysToSellLessThen0 = item.sellIn < 0;
			const daysToSellMoreThen0 = item.sellIn > 0;
			//! PRODUCT AGED BRIE
			if (item.name === ProductNames.brie) {
				if (daysToSellLessThen0 && qualityEquals50) {
					item.sellIn -= 1;
					return;
				}
				if (daysToSellLessThen0 && qualityEquals49) {
					item.sellIn -= 1;
					item.quality += 1;
					return;
				}
				if (daysToSellLessThen0 && qualityLessThen49) {
					item.sellIn -= 1;
					item.quality += 2;
					return;
				}
				if (daysToSellMoreThen0 && qualityMoreThen49) {
					item.sellIn -= 1;
					return;
				}
				if (daysToSellMoreThen0 && qualityLessThen50) {
					item.sellIn -= 1;
					item.quality += 1;
					return;
				}
			}
		});

		return this.items;
	}
}