import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/data/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  orders!: any;
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  items = [];
  constructor(public cartService: CartService, private currencyPipe: CurrencyPipe,private router:Router){}
  ngOnInit(): void {
    // this.orders = JSON.parse(localStorage.getItem('cart'));
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    // this.total = this.orders.num;
  }

  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.price;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "GBP");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  get total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        price: sum.price + x.qtyTotal * x.price
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }
  checkout(){
    this.cartService.orders.push(this.items);
    window.alert('Order Completed Successfully');
    this.cartService.clearCart(this.items);
    this.router.navigate(['/orders'])
  }
}
