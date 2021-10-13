import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class NormalItem extends Item {
	constructor(
		public name: ProductNames.normal,
		public sellIn: number,
		public quality: number
	) {
		super(name, sellIn, quality);
	}
}
export class NormalItems extends GildedRose {
	constructor(public items: NormalItem[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: NormalItem) => {
			//!Quality
			const qualityMoreThen0 = item.quality > 0;
			//!Days to sell
			const daysToSellLessThen0 = item.sellIn < 0;
			const daysToSellMoreThen0 = item.sellIn > 0;

			//! PRODUCT NORMAL
			if (qualityMoreThen0 && daysToSellMoreThen0) {
				item.sellIn -= 1;
				item.quality -= 1;
				return;
			}
			if (qualityMoreThen0 && daysToSellLessThen0) {
				item.sellIn -= 1;
				item.quality -= 2;
				return;
			}
		});

		return this.items;
	}
}
