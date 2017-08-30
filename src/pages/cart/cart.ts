import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartController } from '../common/cartController';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartController: CartController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  removeItem(index) {
    this.cartController.removeItemFromCart(index);
  }

  getCartCost() {
    var costs = 0;
    for (var i = 0; i < this.cartController.cartItems.length; i++) {
      costs += this.cartController.cartItems[i].price;
    }

    return costs;
  }

}
