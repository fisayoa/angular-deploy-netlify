import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/data/cart.service';
import { IOrder } from 'src/app/data/data.interface';
export interface Drinks {
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  drinks!: Drinks[];
  private orders: IOrder[] = [];
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
