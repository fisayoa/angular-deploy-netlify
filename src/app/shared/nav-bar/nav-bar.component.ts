import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  orders!: any;
  // amountofOrder = 0;
  items = [];
  constructor(public cartService: CartService){}
  ngOnInit(): void {
    // this.orders = JSON.parse(localStorage.getItem('cart'));
    this.cartService.loadCart();
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
  get amountofOrder(){
    return this.items.length;
  }
}
