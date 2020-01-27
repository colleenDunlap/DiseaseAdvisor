import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Diseases } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-disease-detail',
  templateUrl: 'disease-detail.html'
})
export class DiseaseDetailPage {
  disease: any;

  constructor(public navCtrl: NavController, navParams: NavParams, diseases: Diseases) {
    this.disease = navParams.get('disease') || diseases.defaultDisease;
  }

}
