import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/data/cart.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
  
  }
}
