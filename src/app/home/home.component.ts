import { Component, OnInit } from '@angular/core';
import { ICartItem, IOrder, randomID } from '../data/data.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '../data/cart.service';
export interface Drinks {
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  drinks!: Drinks[];
  private orders: IOrder[] = [];
  cartProductList = [];
  items = [];
  constructor(public cartService: CartService){}
  ngOnInit(): void {
    fetch('./assets/drinks.json')
      .then((res) => res.json())
      .then((c) => {
        this.drinks = c;
      });
  }
  addToCart(item) {
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    }
  }
}
