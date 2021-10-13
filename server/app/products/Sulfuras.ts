import { GildedRose, Item } from '../gilded-rose';
import { ProductNames } from '../constants';

export class SulfurasItem extends Item {
	constructor(
		public name: ProductNames.sulfuras,
		public sellIn: number,
		public quality: number
	) {
		super(name, sellIn, quality);
	}
}
export class Sulfuras extends GildedRose {
	constructor(public items: SulfurasItem[]) {
		super();
		this.items = items;
	}

	updateQuality() {
		return this.items;
	}
}
