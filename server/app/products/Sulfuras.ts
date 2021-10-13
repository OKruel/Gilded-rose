import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class Sulfuras extends GildedRose {
	constructor(public items: Item[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		this.items.forEach((item: Item) => {
			//! PRODUCT SULFURAS
			if (item.name === ProductNames.sulfuras) {
				return;
			}
		});

		return this.items;
	}
}
