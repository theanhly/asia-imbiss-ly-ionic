import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuList } from '../templates/menulist';
import { InformationPage } from '../information/information';
import { CartPage } from '../cart/cart';
import { MapPage } from '../map/map';
import { CartController } from '../common/cartController';

/**
 * Generated class for the Page1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: '../templates/template.html',
})
export class Page1Page {
  menuList = new MenuList();
  properties: {icon: string, title: string};
  pageitems: Array<{icon: string, category: string, info:string, list: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public cartController: CartController) {
    this.properties = { icon: "ios-restaurant", title: "Suppen, Vorspeisen & Salate" };

    this.pageitems = [];
    this.pageitems.push(
      {icon: "ios-restaurant", category: "Suppen", info: "", list: this.menuList.soupItems},
      {icon: "ios-restaurant", category: "Vorspeisen & Salate", info: "", list: this.menuList.starterItems},
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Urlaub',
      subTitle: 'Wir sind bis zum Samstag, den 2.8.2018, im Urlaub. Wir sind am Sonntag, den 3.8.2018, wieder für Sie da.',
      buttons: ['Ok']
    });

    alert.present();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(InformationPage, {
      item: item
    });
  }

  mapTapped() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MapPage);
  }

  cartIconTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CartPage, {
      item: item
    });
  }

  addItemToCart(event, item) {
    this.cartController.addCartItem(item);
  }
}
