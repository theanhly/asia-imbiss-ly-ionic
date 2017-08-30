import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuList } from '../templates/menulist';
import { InformationPage } from '../information/information';
import { CartPage } from '../cart/cart';
import { CartController } from '../common/cartController';

@Component({
  selector: 'page-home',
  templateUrl: '../templates/template.html'
})
export class HomePage {
  menuList = new MenuList();
  properties: {icon: string, title: string};
  pageitems: Array<{icon: string, category: string, info:string, list: any}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public cartController: CartController) {
    this.properties = {icon: "home", title: "Asia Imbiss Ly"};

    this.pageitems = [];
    this.pageitems.push(
      {icon: "ios-restaurant", category: "Suppen", info: "", list: this.menuList.soupItems},
      {icon: "ios-restaurant", category: "Vorspeisen & Salate", info: "", list: this.menuList.starterItems},
      {icon: "ios-restaurant", category: "Nudelgerichte", info: "", list: this.menuList.noodleItems},
      {icon: "ios-restaurant", category: "Reisgerichte", info: "", list: this.menuList.riceItems},
      {icon: "ios-restaurant", category: "Reisnudelgerichte", info: "", list: this.menuList.riceItems},
      {icon: "ios-nutrition", category: "Vegetarische Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.vegetarianItems},
      {icon: "ios-restaurant", category: "Schweinefleisch-Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.pigItems},
      {icon: "ios-restaurant", category: "Rindfleisch-Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.beefItems},
      {icon: "ios-restaurant", category: "Hühnerfleisch-Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.chickenItems},
      {icon: "ios-restaurant", category: "Entenfleischgerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.duckItems},
      {icon: "ios-restaurant", category: "Fischgerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.fishItems},
      {icon: "ios-restaurant", category: "Großgarnelen‑Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.shrimpItems},
      {icon: "ios-restaurant", category: "Tintenfisch‑Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.squidItems},
      {icon: "ios-restaurant", category: "Spezialitäten des Hauses", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.houseSpecialItems},
      {icon: "ios-restaurant", category: "Asia-Spezialgerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.asiaSpecialItems},
      {icon: "ios-ice-cream", category: "Desserts", info: "", list: this.menuList.dessertItems},
      {icon: "beer", category: "Getränke", info: "zzgl. Pfand", list: this.menuList.drinkItems},
    );
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
