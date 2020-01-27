import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { MainPage } from '../';
import { Countries } from '../../providers';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  slides: Slide[];
  currentCountries: any = [];

  constructor(public navCtrl: NavController, public countries: Countries, translate: TranslateService, public platform: Platform) {

  }

  startApp() {
    this.navCtrl.push(MainPage);
  }

  /* query for all countries that match the search*/
  getCountries(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentCountries = [];
      return;
    }
    this.currentCountries = this.countries.query({
      name: val
    });
  }
  
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    //this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    //this.menu.enable(true);
  } 

}
