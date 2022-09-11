import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
	
	summPrice(discount = 0): number {
		let summ: number[] = [];
		this._items.forEach(arr => {
			arr.price != undefined ? summ.push(arr.price) : null;
		});
		let result = summ.reduce(function(sumTotal, price) {
			return sumTotal + price;
		}, 0);
		return result - (result * discount);
	}
	
	del(idProduct: number): void {
		this._items = this._items.filter((item: Buyable) => item.id !== idProduct);
	}
}
