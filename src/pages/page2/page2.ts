import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuList } from '../templates/menulist';
import { InformationPage } from '../information/information';

/**
 * Generated class for the Page2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: '../templates/template.html',
})
export class Page2Page {
  menuList = new MenuList();
  properties: {icon: string, title: string};
  pageitems: Array<{icon: string, category: string, info:string, list: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.properties = { icon: "ios-restaurant", title: "Nudelgerichte, Reisgerichte, Reisnudelgerichte, Vegetarische Gerichte" };

    this.pageitems = [];
    this.pageitems.push(
      {icon: "ios-restaurant", category: "Nudelgerichte", info: "", list: this.menuList.noodleItems},
      {icon: "ios-restaurant", category: "Reisgerichte", info: "", list: this.menuList.riceItems},
      {icon: "ios-restaurant", category: "Reisnudelgerichte", info: "", list: this.menuList.riceItems},
      {icon: "ios-nutrition", category: "Vegetarische Gerichte", info: "Alle Gerichte werden mit Reis [A] serviert.", list: this.menuList.vegetarianItems},
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
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
}
