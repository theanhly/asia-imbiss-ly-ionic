import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { CartPage } from '../pages/cart/cart';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  cartPage: any = CartPage;

  pages: Array<{icon:string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Gesamte Speisekarte', component: HomePage },
      { icon: 'ios-restaurant', title: 'Suppen, Vorspeisen & Salate', component: Page1Page },
      { icon: 'ios-restaurant', title: 'Nudelgerichte, Reisgerichte, Reisnudelgerichte, Vegetarische Gerichte', component: Page2Page },
      { icon: 'ios-restaurant', title: 'Schweinefleisch-Gerichte, Rindfleisch-Gerichte, Hühnerfleisch-Gerichte, Entenfleischgerichte', component: Page3Page },
      { icon: 'ios-restaurant', title: 'Fischgerichte, Großgarnelen‑Gerichte, Tintenfisch‑Gerichte', component: Page4Page },
      { icon: 'ios-restaurant', title: 'Spezialitäten des Hauses, Asia-Spezialgerichte', component: Page5Page },
      { icon: 'beer', title: 'Deserts, Getränke', component: Page6Page },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
