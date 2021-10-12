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
		for (let i = 0; i < this.items.length; i++) {
			if (
				this.items[i].name != 'Aged Brie' &&
				this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
			) {
				//* [NO NAME & SULFURAS]
				if (this.items[i].quality > 0) {
					//* [NO NAME && SULFURAS] QUALITY > 0
					if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
						//* [NO NAME] QUALITY > 0
						//! CASE => [NO NAME] QUALITY > 0 ===> QUANTITY -1
						this.items[i].quality = this.items[i].quality - 1;
					}
				}
				//TODO - [NO NAME] QUANTITY -1
			} else {
				//* [AGED BRIE && BACKSTAGE]
				if (this.items[i].quality < 50) {
					//* [AGED BRIE && BACKSTAGE] QUALITY < 50
					//! CASE => [AGED BRIE && BACKSTAGE] QUALITY < 50 ===> QUALITY + 1
					this.items[i].quality = this.items[i].quality + 1;

					if (
						this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
					) {
						//* [BACKSTAGE PASS] QUALITY < 50
						if (this.items[i].sellIn < 11) {
							//* [BACKSTAGE PASS] QUALITY < 50 && SELLIN < 11
							if (this.items[i].quality < 50) {
								//* [BACKSTAGE PASS] QUALITY < 50 && SELLIN < 11
								//TODO - [BACKSTAGE] mandatory to enter here with 1 already added to quality (ln 40) because of quality < 50
								//! CASE => [BACKSTAGE] SELLIN < 11 and QUALITY < 50 Add 1 more to QUALITY
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
						if (this.items[i].sellIn < 6) {
							//* [BACKSTAGE PASS] QUALITY < 50 && SELLIN < 6
							if (this.items[i].quality < 50) {
								//* [BACKSTAGE PASS] QUALITY < 50 && SELLIN < 6
								//TODO - [BACKSTAGE] mandatory to enter here with 1 already added to quality (ln 40) because of quality < 50
								//! CASE => [BACKSTAGE] SELLIN < 6 and QUALITY < 50 Add yet 1 more to QUALITY
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
					}
				}
			}

			if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
				//* [NO NAME, AGED BRIE, BACKSTAGE]
				//! CASE => [NO NAME, AGED BRIE, BACKSTAGE] ===> SELLIN -1
				this.items[i].sellIn = this.items[i].sellIn - 1;
			}

			//TODO - [NO NAME, AGED BRIE, BACKSTAGE] mandatory to have SELLIN -1

			if (this.items[i].sellIn < 0) {
				//* [ALL CASES] SELLIN < 0
				if (this.items[i].name != 'Aged Brie') {
					//*[NO NAME, BACKSTAGE, SULFURAS] SELLIN < 0
					if (
						this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
					) {
						//*[NO NAME, SULFURAS] SELLIN < 0
						if (this.items[i].quality > 0) {
							//*[NO NAME, SULFURAS] SELLIN < 0 && QUALITY > 0
							if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
								//*[NO NAME] SELLIN < 0 && QUALITY > 0
								//! CASE => [NO NAME] SELLIN < 0 && QUALITY > 0 ===> QUALITY -1
								this.items[i].quality = this.items[i].quality - 1;
							}
						}
					} else {
						//*[BACKSTAGE] SELLIN < 0
						//! CASE => [BACKSTAGE] SELLIN < 0 ===> QUALITY = 0
						this.items[i].quality =
							this.items[i].quality - this.items[i].quality;
					}
				} else {
					//*[AGED BRIE] SELLIN < 0
					if (this.items[i].quality < 50) {
						//*[AGED BRIE] SELLIN < 0 && QUALITY < 50
						//! CASE => [AGED BRIE] SELLIN < 0 && QUALITY < 50 ===> QUALITY + 1
						this.items[i].quality = this.items[i].quality + 1;
					}
				}
			}
		}

		return this.items;
	}
}
const storeItems = [
	new Item('Aged Brie', 5, 50), //tested
	new Item('Aged Brie', 5, 49), //tested
	new Item('Aged Brie', -1, 49), //tested
	new Item('Aged Brie', -1, 48), //tested

	new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 10, 48), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 10, 47), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 5, 47), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 5, 46), //tested

	new Item('Sulfuras, Hand of Ragnaros', 5, 5), //tested

	new Item('test Product 1', 4, 4), //tested
	new Item('test Product 2', -1, 4), //tested
];

const expectedOutcome = [
	new Item('Aged Brie', 4, 50), //tested
	new Item('Aged Brie', 4, 50), //tested
	new Item('Aged Brie', -2, 50), //tested
	new Item('Aged Brie', -2, 50), //tested

	new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 9, 49), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50), //tested
	new Item('Backstage passes to a TAFKAL80ETC concert', 4, 49), //tested

	new Item('Sulfuras, Hand of Ragnaros', 5, 5), //tested

	new Item('No name Product 1', 3, 3), //tested
	new Item('No name Product 2', -2, 2), //tested
];

const gildedRoseShop = new GildedRose(storeItems);

// gildedRoseShop.updateQuality();

// AGED BRIE
// Quality < 50 ===> Quality adds +1 (ln 40)
// SellIn subtracts -1 (ln 71)
// Quality < 50 && SellIn < 0 ===> Quality adds +1 (ln 103)
// Quality < 49 && SellIn < 0 ===> Quality adds +2 (ln 103)

// BACKSTAGE PASS
// Quality < 50 ===> Quality adds +1 (ln 40)
// Quality < 50 && SellIn < 11 ===> Quality adds +1 (ln 52)
// Quality < 49 && SellIn < 11 ===> Quality adds +2 (ln 52)
// Quality < 50 && SellIn < 6 ===> Quality adds +1 (ln 61)
// Quality < 49 && SellIn < 6 ===> Quality adds +2 (ln 61)
// Quality < 48 && SellIn < 6 ===> Quality adds +3 (ln 61)
// SellIn subtracts -1 (ln 71)
// SellIn < 0 ==> Quality = 0 (ln 95)

// SULFURAS
// Always stays the same

// NO NAME
// Quality > 0 ===> Quality subtracts -1 (ln 29)
// SellIn subtracts -1 (ln 71)
// SellIn < 0 && Quality > 0 ===> Quality subtracts -1 (ln 89)
