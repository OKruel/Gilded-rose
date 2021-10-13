import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class BackStageItem extends Item {
	constructor(
		public name: ProductNames.backstagePass,
		public sellIn: number,
		public quality: number
	) {
		super(name, sellIn, quality);
	}
}
export class BackstagePass extends GildedRose {
	constructor(public items: BackStageItem[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: BackStageItem) => {
			//!Quality
			const qualityEquals50 = item.quality === 50;
			const qualityEquals49 = item.quality === 49;
			const qualityEquals48 = item.quality === 48;
			const qualityLessThen50 = item.quality < 50;
			const qualityLessThen49 = item.quality < 49;
			const qualityLessThen48 = item.quality < 48;
			//!Days to sell
			const daysToSellLessThen0 = item.sellIn < 0;
			const daysToSellBetween0And6 = item.sellIn > 0 && item.sellIn < 6;
			const daysToSellBetween6And11 = item.sellIn > 6 && item.sellIn < 11;
			const daysToSellMoreThen11 = item.sellIn > 11;

			//! PRODUCT BACKSTAGE PASS
			if (daysToSellLessThen0) {
				item.sellIn -= 1;
				item.quality = 0;
				return;
			}
			if (daysToSellBetween6And11 && qualityEquals49) {
				item.sellIn -= 1;
				item.quality += 1;
				return;
			}
			if (daysToSellBetween6And11 && qualityLessThen49) {
				item.sellIn -= 1;
				item.quality += 2;
				return;
			}
			if (daysToSellBetween0And6 && qualityEquals49) {
				item.sellIn -= 1;
				item.quality += 1;
				return;
			}
			if (daysToSellBetween0And6 && qualityEquals48) {
				item.sellIn -= 1;
				item.quality += 2;
				return;
			}
			if (daysToSellBetween0And6 && qualityLessThen48) {
				item.sellIn -= 1;
				item.quality += 3;
				return;
			}
			if (daysToSellMoreThen11 && qualityLessThen50) {
				item.sellIn -= 1;
				item.quality += 1;
				return;
			}
			if (qualityEquals50) {
				item.sellIn -= 1;
				return;
			}
		});

		return this.items;
	}
}
