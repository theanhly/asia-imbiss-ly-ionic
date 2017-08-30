import { Injectable } from '@angular/core';

@Injectable()
export class CartController {
    cartItems = [];

    constructor() {
        
    }

    public addCartItem(item) {
        this.cartItems.push(item);
    }

    public removeItemFromCart(index) {
        this.cartItems.splice(index, 1);
    }

    public removeAllItemsFromCart() {
        this.cartItems = [];
    }
 }