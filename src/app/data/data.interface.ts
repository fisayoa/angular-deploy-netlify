export interface ICartItem {
    id: number;
    price: number;
    productId: number;
    quantity: number;
  }
  
  export interface IOrderItem {
    productId: number;
    quantity: number;
    price: number;
  }
  
  export interface ICart {
    id: number;
    userId: number;
    items: ICartItem[];
  }
  export interface IOrder {
    id: number;
    items: IOrderItem[];
    totalPrice: number;
}



export const randomID = () => Math.round(Math.random() * 10000000)