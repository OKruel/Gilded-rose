import { productNames } from './constants';

export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((items) => {
			//!Quality
			const qualityEquals50 = items.quality === 50;
			const qualityEquals49 = items.quality === 49;
			const qualityEquals48 = items.quality === 48;
			const qualityLessThen50 = items.quality < 50;
			const qualityLessThen49 = items.quality < 49;
			const qualityLessThen48 = items.quality < 48;
			const qualityMoreThen49 = items.quality > 49;
			const qualityMoreThen0 = items.quality > 0;
			//!Days to sell
			const daysToSellLessThen0 = items.sellIn < 0;
			const daysToSellMoreThen0 = items.sellIn > 0;
			const daysToSellBetween0And6 = items.sellIn > 0 && items.sellIn < 6;
			const daysToSellBetween6And11 = items.sellIn > 6 && items.sellIn < 11;
			const daysToSellMoreThen11 = items.sellIn > 11;

			//! PRODUCT AGED BRIE
			if (items.name === productNames.brie) {
				if (daysToSellLessThen0 && qualityEquals50) {
					items.sellIn -= 1;
					return;
				}
				if (daysToSellLessThen0 && qualityEquals49) {
					items.sellIn -= 1;
					items.quality += 1;
					return;
				}
				if (daysToSellLessThen0 && qualityLessThen49) {
					items.sellIn -= 1;
					items.quality += 2;
					return;
				}
				if (daysToSellMoreThen0 && qualityMoreThen49) {
					items.sellIn -= 1;
					return;
				}
				if (daysToSellMoreThen0 && qualityLessThen50) {
					items.sellIn -= 1;
					items.quality += 1;
					return;
				}
			}

			//! PRODUCT BACKSTAGE PASS
			if (items.name === productNames.backstagePass) {
				if (daysToSellLessThen0) {
					items.sellIn -= 1;
					items.quality = 0;
					return;
				}
				if (daysToSellBetween6And11 && qualityEquals49) {
					items.sellIn -= 1;
					items.quality += 1;
					return;
				}
				if (daysToSellBetween6And11 && qualityLessThen49) {
					items.sellIn -= 1;
					items.quality += 2;
					return;
				}
				if (daysToSellBetween0And6 && qualityEquals49) {
					items.sellIn -= 1;
					items.quality += 1;
					return;
				}
				if (daysToSellBetween0And6 && qualityEquals48) {
					items.sellIn -= 1;
					items.quality += 2;
					return;
				}
				if (daysToSellBetween0And6 && qualityLessThen48) {
					items.sellIn -= 1;
					items.quality += 3;
					return;
				}
				if (daysToSellMoreThen11 && qualityLessThen50) {
					items.sellIn -= 1;
					items.quality += 1;
					return;
				}
				if (qualityEquals50) {
					items.sellIn -= 1;
					return;
				}
			}

			//! PRODUCT SULFURAS
			if (items.name === productNames.sulfuras) {
				return;
			}

			//! PRODUCT NORMAL
			if (items.name === productNames.normal) {
				if (daysToSellMoreThen0 && qualityMoreThen0) {
					items.sellIn -= 1;
					items.quality -= 1;
					return;
				}
				if (daysToSellLessThen0 && qualityMoreThen0) {
					items.sellIn -= 1;
					items.quality -= 2;
					return;
				}
			}

			//! PRODUCT CONJURED
			if (items.name === productNames.conjured) {
				if (daysToSellMoreThen0 && qualityMoreThen0) {
					items.sellIn -= 1;
					items.quality -= 2;
					return;
				}
				if (daysToSellLessThen0 && qualityMoreThen0) {
					items.sellIn -= 1;
					items.quality -= 4;
					return;
				}
			}
		});

		return this.items;
	}
}
