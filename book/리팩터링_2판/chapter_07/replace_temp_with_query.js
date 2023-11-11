// before
class Order {
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item;
  }
  get price() {
    const basePrice = this._quantity * this._item.price;
    if(basePrice > 1000) return basePrice * 0.95;
    else return basePrice * 0.98;
  }
}


// after
class OrderAfter {
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item;
  }
  get basePrice() {this._quantity * this.item.price;}
  get price() {
    if(this.basePrice > 1000) return this.basePrice * 0.95;
    else return this.basePrice * 0.98;
  }
}
